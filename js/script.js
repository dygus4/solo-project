'use strict';

// HAMBURGEREK

function toggleMenu(visible) {
    document.querySelector('.menu-menager').classList.toggle('show')
  };
  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });


//TABELA

  var ctx = document.getElementById('myChart').getContext('2d');

  var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            //hidden: true,
        }]
    },
});

//MODAL

//zamykanie modala
function closeModal() {
    document.getElementById('overlay').classList.remove('show')
}
//podpięcie pod przyciski zamykające
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      closeModal()
    })
})
//zamknięcie po kliknięciu w tło modala
document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal()
    }
})
//zamknięcie przez ESC
document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal()
    }
})

//otwarcie modala

function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show')
}

document.getElementById('test-button').addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#myModal');
});
document.getElementById('sign-in-button').addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#signInModal');
});
document.getElementById('manager-button').addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#manager');
});

//otwarcie poszczególnych stron )dodanie active do przycisku i artykułu


const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    
    console.log('Link was clicked!')
    /* remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */
clickedElement.classList.add('active');
console.log("clickedElement:", clickedElement)
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts div.active');

  for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute("href");
  console.log(articleSelector);
  /* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(articleSelector);
console.log(targetArticle);
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }