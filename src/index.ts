import * as vscode from 'vscode'
import { createCompletionItem, registerCompletionItemProvider } from '@vscode-use/utils'

const buttonType = ['primary', 'success', 'info', 'warning', 'danger', 'text']
const buttonSize = ['medium', 'small', 'large', 'mini']
const progressStatus = ['success', 'exception', 'warning']
const progressType = ['line', 'circle', 'dashboard']
const avatarShape = ['circle', 'square']
const snippetString = [
  'width',
  'height',
  'min',
  'min-width',
  'min-height',
  'max',
  'max-width',
  'max-height',
  'maxlength',
  'minlength',
  'tabindex',
  'options',
  'limit',
  'data',
  'icon',
  'title',
  'label',
  'label-position',
  'label-width',
  'rules',
  'active-color',
  'inactive-color',
  'model',
  'prop',
  'props',
  'percentage',
  'v-loading',
  'fill',
  'suffix',
  'prefix-icon',
  'suffix-icon',
  'total',
]
const commonMap = [
  'autocomplete',
  'multiple',
  'inline',
  'round',
  'circle',
  'disabled',
  'loading',
  'plain',
  'active',
  'clearable',
  'fit',
  'clearable',
  'autosize',
  ...snippetString.map(snippet => `${snippet}=""`),
  ...buttonType.map(type => `type="${type}"`),
  ...buttonSize.map(size => `size="${size}"`),
  ...progressType.map(type => `type="${type}"`),
  ...progressStatus.map(status => `status="${status}"`),
  ...avatarShape.map(shape => `shape="${shape}"`),
]

export function activate(context: vscode.ExtensionContext) {
  const filter = ['javascript', 'javascriptreact', 'typescriptreact', 'html', 'vue', 'css']

  context.subscriptions.push(registerCompletionItemProvider(filter, () => {
    return commonMap.map(completion => createCompletionItem(
      completion as string,
      vscode.CompletionItemKind.Variable,
    ))
  }, ['"', '\'', ' ', '.']))
}

export function deactivate() {

}
