export const loginData = () => {
    let key = JSON.parse(localStorage.getItem("user"))

    if (key) {
        return true;
    } else {
        return false;
    }
}