import "../css/style.css"
const URL= "https://animechan.vercel.app/api/random"
const AnimeTitleURL="https://animechan.vercel.app/api/random/anime?title=${}"
/* fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote));
 */
    async function getData(AnimeTitleURL) {
   
   try {
    const response = await fetch(AnimeTitleURL);
    const data = await response.json();
    document.getElementById("api").textContent=data
    console.log(data);
   } catch (error) {
    console.log(error)
   }
       
    }
getData(AnimeTitleURL);