 export const getpost=async () => {
    const response = await fetch("'https://travel-guide-api-city-guide-top-places.p.rapidapi.com/check?noqueue=1",{
        method: "GET",
 });
    return response.json();
}
