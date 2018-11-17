const url = 'http://localhost:4000/api'

const loginUrl = `${url}/login`

export const loginUser = username =>
  fetch(loginUrl, {
    method: 'POST',
    body: JSON.stringify(username)
  })
