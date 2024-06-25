const fsp = require('node:fs/promises')
const path = require('path')
const process = require('process')
const data = require('./shadcnSvelte.data.json')

function run() {
  const link = location.href
  // https://vuetifyjs.com/zh-Hans/components/all/#section-5bb956687ec44ef6-containment
  const name = document.querySelector('h1').textContent.replace('#', '').replace(/\s.*/, '')

  const titleHeaders = Array.from(document.querySelectorAll('h3')).filter(item => item.id.startsWith(name.toLocaleLowerCase()))

  const result = titleHeaders.map(header => {
    const props = {}
    const events = []
    const methods = []
    const slots = []
    const name = header.textContent

    const root = header.closest('div')
    const description = root.nextElementSibling.textContent
    const result = { name, props, description, link, link_zh: link, typeDetail: {}, events, methods, slots, filename: name.replace(/\.(\w)/g, (_, v) => v.toUpperCase()) }
    const main = Array.from(root.nextElementSibling.nextElementSibling.children)

    const propsChildren = main.find(item => item.querySelector('table>thead>tr>th').textContent.trim() === 'Property')
    const slotsChildren = main.find(item => item.querySelector('table>thead>tr>th').textContent.trim() === 'Slot Property')

    if (propsChildren)
      Array.from(propsChildren.querySelectorAll('tbody>tr')).forEach(item => {
        const childname = item.children[0].textContent.trim()
        const type = item.children[1].textContent.split(' ')[0]
        const description = item.children[2].children[0].textContent
        const value = item.children[2].children[1].textContent.split(':')[1].trim().replace(/——/g, '_').replace('_ undefined', '_')
        props[childname] = {
          value: '',
          default: value,
          type,
          description,
          description_zh: description
        }
      })
    if (slotsChildren)
      Array.from(slotsChildren.querySelectorAll('tbody>tr')).forEach((item) => {
        const name = item.children[0].textContent.trim()
        const description = item.children[2].textContent
        slots.push({
          name,
          description,
          description_zh: description
        })
      })
    return result
  })
  copyToClipboard(JSON.stringify(result, null, 2))
  return result
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
  const baseSrc = 'src/ui/shadcnSvelte/shadcnSvelte0'
  array.forEach(item => {
    const url = path.resolve(cwd, baseSrc, `${item.filename}.json`)
    fsp.writeFile(url, JSON.stringify(item, null, 2), 'utf-8')
  })
}


arrayGenerateFile(data)
