async function fetchServerDate() {
 const responce = await  fetch('http://localhost:4567/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: 'query { ognoo }'
        }) 
    });
const {data} = await responce.json()
return data.ognoo;
}

fetchServerDate().then((ognoo) => {
    document.getElementById("message").textContent = ognoo;
});
