import data from './materialUi.data.json'
import path from 'node:path'
import fsp from 'node:fs/promises'


function run() {
  const props = {}
  const events = []
  const methods = []
  const slots = []
  const link = location.href
  const tbody = document.querySelector('#props')?.parentElement?.nextElementSibling?.nextElementSibling?.querySelectorAll('tbody>tr')
  if (tbody) {
    Array.from(tbody).forEach((item) => {
      const children = item.children
      let name = children[0].textContent
      const required = name.endsWith('*')
      name = name.replace('*', '')
      let value = ''
      let description = ''
      if (!children[3]) {
        description = children[2].textContent
        if (name.startsWith('on')) {
          const params = children[2].querySelector('code')?.textContent
          const description = children[2].textContent.replace(params, '')
          events.push({
            name,
            description,
            description_zh: description,
            params
          })
        }
      } else {
        value = children[2].textContent
        description = children[3].textContent
        if (name.startsWith('on')) {
          const params = children[3].querySelector('code')?.textContent
          const description = children[3].textContent.replace(params, '')
          events.push({
            name,
            description,
            description_zh: description,
            params
          })
        }
      }
      
      const type = children[1].textContent.replace(/'/g, '').replace(/ /g, ' ')
      props[name] = {
        description,
        description_zh: description,
        default: value,
        value: '',
        type,
        required
      }
    })
  }
  const eventBody = document.querySelector('#events')?.parentElement?.nextElementSibling?.querySelectorAll('tbody>tr')

  if (eventBody) {
    Array.from(eventBody).forEach((item) => {
      const name = item.children[0].textContent.split(' ')[0]
      const description = item.children[1].textContent
      const params = item.children[2].textContent
      events.push({ name, description, description_zh: description, params })
    })
  }
  const slotBody = document.querySelector('#slots')?.parentElement?.nextElementSibling?.querySelectorAll('tbody>tr')
  if (slotBody) {
    // Array.from(slotBody).forEach((item) => {
    //   const children = item.children[0].children
    //   let name = children[0].textContent
    //   const description = children[1].textContent
    //   if (name === '-' || !name)
    //     name = 'default'
    //   slots.push({
    //     name,
    //     description,
    //     description_zh: description,
    //   })
    // })
  }
  // const methodsBody = (document.querySelector('#methods + table')
  //   ? document.querySelector('#methods + table')
  //   : document.querySelector('#methods + * + table'))
  //   || document.querySelector('#method + table')
  //   ? document.querySelector('#method + table')
  //   : document.querySelector('#method + * + table')
  // if (methodsBody) {
  //   Array.from(methodsBody.querySelectorAll('tbody tr')).forEach((item) => {
  //     const name = item.children[0].textContent.split('(')[0]
  //     const description = item.children[1].textContent
  //     const params = item.children[0].textContent.split('(')[1]
  //       ? `(${item.children[0].textContent.split('(')[1]}`
  //       : ''
  //     methods.push({ name, description, description_zh: description, params })
  //   })
  // }
  // else {
  //   // api
  //   const methodsBody = document.querySelector('#api + div')
  //     ? document.querySelector('#api + div')
  //     : document.querySelector('#api + * + div')
  //   if (methodsBody) {
  //     Array.from(methodsBody.children).forEach((item) => {
  //       const name = item.children[0].textContent.split('(')[0]
  //       const description = item.children[1].textContent
  //       const params = item.children[0].textContent.split('(')[1]
  //         ? `(${item.children[0].textContent.split('(')[1]}`
  //         : ''
  //       methods.push({ name, description, description_zh: description, params })
  //     })
  //   }
  // }
  const name = document.querySelector('h1').textContent.split(' ')[0]
  const result = { name, props, link, link_zh: link, typeDetail: {}, events, methods, slots, suggestions: [], filename: name }
  copyToClipboard(JSON.stringify(result, null, 2))
  return result
}

// const storage = JSON.parse(localStorage.getItem('materialUi.data.cache') || '[]')
// function setup() {
//   const item = run()
// storage.push(item)
//   localStorage.setItem('materialUi.data.cache', JSON.stringify(storage))
//   return storage
// }



function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  textArea.setSelectionRange(0, 99999); // 选中全部内容
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
function getProps() {
  const props = {}
  $0.closest('tbody').querySelectorAll('tr').forEach((item) => {
    const name = item.children[0].firstChild.textContent
    const description = item.children[1].textContent
    const type = !/(-|true|false)/.test(item.children[4].textContent)
      ? item.children[4].textContent
      : item.children[2].textContent
    const value = item.children[3].textContent
    props[name] = {
      description,
      description_zh: description,
      default: value,
      value: '',
      type,
    }
  })
  return props
}

const cwd = process.cwd()
generateJson(data)
function generateJson() {
  const baseSrc = 'src/ui/materialUi/materialUi5'
  data.forEach(item=>{
    const url = path.resolve(cwd, baseSrc, `${item.name}.json`)
    fsp.writeFile(url, JSON.stringify(item, null, 2), 'utf-8')
  })
}


