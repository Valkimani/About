// Allow user to see all the nav links when the hamburger icon is clicked.

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

// Toggle Function

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)