export const VALIDATE_EMAIL =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const convertToWebp = (url) => {
  const extension = url.split('.').pop()
  const webpUrl = url.replace(extension, 'webp')
  return webpUrl
}

export const passwordValidation = {
  required: 'Este campo es requerido',
  minLength: {
    value: 5,
    message: 'Mínimo 5 caracteres'
  }
}

export const emailValidation = {
  required: 'Este campo es requerido',
  minLength: {
    value: VALIDATE_EMAIL,
    message: 'Email inválido'
  }
}
