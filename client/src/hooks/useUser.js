// custom useUser hook, returns if the user is logged in and information on the user from their token in the cookies
import jwtDecode from "jwt-decode"
import { useRef } from "react"

export const useUser = () => {
    // don't need to use state since whatever we call this hook from can re render, to avoid loops

    const loggedIn = useRef(false)
    const userRef = useRef(null)
    
    const sessionToken = localStorage.getItem("token")

    if(sessionToken)  {
        const payload = jwtDecode(sessionToken)

        const expiration = payload.exp
        const email = payload.email
        const name = payload.name

        if(expiration > (Date.now() / 1000) ) {
            loggedIn.current = true
            userRef.current = {
                name: name,
                email: email,
            }
        }
    }
    
    return [loggedIn.current, userRef.current]
}