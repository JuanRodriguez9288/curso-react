import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {UserContext} from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, user } = useContext(UserContext)
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            username,
            password
        }

        login(objUser)
        
        history.push('/')
    }

    return (
        <div className="imgBg">
          <div>
            <h3>Inicio de sesión</h3>
          </div>
          <form onSubmit={handleLogin}>
            <div> <h4>Usuario</h4>
              <input
                type='text' className="dataInput"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div><h4>Contraseña</h4>
              <input
                type='password' className="dataInput"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <div>
            <br></br>  
              <button type='submit' className="btnLogin">Iniciar sesión</button>
            </div>
          </form>
        </div>
      )
}

export default Login