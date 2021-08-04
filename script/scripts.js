function modalpopup(title){

    // Get the modal
    var modal = document.getElementById("one-liner-entry");
    
    // Get the <span> element that closes the modal
    var span = document.getElementById("close-modal");
    
    //Get the header to inser the relevant book title
    var titleText = document.getElementById("modal-book-title");
    titleText.innerHTML = title;

    // Assign the title of the book to the hidden element. 
    document.getElementById("modalTitle").value = title;

    //display the modal div
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    }

    //below handles the tinder swipe animation
    function cardAnimation(){
        
        var nope = document.getElementById('nope');//nope button
        var love = document.getElementById('love');//love button

        var nopeListener = createButtonListener(false);
        var loveListener = createButtonListener(true);
       
        nope.addEventListener('click', nopeListener);
        love.addEventListener('click', loveListener);
    
        initCards();
    }

    function initCards(){

        //get the container and all the cards in the deck
        var bookContainer = document.querySelector('.bookcard-container');
        var allCards = document.querySelectorAll('.bookcard');

        //identify all newcards that haven't yet been removed from stack
        var newCards = document.querySelectorAll('.bookcard:not(.removed)');

        //for each newcard transform to create the stacked effect
        newCards.forEach(function (card, index) {
          card.style.zIndex = allCards.length - index;//z-index is the stack order
          card.style.transform = 'scale(' + (20 - index) / 20 + ') translateX(-' + 30 * index + 'px)'; //this transforms the position of each card
          card.style.opacity = (10 - index) / 10;
        });
        
        //adds a class to the container of loaded
        bookContainer.classList.add('loaded');
    }


 function createButtonListener(love) {
   return function (event) {
     var cards = document.querySelectorAll('.bookcard:not(.removed)');
     var moveOutWidth = document.body.clientWidth * 1.5;

     if (!cards.length) return false;

     var card = cards[0];

     card.classList.add('removed');

     if (love) {
       card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
     } else {
       card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
     }

     initCards();

     event.preventDefault();
   };
 }


