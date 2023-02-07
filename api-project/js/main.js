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
   insert(event);
   event.preventDefault();
}
   )
   function insert(){
      let title=document.title.value
      getData(title)
   
   }
    async function getData(e) {
      let AnimeTitleURL="https://animechan.vercel.app/api/random/anime?title=${e}"
   try {
    
    const response = await fetch(AnimeTitleURL);
    const data = await response.json();
    document.getElementById("api").textContent=data
    console.log(data);
    console.log(response)
   } catch (error) {
    console.log(error)
   }
       }
