import { useAuth } from "../contexts/AuthContext"
import { useState } from 'react'

function Login() {

  const [userinput, setUserinput] = useState('')
  const auth = useAuth()

  var loginForm = (<></>)
  if (auth?.user == undefined) {

    loginForm = (
      <>
        <input
          value={userinput}
          onChange={(e) => setUserinput(e.target.value)}
        />
        <button onClick={() => auth?.login(userinput)}>
          Login
        </button>
      </>
    )
  }


  return (
    <>
      {loginForm}
      <p>User: {auth?.user}</p>
      {auth?.user && (
        <button onClick={() => auth?.logout()}>
          Logout
        </button>
      )}
    </>
  )
}

export default Login
