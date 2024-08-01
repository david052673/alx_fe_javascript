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