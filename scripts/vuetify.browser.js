function run() {
  const link = location.href
  // https://vuetifyjs.com/zh-Hans/components/all/#section-5bb956687ec44ef6-containment
  const name = document.querySelector('.v-heading').textContent.replace('#', '').replace(/\s.*/, '')
  const props = {}
  const events = []
  const methods = []
  const slots = []
  const result = { name, props, link, link_zh: link, typeDetail: {}, events, methods, slots }
  const propsChildren = document.querySelectorAll('#props tbody > tr.bg-surface-bright')

  Array.from(propsChildren).forEach((item) => {
    let prop = item.children[0].textContent.replace('*', '')

    const description = item.nextElementSibling.textContent
    const type = item.children[1].textContent.replace(/\n/g, '')
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
      description,
      description_zh: description,
    }
  })
  const eventsChildren = document.querySelectorAll('#events tbody > tr.bg-surface-bright')
  Array.from(eventsChildren).forEach((item) => {
    const name = item.children[0].textContent.replace('*', '')
    const description = item.nextElementSibling.textContent
    const params = item.children[1].textContent.replace(/\n/g, '')
    events.push({ name, description, description_zh: description, params })
  })
  const slotsChildren = document.querySelectorAll('#slots tbody > tr.bg-surface-bright')
  Array.from(slotsChildren).forEach((item) => {
    const name = item.children[0].textContent.replace('*', '')
    const description = item.nextElementSibling.nextElementSibling.textContent
    slots.push({ name, description, description_zh: description })
  })
  return result
}
