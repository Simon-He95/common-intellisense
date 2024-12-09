const fsp = require('node:fs/promises')
const path = require('path')
const process = require('process')
const data = require('./uniUi.data.json')

function run() {
  const link = location.href
  const typeDetail = {}
  const description = document.querySelector('.tip + p').textContent
  const data = {}
  const h3 = document.querySelectorAll('h3')

  h3.forEach(item => {
    const id = item.id
    if (!id.includes('-'))
      return
    const name = id.split('-').slice(0, -1).join('-')
    const type = id.split('-').slice(-1)[0]
    // 如果name中有中文就不是目标
    if (name.match(/[\u4e00-\u9fa5]/)) return
    const lowType = type.toLocaleLowerCase()
    const slots = []
    const methods = []
    const events = []
    const props = {}
    const filename = item.textContent.split(' ').slice(1, -1).join('')
    const target = data[filename] || (data[filename] = {
      name: `Uni${filename}`,
      typeDetail,
      link,
      link_zh: link,
      filename,
      slots,
      methods,
      events,
      props,
      suggestions: [],
      description,
      description_zh: description,
    })
    const table = item.nextElementSibling?.querySelectorAll('tbody tr')
    if (!table) return

    if (lowType === 'props') {
      table.forEach(item => {
        let name = item.children[0].textContent
        if (name.includes('v-model')) {
          name = ':v-model'
        }
        let type
        let value
        let description
        if (item.children.length === 5) {
          type = item.children[2].textContent && item.children[2].textContent !== '-' ? item.children[2].textContent : item.children[1].textContent
          value = item.children[3].textContent
          description = item.children[4].textContent
        } else {
          type = item.children[1].textContent
          value = item.children[2].textContent
          description = item.children[3].textContent
        }

        props[name] = { type, value: '', default: value, description, description_zh: description, }
      })
      target.props = props
    } else if (lowType === 'event') {
      table.forEach(item => {
        const name = item.children[0].textContent.replace('@', '')
        const description = item.children[1].textContent
        const params = item.children[2]?.textContent || ''
        events.push({ name, description, description_zh: description, params, })
      })
      target.events = events
    } else if (lowType === 'events') {
      table.forEach(item => {
        const name = item.children[0].textContent.replace('@', '')
        const params = item.children[1].textContent
        const description = item.children[2]?.textContent || ''
        events.push({ name, description, description_zh: description, params, })
      })
      target.events = events
    } else if (lowType === 'methods') {
      table.forEach((item) => {
        const name = item.children[0].textContent
        const description = item.children[1].textContent
        const params = item.children[2]?.textContent || ''
        methods.push({ name, description, description_zh: description, params, })
      })
      target.methods = methods
    } else if (lowType === 'slots') {
      table.forEach(item => {
        const name = item.children[0].textContent
        if (name.includes('弃用')) return
        const description = item.children[1].textContent
        slots.push({ name, description, description_zh: description, })
      })
      target.slots = slots
    } else if (lowType === 'params') {
      const typeObj = typeDetail[name] || (typeDetail[name] = {})
      table.forEach(item => {
        const name = item.children[0].textContent
        const description = item.children[1].textContent
        typeObj.push({
          name,
          description,
          description_zh: description,
        })
      })
    }
  })
  console.log({ data })
  copyToClipboard(JSON.stringify(Object.values(data), null, 2))
  // copyToClipboard(JSON.stringify(results, null, 2))
  // return results
}

function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  textArea.setSelectionRange(0, 99999); // 选中全部内容
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

const cwd = process.cwd()
function arrayGenerateFile(array) {
  const baseSrc = 'src/ui/dcloudioUniUi/dcloudioUniUi1'
  array.forEach(async item => {
    const url = path.resolve(cwd, baseSrc, `${item.filename}.json`)
    // 兼容 suggestions
    try {
      const fileContent = JSON.parse(await fsp.readFile(url, 'utf-8'))
      const suggestions = fileContent.suggestions || []
      item.suggestions = suggestions
    } catch (e) {

    }

    fsp.writeFile(url, JSON.stringify(item, null, 2), 'utf-8')
  })
}


arrayGenerateFile(data)
