export function safeGetLocalStorage(key) {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(key)
}

const stringData = safeGetLocalStorage('authData')

export const authData = JSON.parse(stringData)
