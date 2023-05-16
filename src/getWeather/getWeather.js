async function getWeather(getUrl) {
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
export default getWeather
