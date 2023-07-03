

const gridDisplay = document.querySelector('#grid');
const resultDisplay=document.getElementById('score')
//image store
const cardArray=[
{
  name:'instagram',
  img:'images/instagram.png'
},
{
  name:'whatsapp',
  img:'images/whatsapp.png'
},
{
  name:'twitter',
  img:'images/twitter.png'
},
{
  name:'linkedin',
  img:'images/linkedin.png'
},
{
  name:'youtube',
  img:'images/youtube.png'
},
{
  name:'facebook',
  img:'images/facebook.png'
},
{
  name:'instagram',
  img:'images/instagram.png'
},
{
  name:'whatsapp',
  img:'images/whatsapp.png'
},
{
  name:'twitter',
  img:'images/twitter.png'
},
{
  name:'linkedin',
  img:'images/linkedin.png'
},
{
  name:'youtube',
  img:'images/youtube.png'
},
{
  name:'facebook',
  img:'images/facebook.png'
},
]
generateBoard();
//random cardArray 
cardArray.sort(()=>0.5-Math.random())

function generateBoard(){
for(let i=0; i<cardArray.length; i++){
  //create element img
  const card =document.createElement('img');

card.setAttribute('src','images/bg.jpg');
card.setAttribute('data-id',i);
//eventListener
card.addEventListener('click',flipCard);
gridDisplay.appendChild(card);
console.log(cardArray)
}
}
//array
card_chosen=[];
card_chosen_id=[];
//flipMethod
function flipCard(){
const card_id=this.getAttribute('data-id');
this.setAttribute('src',cardArray[card_id].img)
card_chosen_id.push(card_id);
card_chosen.push(cardArray[card_id].name);
// cards time method
if(card_chosen.length === 2)
{
  setTimeout(checkMatch,500);
}
}
//result array 
cardsWon = [];
//check function //card is check function
function checkMatch(){
  
  const cards=document.querySelectorAll('img');
  if(card_chosen[0]== card_chosen[1]){
    alert('you have found a match');
    //game match completed image
    cards[card_chosen_id[0]].setAttribute('src','images/complete.png');
    cards[card_chosen_id[1]].setAttribute('src','images/complete.png');
    cards[card_chosen_id[0]].removeEventListener('click',flipCard);
    cards[card_chosen_id[1]].removeEventListener('click',flipCard);
    //result score elements
cardsWon.push(card_chosen);
resultDisplay.innerHTML = cardsWon.length;
console.log('hello')
  }
  else{
    cards[card_chosen_id[0]].setAttribute('src','images/bg.jpg')
    cards[card_chosen_id[1]].setAttribute('src','images/bg.jpg')
  }
card_chosen_id = [];
card_chosen = []; 
// game win result
if(cardsWon,length == cardArray.length/2)
{
  resultDisplay.innerHTML ='Congratulations... You have successfully completed the game'
}
}





