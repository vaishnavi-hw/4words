fetch('https://random-word-api.herokuapp.com/word?number=100')
  .then(response => response.json())
  .then(words => {
      // Select 4 random words from the list
      const randomWords = words.sort(() => 0.5 - Math.random()).slice(0, 4);
      console.log(randomWords);
      // Display the words on the page
      function capitalizeFirstLetter(word) {
    if (!word) return word; // Check if the word is empty or null
    return word.charAt(0).toUpperCase() + word.slice(1);
}

      
      const button = document.querySelector('button');
      const list = document.getElementById('list');
      button.addEventListener('click',()=>{
          
      
      randomWords.forEach(word =>{
          
             list.innerHTML += `<li>${capitalizeFirstLetter(word)}</li>`;
          
          button.disabled = true;
      })
      })
  });
