export const getAuthTocken = () => {
    try {
        return JSON.parse(localStorage.getItem("authData")).auth_token;
    } catch (error) {
        return null;
    }
}

export const getHeader = (noAuth = false, ...data) => {
    let authToken = getAuthTocken();
    console.log("Hello" + data);
    let headerData = {
        credentials: 'include',
        "Content-Type": "application/json"
    };
    console.log(authToken);
    if (authToken !== null && !noAuth) {
        headerData["Authorization"] = "Bearer " + authToken;
        return headerData;
    } else {
        return headerData;
    }
}