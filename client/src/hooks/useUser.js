// custom useUser hook, returns if the user is logged in and information on the user from their token in the cookies
import jwtDecode from "jwt-decode"
import { getCookies } from "../utility/cookie"
import { useRef, useState } from "react"

export const useUser = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const userRef = useRef(null)
    
    const cookies = getCookies()
    const sessionToken = cookies["session"]

    if(sessionToken)  {
        const payload = jwtDecode(sessionToken)

        const expiration = payload.exp
        const email = payload.email
        const name = payload.name

        if(expiration > (Date.now() / 1000) ) {
            setLoggedIn(true)
            userRef.current = {
                name: name,
                email: email,
            }
        }
    }
    
    return [loggedIn, userRef.current]
}