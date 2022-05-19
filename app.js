const card = document.querySelectorAll('.card');

let cardFliped = false;
let cardOne, cardTwo;
let lock = false;

card.forEach(card => {
    card.addEventListener('click', flipCard);
})

function flipCard(){

    if(lock) return;

    this.childNodes[1].classList.toggle('active');

    if(!cardFliped){
        cardFliped = true;
        cardOne = this;
        return;
    }

    cardFliped = false;
    cardTwo = this;

    correspond();
}

function correspond(){
    if(cardOne.getAttribute('data-attr') === cardTwo.getAttribute('data-attr')){
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);

    }else{
        lock = true;
        setTimeout(() => {
            cardOne.childNodes[1].classList.remove('active');
            cardTwo.childNodes[1].classList.remove('active');
            lock = false;
        }, 1500);
    }
}

function random (){
    card.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}
random();