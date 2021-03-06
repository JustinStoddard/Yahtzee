import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const VALIDATE_TOKEN = 'VALIDATE_TOKEN';

export const login = (email, password, history) => {
  return (dispatch) => {
    axios.post('/auth/sign_in', {email, password} )
      .then( ({ data, headers }) => {
        dispatch(user(data, headers))
        history.push('/')
      })
  }
}

export const register = (email, password, password_confirmation, history) => {
  return (dispatch) => {
    axios.post('/auth', { email, password, password_confirmation })
      .then( ({ data, headers }) => {
        dispatch(user(data, headers ))
        history.push('/')
      })
  }
}

export const logout = (history) => {
  return (dispatch) => {
    axios.delete('/auth/sign_out')
      .then( res => dispatch({ type: LOGOUT }) )
  }
}

export const validateToken = (cb = () => {}) => {
  return (dispatch) => {
    dispatch({ type: VALIDATE_TOKEN })
    const headers = axios.defaults.headers.commons
    axios.get('/auth/validate_token', headers)
      .then( ({data, headers }) => {
        dispatch(user(data, headers))
        cb()
      }).catch(() => cb())
  }
}

const user = (data, header) => {
  return { type: LOGIN, user: data, headers }
}