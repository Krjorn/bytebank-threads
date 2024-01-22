async function connectAPI(currency) {
    const connect = await fetch(`https://economia.awesomeapi.com.br/last/${currency}-BRL`);
    const connectTranslated = await connect.json();
    postMessage(connectTranslated[currency + 'BRL']);
}

function getData(event) {
    connectAPI(event.data);
    setInterval(() => connectAPI(event.data), 5000);
}

export default getData;