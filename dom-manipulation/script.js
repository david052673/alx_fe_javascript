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


function displayRandomqoute() {
    const qoute = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    console.log(`"${randomQuote.text}" - ${randomQuote.category}`);

displayRandomqoute();
};
function displayRandomQuote () {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  
    
    const newQuote = {
      text: newQuoteText,
      category: newQuoteCategory,
    };
  
    
    quotes.push(newQuote);

    displayRandomQuote();
  }

    
}