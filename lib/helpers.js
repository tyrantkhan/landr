import { locals } from 'config'

const prefixLink = (link) => {
  if (locals.basePath)
    return (`${locals.basePath}/${link}`)
  else
    return link
}

export { prefixLink }
