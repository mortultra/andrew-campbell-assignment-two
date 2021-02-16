// toggle the hamburder menu 90deg on click of the icon with a class of .fa-bars
document.querySelector('.fa-bars').addEventListener('click', (event)=>{
    event.currentTarget.classList.toggle('active');
});

// code direction taken from --> https://codepen.io/Naito/pen/pgyOVm

// ==========================================

// the below functions worked only halfway, because I could not figure out how to use a toggle on a style.transform function.

// ==========================================

// const navButton = document.querySelector('.fa-bars');


// put an event listener on the nav button
// navButton.addEventListener('click', function(event){
//     // rotate hamburger menu 90 deg
//     navButton.style.transform = 'rotate(90deg)';
// });

// ==========================================

// function menuClick(){
//     this.style.transform = 'rotate(90deg)'
// }

// navButton.addEventListener('click', menuClick);


// make .blogAside menu an on-click toggle element
document.querySelector('.blogAside').addEventListener('click', (event)=>{
    event.currentTarget.classList.toggle('active');
});