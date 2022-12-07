const stringUrlId = document.location.search;
const urlSearchParams = new URLSearchParams(stringUrlId);
const urlProductId = urlSearchParams.get("id");

loadConfig()
.then(data => {
    const config = data;
    fetch(`${config.host}${config.port}/api/auth/${urlProductId}`)
    .then(res => res.json()
    .then(result => {
        document.querySelector('header img').setAttribute('src', `${result.ppUrl}`);
        document.querySelector('header figcaption').innerHTML = `${result.identifier}`;
    }))
    .catch();
})
.catch();