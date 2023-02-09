import "../css/style.css"
const DOMselectors= {
   form: document.getElementById("form"),
   title:document.getElementById("title"),
}


   DOMselectors.form.addEventListener("submit",
function create(event){
   let title = DOMselectors.title.value;
   getData(title);
   event.preventDefault();
})
   
   
    async function getData(title) {
      let AnimeTitleURL=`https://animechan.vercel.app/api/random/anime?title=${title}`

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
