import "../css/style.css"
const URL= "https://animechan.vercel.app/api/random"
const AnimeTitleURL="https://animechan.vercel.app/api/random/anime?title=naruto"
/* fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote));
 */
    async function getData(URL) {
   
   try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api").textContent=data
    console.log(data);
   } catch (error) {
    console.log(error)
   }
       
    }
getData(URL);