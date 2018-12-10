interface Cookie {
  [pros: string]: any
}

export const parseTokenFormCookie = (cookie: Cookie) => {
  return cookie.token
}