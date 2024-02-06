const url = process.env.NEXT_PUBLIC_RAPID_URL;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_HOST,
  },
};

export default async function getQuotes() {
  try {
    const response = await fetch(url, options);
    const qoutes = await response.json();
    // console.log(qoutes);
    return qoutes;
  } catch (error) {
    console.error(error);
  }
}
