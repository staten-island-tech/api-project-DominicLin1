import "../css/style.css"
const URL= "https://animechan.vercel.app/api/random"
const AnimeTitleURL="https://animechan.vercel.app/api/random/anime?title=${}"
const DOMselectors= {
   form: document.getElementById("form")
}
/* fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote));
 */

   DOMselectors.form.addEventListener("submit")
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