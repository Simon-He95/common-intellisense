const fsp = require('node:fs/promises')
const path = require('node:path')
const fg = require('fast-glob')

const root = process.cwd()
let stack = 0
const limit = 10
const hasDone = new Set()
async function setup() {
  const cwd = path.resolve(root, 'src/ui/vuetify')
  const entry = await fg(['**/directives.json'], { dot: true, cwd })
  // entry.forEach(async (url: string) => {
  //   const _url = path.resolve(cwd, url)
  //   const content = JSON.parse(await fsp.readFile(_url, 'utf-8'))
  //   console.log(content.name)
  // })
  const rest = entry.map((url: string) => {
    const newUrl = path.resolve(cwd, url)
    if (hasDone.has(newUrl))
      return
    return newUrl
  }).filter(Boolean)
  const entryLength = entry.length
  stack--
  console.log(rest)

  await Promise.all(rest.map(async (newUrl: string) => {
    if (hasDone.has(newUrl))
      return
    const content = await fsp.readFile(newUrl, 'utf8')
    if (!content)
      return
    const obj = JSON.parse(content)

    for (const key in obj) {
      const value = obj[key]
      for (const item of value) {
        if (hasChineseCharacters(item.description)) {
          item.description_zh = value.description
          try {
            item.description = await fanyi(item.description)
          }
          catch (error) {
            if (stack >= limit)
              return
            stack++
            console.log('reload', newUrl)
            setTimeout(setup, 500)
            return
          }
        }
        if (!hasChineseCharacters(item.description_zh)) {
          try {
            item.description_zh = await fanyi(item.description)
          }
          catch (error) {
            if (stack >= limit)
              return
            stack++
            console.log('reload', newUrl)
            setTimeout(setup, 500)
            return
          }
        }
        if (item.params.length) {
          for (const child of item.params) {
            if (hasChineseCharacters(child.description)) {
              child.description_zh = child.description
              try {
                child.description = await fanyi(child.description)
              }
              catch (error) {
                if (stack >= limit)
                  return
                stack++
                console.log('reload', newUrl)
                setTimeout(setup, 500)
                return
              }
            }
            if (!hasChineseCharacters(child.description_zh)) {
              try {
                child.description_zh = await fanyi(child.description)
              }
              catch (error) {
                if (stack >= limit)
                  return
                stack++
                console.log('reload', newUrl)
                setTimeout(setup, 500)
                return
              }
            }
          }
        }
      }
    }
    for (const key in obj.props) {
      const value = obj.props[key]
      if (!value.description)
        value.description = ''

      if (!value.value)
        value.value = ''

      if (hasChineseCharacters(value.description)) {
        value.description_zh = value.description
        try {
          value.description = await fanyi(value.description)
        }
        catch (error) {
          if (stack >= limit)
            return
          stack++
          console.log('reload', newUrl)
          setTimeout(setup, 500)
          return
        }
      }
      if (!hasChineseCharacters(value.description_zh)) {
        try {
          value.description_zh = await fanyi(value.description)
        }
        catch (error) {
          if (stack >= limit)
            return
          stack++
          console.log('reload', newUrl)
          setTimeout(setup, 500)
          return
        }
      }
    }


    try {
      hasDone.add(newUrl)
      const data = JSON.stringify(obj, null, 2)
      console.log({ newUrl, resolveLength: hasDone.size, entryLength })
      fsp.writeFile(newUrl, data)
    }
    catch (error) {
      if (stack >= limit)
        return
      stack++
      console.log('reload')
      setTimeout(setup, 500)
    }
  }))
}

setup()

const { translate } = require('bing-translate-api')

const cacheMap = new Map()
function fanyi(text: string) {
  if (!text)
    return ''
  if (cacheMap.has(text))
    return cacheMap.get(text)

  return new Promise((resolve, reject) => {
    if (hasChineseCharacters(text)) {
      translate(text, null, 'en').then((res: any) => {
        const result = res.translation
        cacheMap.set(text, result)
        resolve(result)
      }).catch((reject))
    }
    else {
      translate(text, null, 'zh-Hans').then((res: any) => {
        const result = res.translation
        cacheMap.set(text, result)
        resolve(result)
      }).catch(reject)
    }
  })
}

function hasChineseCharacters(str: string) {
  const pattern = /[\u4E00-\u9FA5]/ // 匹配中文字符的正则表达式范围
  return pattern.test(str)
}
