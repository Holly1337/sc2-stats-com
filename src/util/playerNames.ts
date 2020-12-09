type PlayerNameData = {
  name: string
  tag: string
}

export const splitName = (nameWithTag: string): PlayerNameData => {
  let name = nameWithTag
  let tag = ''
  if (nameWithTag.includes('<sp/>')) {
    let spacerIndex = nameWithTag.lastIndexOf('<sp/>')
    name = nameWithTag.substr(spacerIndex + 5)
    tag = nameWithTag
      .substr(0, spacerIndex)
      .replace('&lt;', '<')
      .replace('&gt;', '>')
  }
  return {
    name,
    tag
  }
}