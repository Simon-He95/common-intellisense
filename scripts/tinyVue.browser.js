const fsp = require('node:fs/promises')
const path = require('path')
const process = require('process')
const data = require('./tinyVue.data.json')

function run() {
  const link = location.href
  // https://vuetifyjs.com/zh-Hans/components/all/#section-5bb956687ec44ef6-containment
  const name = document.querySelector('h1').textContent.replace('#', '').replace(/\s.*/, '')
  const props = {}
  const events = []
  const methods = []
  const slots = []
  const typeDetail = {}
  const result = { name: 'Tiny' + name, props, link, link_zh: link, typeDetail, events, methods, slots, filename: name }
  const tables = document.querySelectorAll('.api-table')
  let propsChildren = []
  let eventsChildren = []
  let slotsChildren = []
  let methodsChildren = []
  tables.forEach(table => {
    const content = table.previousElementSibling.textContent.trim()
    if (content === 'props') {
      propsChildren = table.querySelectorAll('tbody > tr')
    } else if (content === 'events') {
      eventsChildren = table.querySelectorAll('tbody > tr')
    } else if (content === 'slots') {
      slotsChildren = table.querySelectorAll('tbody > tr')
    } else if (content === 'methods') {
      methodsChildren = table.querySelectorAll('tbody > tr')
    }
  })

  Array.from(propsChildren).forEach((item) => {
    Array.from($0.closest('tbody').children).forEach(item => {
      let children = Array.from(item.children)
      let prop = children[0].textContent.replace('*', '')
      if (!prop) {
        children = children.slice(1)
        prop = children[0].textContent.replace('*', '')
      }
      const description = children[3].textContent
      const type = children[1].textContent.replace(/\n/g, '')
      let value = children[2].textContent
      if (prop === 'style')
        prop = ':style'
      else if (
        type === 'number' || type === 'object'
      )
        prop = `:${prop}`

      if (prop === 'model-value (v-model)' || prop === 'model-value' || prop === 'modelValue / v-model')
        prop = 'v-model'
      else
        prop = prop.replace(/([\w-]+) \(v-model\)/, 'v-model:$1')
      if (type === 'boolean' && (value === '' || value === '-'))
        value = 'false'
      else if (type === 'CSSProperties' && !prop.startsWith(':'))
        prop = `:${prop}`

      props[prop] = {
        default: value,
        value: '',
        type,
        description,
        description_zh: description,
      }
    })
  })

  Array.from(eventsChildren).forEach((item) => {
    const name = item.children[0].textContent.replace('*', '')
    const description = item.children[2]?.textContent.replace(/\n/g, '') || ''
    const params = item.children[1]?.textContent.replace(/\n/g, '') || ''
    events.push({ name, description, description_zh: description, params })
  })

  Array.from(slotsChildren).forEach((item) => {
    const name = item.children[0].textContent.replace('*', '')
    const description = item.children[1].textContent
    slots.push({ name, description, description_zh: description })
  })

  Array.from(methodsChildren).forEach(item => {
    const name = item.children[0].textContent.replace('*', '')
    const params = item.children[1]?.textContent || ''
    const description = item.children[2]?.textContent || ''

    methods.push({
      name,
      description,
      params,
      description_zh: description
    })
  })
  const type = document.querySelector('#types')
  if (type) {
    try {
      const detail = Array.from(type.nextElementSibling.querySelectorAll('pre')).map(i => i.textContent)
      const names = Array.from(type.nextElementSibling.querySelectorAll('.tiny-collapse-item__word-overflow')).map(i => i.textContent)
      names.forEach((name, index) => {
        typeDetail[name] = detail[index]
      })
    } catch (error) {

    }
  }
  copyToClipboard(JSON.stringify(result, null, 2))
  return result
}

function getProps() {
  const props = {}
  Array.from($0.closest('tbody').children).forEach(item => {
    let children = Array.from(item.children)
    let prop = children[0].textContent.replace('*', '')
    if (!prop) {
      children = children.slice(1)
      prop = children[0].textContent.replace('*', '')
    }
    const description = children[3].textContent
    const type = children[1].textContent.replace(/\n/g, '')
    let value = children[2].textContent
    if (prop === 'style')
      prop = ':style'
    else if (
      type === 'number' || type === 'object'
    )
      prop = `:${prop}`

    if (prop === 'model-value (v-model)' || prop === 'model-value' || prop === 'modelValue / v-model')
      prop = 'v-model'
    else
      prop = prop.replace(/([\w-]+) \(v-model\)/, 'v-model:$1')
    if (type === 'boolean' && (value === '' || value === '-'))
      value = 'false'
    else if (type === 'CSSProperties' && !prop.startsWith(':'))
      prop = `:${prop}`

    props[prop] = {
      default: value,
      value: '',
      type,
      description,
      description_zh: description,
    }
  })
  console.log({ props })
  return props
}

function getEvent() {
  const events = []
  Array.from($0.closest('tbody').children).forEach(item => {
    const name = item.children[0].textContent.replace('*', '')
    const description = item.children[2]?.textContent.replace(/\n/g, '') || ''
    const params = item.children[1]?.textContent.replace(/\n/g, '') || ''
    events.push({ name, description, description_zh: description, params })
  })
  console.log({ events })
  return events
}

function getSlots() {
  const slots = []
  Array.from($0.closest('tbody').children).forEach(item => {
    const name = item.children[0].textContent.replace('*', '')
    const description = item.children[1].textContent
    slots.push({ name, description, description_zh: description })
  })
  console.log({ slots })
  return slots
}

function getMethods() {
  const methods = []
  Array.from($0.closest('tbody').children).forEach(item => {
    const name = item.children[0].textContent.replace('*', '')
    const params = item.children[1]?.textContent || ''
    const description = item.children[2]?.textContent || ''

    methods.push({
      name,
      description,
      params,
      description_zh: description
    })
  })
  console.log({ methods })
  return methods
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
  const baseSrc = 'src/ui/tinyVue/tinyVue3'
  array.forEach(async item => {
    const url = path.resolve(cwd, baseSrc, `${item.filename}.json`)
    // 兼容 suggestions
    const fileContent = JSON.parse(await fsp.readFile(url, 'utf-8'))
    const suggestions = fileContent.suggestions || []
    item.suggestions = suggestions
    fsp.writeFile(url, JSON.stringify(item, null, 2), 'utf-8')
  })
}


arrayGenerateFile(data)
