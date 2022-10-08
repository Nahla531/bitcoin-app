export async function getBpi() {
  try {
    const fetchData = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const res = await fetchData.json();
    return {
      bpi: res.bpi,
    };
  } catch (err) {
    console.error(err);
  }
}
