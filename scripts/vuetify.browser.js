function run() {
  const link = location.href
  // https://vuetifyjs.com/zh-Hans/components/all/#section-5bb956687ec44ef6-containment
  const name = document.querySelector('.v-heading').textContent.replace('#', '').replace(/\s.*/, '')
  const props = {}
  const events = []
  const methods = []
  const slots = []
  const exposed = []
  const result = { name, props, link, link_zh: link, typeDetail: {}, events, methods, slots, exposed }
  const { propsChildren, slotsChildren, eventsChildren, exposedChildren } = getChildren()

  for (let i = 0; i < propsChildren.length; i += 2) {
    const item = propsChildren[i]
    let propContent = item.children[0].textContent
    let required = propContent.includes('*')
    let [prop, ...rest] = propContent.replace(/\*/g, '').split(' ')
    const description = item.nextElementSibling?.textContent
    const type = item.children[1]?.textContent.replace(/\n/g, '')
    if (!type)
      return
    let value = item.children[2].textContent
    if (prop === 'style')
      prop = ':style'
    else if (
      type === 'number' || type === 'number | ResponsiveValue' || type === 'object'
    )
      prop = `:${prop}`

    if (prop === 'model-value (v-model)' || prop === 'model-value')
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
      version: rest.join(' '),
      description,
      description_zh: description,
      required
    }
  }

  for (let i = 0; i < eventsChildren.length; i += 2) {
    const item = eventsChildren[i]
    const name = item.children[0].textContent.replace('*', '')
    const description = item.nextElementSibling?.textContent
    const params = item.children[1]?.textContent.replace(/\n/g, '')
    events.push({ name, description, description_zh: description, params })
  }

  for (let i = 0; i < slotsChildren.length; i += 3) {
    const item = slotsChildren[i]
    const name = item.children[0].textContent.replace('*', '').trim()
    const description = item.nextElementSibling?.nextElementSibling?.textContent.trim()
    slots.push({ name, description, description_zh: description })
  }
  for (let i = 0; i < exposedChildren.length; i += 3) {
    const item = exposedChildren[i]
    const name = item.children[0].textContent.replace('*', '').trim()
    const detail = item.nextElementSibling?.textContent.trim()
    const description = item.nextElementSibling?.nextElementSibling?.textContent.trim()
    exposed.push({
      name,
      description,
      description_zh: description,
      detail
    })
  }

  copyToClipboard(JSON.stringify(result, null, 2))

  return result
}

function getChildren() {
  let propsChildren = []
  let eventsChildren = []
  let slotsChildren = []
  let exposedChildren = []
  Array.from(document.querySelectorAll('.text-h6')).forEach(item => {
    const content = item.textContent.toLowerCase().trim()
    if (content === 'props') {
      propsChildren = Array.from(item.nextElementSibling.querySelectorAll('tbody tr'))
    } else if (content === 'slots') {
      slotsChildren = Array.from(item.nextElementSibling.querySelectorAll('tbody tr'))
    } else if (content === 'events') {
      eventsChildren = Array.from(item.nextElementSibling.querySelectorAll('tbody tr'))
    } else if (content === 'exposed') {
      exposedChildren = Array.from(item.nextElementSibling.querySelectorAll('tbody tr'))
    }
  })
  return {
    propsChildren,
    eventsChildren,
    slotsChildren,
    exposedChildren
  }
}

function getDirectives() {
  const params = []
  let temp = {}
  document.querySelector('tbody')?.querySelectorAll('tr').forEach((item, i) => {
    const key = i % 3
    if (key === 0) {
      temp = {
        default: ''
      }
      temp.name = item.children[0].textContent
    } else if (key === 1) {
      temp.type = item.children[0].textContent
    } else if (key === 2) {
      temp.description = item.children[0].textContent
      temp.description_zh = item.children[0].textContent
      params.push(temp)
    }
  })
  const documentation = document.querySelector('#value code').textContent
  const name = document.querySelector('.v-heading').textContent.split(' ')[0].slice(1)
  const directives = {
    name,
    description: '',
    description_zh: '',
    link: `https://vuetifyjs.com/en/directives/${name.split('-').slice(-1)[0]}/`,
    link_zh: `https://vuetifyjs.com/en/directives/${name.split('-').slice(-1)[0]}/`,
    params,
    documentation
  }
  copyToClipboard(JSON.stringify(directives, null, 2))
  return directives
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
