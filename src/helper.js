
export async function getWeather(getUrl) {
    try {
        const request = await fetch(getUrl);
        if (!request.ok) {
            throw new Error(request.status);
        }
        const data = await request.json();
        return data;
    }
    catch (e) {
        return e
    }
}
export function isActiveLink ({isActive}){
    return isActive ? 'active_link': 'link'
}


