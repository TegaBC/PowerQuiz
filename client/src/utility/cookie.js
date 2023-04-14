// Utility file that provides functions to do with cookies and tokens

export function getCookies() {
    const cookies = document.cookie.split(';'); // split string at separator, giving us an array of strings
    const result = {};
    
    cookies.forEach((rawCookie, index) => {
        const cookie = rawCookie.trim().split("=") // split cookie into its name and value, and trim any white space
        const name = cookie[0]
        const value = cookie[1]
        result[name] = value // put into our result object 
    });

    return result;
}