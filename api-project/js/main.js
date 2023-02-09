import "../css/style.css"
const URL= "https://animechan.vercel.app/api/random"
//const AnimeTitleURL="https://animechan.vercel.app/api/random/anime?title=${title}"
const DOMselectors= {
   form: document.getElementById("form"),
   title:document.getElementById("title"),
}
/* fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote));
 */

   DOMselectors.form.addEventListener("submit",
function create(event){
   let title = DOMselectors.title.value;
   getData(title);
   event.preventDefault();
})
   
   
    async function getData() {
      let AnimeTitleURL="https://animechan.vercel.app/api/random/anime?title=naruto"
      const title=document.title.value

   try {
    
    const response = await fetch(AnimeTitleURL);
    const data = await response.json();
    document.getElementById("api").textContent=data.quote
    console.log(data.quote);
    console.log(response)
   } catch (error) {
    console.log(error)
   }
       }
