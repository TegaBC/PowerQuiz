import jwt from "jsonwebtoken"

// abstracted function, returns token payload or false if an error happened.

export default (sessionCookie) => {
    // check sessionCookie actually exists, then verify it
    if(!sessionCookie) return false

    try {
        return jwt.verify(sessionCookie, process.env.TOKEN_KEY) 
    } catch(err) {
        console.log(err.name) // err.name === "TokenExpiredError" || err.name === "JsonWebTokenError"
        return false
    }
}