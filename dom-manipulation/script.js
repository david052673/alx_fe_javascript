document.addEventListener('DOMContentLoaded',
      quotes =[
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
  
    
    #button.push(newQuote);
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

function ExportQuotes() {
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

const Export Quotes Button = document.getElementById("ExportQuotesButton");
exportButton.addEventListener("click", Export Quotes);


const button= document.createElement("Button");
button.id="categoryFilter"
button.textContent="All Categories"
category.push(button)



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

//step 2

  function populateCategories(quotes) {
    var self = this;
    self.contacts = ko.quotesArray(quotes);
  
    self.uniqueSelect = ko.quotes(function() {
      var types = ko.utils.map(self.text(), function(item) {
        return item.type;
      });
      return ko.utils.arrayGetDistinctValues(types).sort();
    }, self);
  }
  
  ko.applyBindings(new (quotes));

  var myDropdown = document.getElementById('myDropdown');
var uniqueSelectValue = 'option2';

for (var i = 0; i < myDropdown.options.length; i++) {
    if (myDropdown.options[i].value === uniqueSelectValue) {
        myDropdown.selectedIndex = i;
        break;
    }
}


function filterQuote(quotes) {
  select()
}
localStorage.setItem('select()')
const quotes = [
  {text:"EVERYTHING IS GREAT",category:"Advice",
  },
  {
      text:"Golden Hit", category:"book",
  },
  {
      text:"THE FORCE", category:"movie"
  }
];

const quoteDisplay = quotes.filterQuote((quote) => {
  
  return quote.category === selectedCategory;
});





// step 3


  async function fetchQuotesFromServer(){
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))};


  const newPost = {
    userId: 1,
    title: 'My New Post',
    body: 'This is the content of my post.',
  };
  
   await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": 'application/json; charset=UTF-8',
    },
    
  })
    .then(response => response.json())
    .then(data => console.log(data));
  
    async function syncQuotes() {
      try {
        const response = await fetch('https://your-api-endpoint.com/quotes');
        const data = await response.json();
        return data;
        alert("Quotes synced with server!")
      } catch (error) {
        console.error('Error fetching quotes:', error);
        return null;
      }
    }
    
  
    function updateLocalStorage(quotes) {
      localStorage.setItem('quotes', JSON.stringify(quotes));
    }
    
    
    function pollAndUpdateQuotes() {
      setInterval(async () => {
        const serverQuotes = await fetchQuotesFromServer();
        if (serverQuotes) {
          updateLocalStorage(serverQuotes);
          
        }
      }, 60000); 
    }
    
    
    pollAndUpdateQuotes();
