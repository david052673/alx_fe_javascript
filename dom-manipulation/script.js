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


function showRandomQoute() {
    const qoute = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    console.log(`"${randomQuote.text}" - ${randomQuote.category}`);

showRandomQoute();
};
function showRandomQuote () {

    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  
    
    const newQuote = {
      text: newQuoteText,
      category: newQuoteCategory,
      
    };
  
    
    quotes.push(newQuote);
     document.innerHTML="newQuote";
    showRandomQuote();
  }
  const AddQuoteForm=document.createElement("AddQuoteForm")
  const div=getElementById(#div);
  div.appendChild(AddQuoteForm)
    
}