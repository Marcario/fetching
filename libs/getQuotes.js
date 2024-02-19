const url = process.env.NEXT_PUBLIC_MOVIE_URL;

const options = {
  method: "GET",
  headers: {
    Type: "get-movies-images-by-imdb",
    "X-RapidAPI-Key": "f0dc26a346mshfb08638ddac48fcp1ef76bjsn673e97ac5507",
    "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  },
};
export default async function getQuotes() {
  try {
    const response = await fetch(url, options);
    const quotes = await response.json();
    return quotes;
  } catch (error) {
    console.error(error);
  }
}
