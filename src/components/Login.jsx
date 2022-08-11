import { useContext } from "react"
import { UserInfoContext } from "../App"
export default function Login() {
    const { setIsLoggedIn, setUser } = useContext(UserInfoContext)
    const handleLogin = () => {
        setIsLoggedIn(true)
        setUser({name: 'Jonathan', position: 'Drums', band: 'Lane Brandon'})
    }
    return <button onClick={handleLogin}>Login</button>
}