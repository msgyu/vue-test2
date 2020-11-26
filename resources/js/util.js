export function getCookieValue(searchKey) {
    if (typeof searchKey === "undefined") {
        return "";
    }

    let val = "";

    document.cookie.split(";").forEach(cookie => {
        const [key, value] = cookie.split("=");
        if (key === searchKey) {
            return (val = value);
        }
    });

    return val;
}
