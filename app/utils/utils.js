export const VALIDATE_EMAIL =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const convertToWebp = (url) => {
  const extension = url.split('.').pop()
  const webpUrl = url.replace(extension, 'webp')
  return webpUrl
}
