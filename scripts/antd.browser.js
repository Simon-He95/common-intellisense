function run() {
  const props = {}
  const methods = []
  const events = []
  const p = $0.closest?.('table') || document.querySelector('table')
  p.querySelectorAll('tbody tr').forEach((item) => {
    let prop = item.children[0].textContent.replace('*', '')
    const description = item.children[1].textContent
    const type = item.children[2].textContent
    let value = item.children[3].textContent
    if (prop === 'style')
      prop = ':style'
    else if (
      type === 'number' || type === 'number | ResponsiveValue' || type === 'object'
    )
      prop = `:${prop}`

    if (prop === 'model-value (v-model)')
      prop = 'v-model'
    else
      prop = prop.replace(/([\w-]+) \(v-model\)/, 'v-model:$1')
    if (type === 'boolean' && (value === '' || value === '-'))
      value = 'false'
    else if (type === 'CSSProperties' && !prop.startsWith(':'))
      prop = `:${prop}`

    if (prop.startsWith('on')) {
      events.push({
        name: prop,
        description,
        description_zh: description,
        params: type,
      })
    }
    else {
      props[prop] = {
        default: value,
        value: '',
        type,
        description,
        description_zh: description,
      }
    }
  })
  document.querySelectorAll('#方法 ~ div table tbody tr').forEach((i) => {
    const name = i.children[0].textContent.replace('()', '')
    const description = i.children[1].textContent
    methods.push({
      name,
      description,
      params: '',
      description_zh: description,
    })
  })
  const link = location.href
  let el = p.parentNode.parentNode.previousSibling
  while (el && el.tagName !== 'H3')
    el = el.previousSibling

  const _name = el?.textContent.replace('Props', '').trim()
  const name = _name && _name !== 'Props' ? _name : document.querySelector('article>h1>div>div:first-child').textContent
  return { name, props, methods, link: link.replace('-zh', ''), link_zh: link, events, typeDetail: {} }
}
