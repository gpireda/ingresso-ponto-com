const slugify = (text: string) => {
  const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return text
    .toLowerCase()
    .trim()
    .replace(p, (c: string) => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
}

export default slugify
