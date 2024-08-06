function getDescription() {
  const description = document.querySelector('h1').nextElementSibling.textContent
  return copyToClipboard(`,\n  "description": "${description}",\n  "description_zh": "${description}"`)
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


const getTag = () => {
  const tag = `\n  "tag": "${document.querySelector('h1').textContent.split(' ')[1]}",`
  copyToClipboard(tag)
}
