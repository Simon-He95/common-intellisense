const fsp = require('node:fs/promises')
const path = require('node:path')
const fg = require('fast-glob')

const root = process.cwd()
let stack = 0
const limit = 10
const hasDone = new Set()
async function setup() {
  const cwd = path.resolve(root, 'src/ui/arkVue/arkVue4')
  const entry = await fg(['**/*.json'], { dot: true, cwd, absolute: true })
  // const entry = await fg(['./scripts/tinyVue.data.json'], { dot: true, absolute: true })
  // entry.forEach(async (url: string) => {
  //   const _url = path.resolve(cwd, url)
  //   const content = JSON.parse(await fsp.readFile(_url, 'utf-8'))
  //   console.log(content.name)
  // })
  const rest = entry.map((url: string) => {
    if (hasDone.has(url))
      return
    return url
  }).filter(Boolean)
  const entryLength = entry.length
  stack--
  console.log({ rest })
  await Promise.all(rest.map(async (newUrl: string) => {
    if (hasDone.has(newUrl))
      return
    const content = await fsp.readFile(newUrl, 'utf8')
    if (!content)
      return
    const obj = JSON.parse(content)
    if (Array.isArray(obj)) {
      const namesMap = new Map()
      for (const item of obj) {
        namesMap.set(item.name, false)
        if (!item.props)
          continue
        for (const k in item.props) {
          const value = item.props[k]
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
        if (!item.methods)
          item.methods = []
        for (const method of item.methods) {
          if (!method.description)
            method.description = ''

          if (!method.value)
            method.value = ''

          if (hasChineseCharacters(method.description)) {
            method.description_zh = method.description
            try {
              method.description = await fanyi(method.description)
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
          if (!hasChineseCharacters(method.description_zh)) {
            try {
              method.description_zh = await fanyi(method.description)
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
        if (!item.events)
          item.events = []
        for (const event of item.events) {
          if (!event.description)
            event.description = ''

          if (!event.value)
            event.value = ''

          if (hasChineseCharacters(event.description)) {
            event.description_zh = event.description
            try {
              event.description = await fanyi(event.description)
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
          if (!hasChineseCharacters(event.description_zh)) {
            try {
              event.description_zh = await fanyi(event.description)
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
        if (item.slots) {
          for (const slot of item.slots) {
            if (!slot.description)
              slot.description = ''

            if (hasChineseCharacters(slot.description)) {
              slot.description_zh = slot.description
              try {
                slot.description = await fanyi(slot.description)
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
            if (!hasChineseCharacters(slot.description_zh)) {
              try {
                slot.description_zh = await fanyi(slot.description)
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
        namesMap.set(item.name, true)
        const data = JSON.stringify(obj, null, 2)
        console.log({ newUrl, resolveLength: hasDone.size, entryLength })
        fsp.writeFile(newUrl, data)
      }
      return
    } else {
      // obj['link_zh'] = `https://element-plus.org/zh-CN/component/${hyphenate(obj.name.slice(2))}.html`
      // obj.link = `https://element-plus.org/en-US/component/${hyphenate(obj.name.slice(2))}.html`
      // if (!obj['link_zh'])
      //   obj['link_zh'] = obj.link
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

      if (!obj.methods)
        obj.methods = []
      for (const item of obj.methods) {
        if (!item.description)
          item.description = ''

        if (!item.value)
          item.value = ''

        if (hasChineseCharacters(item.description)) {
          item.description_zh = item.description
          try {
            item.description = await fanyi(item.description)
          }
          catch (error) {
            if (stack >= limit)
              return

            console.log('reload', newUrl)
            stack++
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
      }
      if (!obj.events)
        obj.events = []
      for (const item of obj.events) {
        if (!item.description)
          item.description = ''

        if (!item.value)
          item.value = ''

        if (hasChineseCharacters(item.description)) {
          item.description_zh = item.description
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
      }

      if (obj.slots) {
        for (const item of obj.slots) {
          if (!item.description)
            item.description = ''

          if (hasChineseCharacters(item.description)) {
            item.description_zh = item.description
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
