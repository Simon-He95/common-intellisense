function run() {
  const props = {}
  const events = []
  const methods = []
  const slots = []
  const link = location.href
  const tbody = document.querySelector('#props + table')
    ? document.querySelector('#props + table')
    : document.querySelector('#props + * + table')
      ? document.querySelector('#props + * + table')
      : document.querySelector('#props + * + * + table')
  if (tbody) {
    Array.from(tbody.querySelectorAll('tbody tr')).forEach((item) => {
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
  }
  const eventBody = (document.querySelector('#event + table')
    ? document.querySelector('#event + table')
    : document.querySelector('#event + * + table'))
    || (document.querySelector('#events + table')
      ? document.querySelector('#events + table')
      : document.querySelector('#events + * + table'))

  if (eventBody) {
    Array.from(eventBody.querySelectorAll('tbody tr')).forEach((item) => {
      const name = item.children[0].textContent.split(' ')[0]
      const description = item.children[1].textContent
      const params = item.children[2].textContent
      events.push({ name, description, description_zh: description, params })
    })
  }
  const slotBody = document.querySelectorAll('#slots + table tbody tr')?.length ? document.querySelectorAll('#slots + table tbody tr') : document.querySelectorAll('#slot + table tbody tr')
  if (slotBody) {
    Array.from(slotBody).forEach((item) => {
      let name = item.children[0].textContent.split(' ')[0]
      const description = item.children[1].textContent
      if (name === '-' || !name)
        name = 'default'
      slots.push({
        name,
        description,
        description_zh: description,
      })
    })
  }
  const methodsBody = (document.querySelector('#methods + table')
    ? document.querySelector('#methods + table')
    : document.querySelector('#methods + * + table'))
    || document.querySelector('#method + table')
    ? document.querySelector('#method + table')
    : document.querySelector('#method + * + table')
  if (methodsBody) {
    Array.from(methodsBody.querySelectorAll('tbody tr')).forEach((item) => {
      const name = item.children[0].textContent.split('(')[0]
      const description = item.children[1].textContent
      const params = item.children[0].textContent.split('(')[1]
        ? `(${item.children[0].textContent.split('(')[1]}`
        : ''
      methods.push({ name, description, description_zh: description, params })
    })
  }
  const name = `U${link.split('/').slice(-1)[0].split('.')[0].split('-').map((i) => {
    return i[0].toUpperCase() + i.slice(1)
  }).join('')}`
  const result = { name, props, link, link_zh: link, typeDetail: {}, events, methods, slots }
  console.log(result)
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
