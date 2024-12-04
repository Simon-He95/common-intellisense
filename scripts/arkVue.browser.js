const fsp = require('node:fs/promises')
const path = require('path')
const process = require('process')
const data = require('./arkVue.data.json')


function run() {
  const link = location.href
  const elements = document.querySelector('#api-reference').parentElement.children
  const index = Array.from(elements).indexOf(document.querySelector('#api-reference'))
  const name = document.querySelector('article>h1').textContent.replace('#', '').replace(/\s+/, '')
  const description = document.querySelector('article>p').textContent
  const tables = Array.from(elements).slice(index + 1).map(item => item.querySelector('table')).filter(Boolean)
  
  const results = []
  // 获取所有table
  tables.forEach(table => {
    // 检测 table header
    const firstColName = table.querySelector('thead > tr > th')?.textContent?.toLocaleLowerCase()
    let previousElementSibling = table.closest('div')?.previousElementSibling
    // 找到 h3 元素
    if (previousElementSibling && previousElementSibling.tagName !== 'H3') {
      previousElementSibling = previousElementSibling.previousElementSibling
    }
    const tagName = `${name}.${previousElementSibling.textContent}`
    const data = results.find(item => item.name === tagName) || {
      name: tagName,
      description,
      description_zh: description,
      slots: [],
      suggestions: [],
      filename: tagName.replace(/\./g, ''),
      link,
      link_zh: link
    }
    const props = {}
    const events = []


    if (firstColName === 'prop') {
      table.querySelectorAll('tbody > tr').forEach(item => {
        const _name = item.children[0].textContent
        const value = item.children[1].textContent
        const type = item.children[2].querySelector('code').textContent
        const description = item.children[2].querySelector('p').textContent
        props[_name] = {
          default: value,
          value: '',
          type,
          description,
          description_zh: description
        }
      })
      data.props = props
    } else if (firstColName === 'slots') {

    } else if (firstColName === 'emit') {
      table.querySelectorAll('tbody > tr').forEach(item => {
        const name = item.children[0].textContent
        const description = item.children[1].querySelector('p').textContent
        const params = item.children[1].querySelector('code')?.textContent
        events.push({ name, description, description_zh: description, params })
      })
      data.events = events
    } else {
      // 忽略
      return
    }
    if (!results.find(item => item.name === tagName)) {
      results.push(data)
    }
  })


  if (results.length === 1)
    copyToClipboard(JSON.stringify(results[0], null, 2))
  else
    copyToClipboard(JSON.stringify(results, null, 2))
  return results
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
  const baseSrc = 'src/ui/arkVue/arkVue4'
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
