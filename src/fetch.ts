// import { getConfiguration } from "@vscode-use/utils";
import { ofetch } from 'ofetch'
import { componentsReducer, propsReducer } from './ui/utils'

export async function fetchFromCommonIntellisense() {
  const scriptContent = await Promise.any([
    ofetch('https://cdn.jsdelivr.net/npm/common-intellisense-test@0.0.2', { responseType: 'text' }),
    ofetch('https://unpkg.com/common-intellisense-test@0.0.2', { responseType: 'text' }),
  ])
  const module = await import(`data:text/javascript,${encodeURIComponent(scriptContent)}`)
  const result: any = {}
  for (const key in module) {
    const v = module[key]
    if (key.endsWith('Components')) {
      result[key] = () => componentsReducer(v())
    }
    else {
      result[key] = () => propsReducer(v())
    }
  }

  return result
}

// export function fetchFromRemoteUrls() {
//   // 读区 urls
//   const uris = getConfiguration('common-intellisense.remoteUris')
//   if (!uris.length)
//     return
// }

fetchFromCommonIntellisense()
