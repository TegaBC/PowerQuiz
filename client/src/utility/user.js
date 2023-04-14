// Utility file, containing useful functions for the user
import jwtDecode from "jwt-decode"
import { getCookies } from "./cookie"

export const isUserLoggedIn = () => {     // check cookie to see if user is logged in

    const cookies = getCookies()
    const sessionToken = cookies["session"]
    if(!sessionToken) return 
      
    const payload = jwtDecode(sessionToken)
    if(payload.exp > (Date.now() / 1000) ) return true // we are still logged in

    return false
}