import "../css/style.css"
const URL= "https://animechan.vercel.app/api/random"
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))

