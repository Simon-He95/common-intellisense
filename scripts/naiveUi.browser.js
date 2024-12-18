import data from './naiveUi.data.json'
import path from 'node:path'
import fsp from 'node:fs/promises'

function run() {
  const link = location.href
  const index = Array.from(document.querySelector('#API').parentElement.children).findIndex(item => item === document.querySelector('#API'))
  const names = Array.from(document.querySelector('#API').parentElement.children).slice(index).filter(item => item.tagName === 'H3')
  const data = {}
  names.forEach((item) => {
    const [name, type] = item.textContent.replace(/, /g, ',').split(' ')
    let _names = [name]
    if (name.includes(',')) {
      _names = name.split(',')
    }
    _names.forEach(name => {
      if (!data[name]) {
        data[name] = {
          name: `N${name}`,
          props: {},
          events: [],
          methods: [],
          slots: [],
          suggestions: [],
          link,
          link_zh: link,
          filename: name,
          typeDetail: {}
        }
      }

      const lowType = type?.toLowerCase()
      if (lowType === 'props') {
        const props = data[name].props
        const events = data[name].events
        let children = item.nextElementSibling.querySelectorAll('table > tbody tr')
        if (children.length === 0) {
          children = item.nextElementSibling.nextElementSibling.querySelectorAll('table > tbody tr')
        }
        children.forEach(child => {
          const [name, type, value, description, version] = Array.from(child.children).map(item => item?.textContent)
          if (name.startsWith('on-')) {
            // events
            events.push({
              name: name.slice(3),
              description,
              description_zh: description,
              params: type,
              version
            })
          } else {
            let fixedName = name
            if (/function|\(|Array/.test(type) || type === 'number' || /option/.test(name)) {
              fixedName = ':' + name
            }
            props[fixedName] = {
              description,
              description_zh: description,
              default: value.replace(/'/g, ''),
              value: '',
              type: type.replace(/{[^}]*}/g, '').replace(/\[[^\]]*\]/g, '').includes('\'') ? type.replace(/(?<![{[][^{}[\]])\|(?![^{}[\]]*[\]}])/g, '/').replace(/'/g, '') : type.replace(/'/g, ''),
              version,
              required: false,
            }
          }
        })
      } else if (lowType === 'slots') {
        const slots = data[name].slots
        const children = item.nextElementSibling.querySelectorAll('table > tbody tr')
        children.forEach(child => {
          const [name, _, description, version] = Array.from(child.children).map(item => item?.textContent)
          slots.push({
            name,
            description,
            description_zh: description,
            version
          })
        })
      } else if (lowType === 'events') {
        const events = data[name].events
        console.error('error')
      } else if (lowType === 'methods') {
        const methods = data[name].methods
        const children = item.nextElementSibling.querySelectorAll('table > tbody tr')
        children.forEach(child => {
          const [name, params, description, version] = Array.from(child.children).map(item => item?.textContent)
          methods.push({ name, description, description_zh: description, params, version })
        })
      } else {
        delete data[name]
      }
    })
  })

  const result = Object.values(data)
  copyToClipboard(JSON.stringify(result, null, 2))
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
generateJson(data)
function generateJson() {
  const baseSrc = 'src/ui/naiveUi/naiveUi2'
  data.forEach(item => {
    const url = path.resolve(cwd, baseSrc, `${item.filename}.json`)
    fsp.writeFile(url, JSON.stringify(item, null, 2), 'utf-8')
  })
}
