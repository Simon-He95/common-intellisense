const fsp = require('node:fs/promises')
const path = require('path')
const process = require('process')
const data = require('./nutUi.data.json')

// document.querySelector('.doc-nav').addEventListener('click', (e) => {
//   const target = e.target.closest('a')
//   if (target.className.includes('router-link-active router-link-exact-active')) {
//     setTimeout(() => {
//       run()
//     }, 200);
//   }
// })

function run() {
  const link = location.href
  const [name, tag] = document.querySelector('.doc-title .title').textContent.replace('#', '').split(' ')
  const tables = document.querySelectorAll('table')
  const data = {}
  tables.forEach(table => {
    let [content, type] = table.previousElementSibling.textContent.trim().split(' ')
    if ((/H[23]/.test(table.previousElementSibling.previousElementSibling.tagName)) && table.previousElementSibling.previousElementSibling.textContent.toLowerCase() !== 'api') {
      type = content
      if (table.previousElementSibling.previousElementSibling.textContent.toLowerCase() === 'methods') {
        type = 'methods'
        content = name
      } else
        content = table.previousElementSibling.previousElementSibling.textContent.trim()
    }
    if (content.toLowerCase() === 'ref') {
      type = 'methods'
      content = name
    }
    if (content === '方法') {
      type = 'methods'
      content = name
    }
    if (!type) {
      type = content
      content = name
    }
    console.log()
  
    if (!['props', 'slots', 'events', 'methods'].includes(type.toLowerCase()))
      return
    if (!data[content])
      data[content] = {}
    data[content][type.toLowerCase()] = table.querySelectorAll('tbody > tr')
  })
  console.log({data})
  const description = (document.querySelector('#介绍 + p') || Array.from(document.querySelectorAll('h2')).find(item => item.textContent === '介绍')).textContent
  const description_zh = description
  const results = []
  for (const key in data) {
    const props = {}
    const events = []
    const methods = []
    const slots = []
    const typeDetail = {}
    const suggestions = []
    let propsChildren = []
    let eventsChildren = []
    let slotsChildren = []
    let methodsChildren = []
    const result = { name: 'Nut' + key, description, description_zh, tag, props, link, link_zh: link, typeDetail, events, methods, slots, filename: key, suggestions }
    if (data[key].props)
      propsChildren = data[key].props
    if (data[key].events)
      eventsChildren = data[key].events
    if (data[key].slots)
      slotsChildren = data[key].slots
    if (data[key].methods)
      methodsChildren = data[key].methods
    console.log({ propsChildren })
    Array.from(propsChildren).forEach((item) => {
      let children = Array.from(item.children)
      let prop = children[0].textContent.split(' ')[0]
      const version_reg = /v[0-9]+\..*/
      if (version_reg.test(prop)) {
        prop = prop.replace(version_reg, '').trim()
      }
      let isRequired = false
      if (prop.includes('*'))
        isRequired = true
      prop = prop.replace('*', '')
      const description = children[1].textContent.replace(/\n/g, '')
      const type = children[2].textContent
      let value = children[3].textContent
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
        isRequired,
        description_zh: description,
      }
    })

    Array.from(eventsChildren).forEach((item) => {
      const name = item.children[0].textContent.split(' ')[0]
      const description = item.children[1]?.textContent.replace('*', '').replace(/\n/g, '') || ''
      const params = item.children[2]?.textContent.replace(/\n/g, '') || ''
      events.push({ name, description, description_zh: description, params })
    })

    Array.from(slotsChildren).forEach((item) => {
      const name = item.children[0].textContent.split(' ')[0]
      const description = item.children[1].textContent
      slots.push({ name, description, description_zh: description })
    })

    Array.from(methodsChildren).forEach(item => {
      const name = item.children[0].textContent.split(' ')[0]
      const params = item.children[1]?.textContent || ''
      const description = item.children[2]?.textContent.replace('*', '') || ''

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
    results.push(result)
  }
  if (results.length === 1)
    copyToClipboard(JSON.stringify(results[0], null, 2))
  else
    copyToClipboard(JSON.stringify(results, null, 2))
  return results
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

function getTypeDetail() {
  const typeDetail = {}
  const table = $0.closest('table')
  const title = table.previousElementSibling.textContent.split(' ')[0]
  const temp = []
  typeDetail[title] = temp
  table.querySelectorAll('tbody > tr').forEach(item => {
    const name = item.children[0].textContent
    const detail = item.children[1].textContent
    const type = item.children[2].textContent
    temp.push({ name, detail, type })
  })
  copyToClipboard(JSON.stringify(typeDetail, null, 2))
  return typeDetail
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
  const baseSrc = 'src/ui/nutUi/nutUi4'
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
