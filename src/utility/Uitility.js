export const logineDetails = () => {
    let data = localStorage.getItem("logine");

    if(data) {
        return true;
    }else{
        return false
    }
}