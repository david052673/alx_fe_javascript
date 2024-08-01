document.addEventListener('DOMContentLoaded',
      const quotes =[
    {text:"EVERYTHING IS GREAT",category:"Advice",
},
{
    text:"Golden Hit", category:"book",
},
{
    text:"THE FORCE", category:"movie"
}



];


function showRandomQuote() {
    const qoute = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    console.log(`"${randomQuote.text}" - ${randomQuote.category}`);

    showRandomQuote();
};
function  createAddQuoteForm() {

    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  
    
    const newQuote = {
      text: newQuoteText,
      category: newQuoteCategory,
      
    };
  
    
    quotes.push(newQuote);
     document.innerHTML="newQuote";
     createAddQuoteForm();
  }
 document.createElement
 newQuoteText.appendChild(newQuote)
    
);





localStorage.setItem("quotes", JSON.stringify(quotes));
var storedquotes = JSON.parse(localStorage.getItem("quotes"));

sessionStorage.setItem("quotes", "");
sessionStorage.getItem("quotes");

function Export Quotes() {
  const json = JSON.stringify(quotes);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);


  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "quotes.json"; 


  document.body.appendChild(a);
  a.click();

  URL.revokeObjectURL(url);
}

const exportButton = document.getElementById("exportButton");
exportButton.addEventListener("click", exportQuotes);






function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }