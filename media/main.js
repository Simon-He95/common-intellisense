(function () {
  // eslint-disable-next-line no-undef
  const vscode = acquireVsCodeApi()
  window.addEventListener('message', (e) => {
    const data = e.data
    if (data) {
      if (data.eventType === 'copy')
        vscode.postMessage({ type: 'copy', data: data.text })
    }
  })
}())
