import { Link, useSearchParams } from '@remix-run/react'
import { FaLock } from 'react-icons/fa'
import { AUTH_MODE_PARAM_NAME, LOGIN_MODE, SIGNUP_MODE } from '~/model/constants'

export default function AuthForm() {
  const [searchParams] = useSearchParams()
  const mode = searchParams.get(AUTH_MODE_PARAM_NAME) || LOGIN_MODE
  const submitButtonLabel = mode === LOGIN_MODE ? "Log in" : "Sign up"
  const toggleButtonLabel = mode === LOGIN_MODE ? "Sign up as new user" : "Log in with existing user"
  const toggleToMode = mode === LOGIN_MODE ? SIGNUP_MODE : LOGIN_MODE

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        <FaLock />
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{submitButtonLabel}</button>
        <Link to={`?${AUTH_MODE_PARAM_NAME}=${toggleToMode}`}>{toggleButtonLabel}</Link>
      </div>
    </form>
  )
}

