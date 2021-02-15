
const navButton = document.querySelector('.fa-bars');
// put an event listener on the nav button
navButton.addEventListener('click', function(event){
    // console.log(event);
    // console.log('clicked');
    // rotate hamburger menu 90 deg
    navButton.style.transform = 'rotate(90deg)';
});
