const API_KEY = "5e0ec4efef4e3b90d91ea7723d1db6af"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType)
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY})

  return fetch(url).then((res) => res.json()).then((data) => data)
}

export default getWeatherData