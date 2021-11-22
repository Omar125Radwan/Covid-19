// Fetch Json
let cons = document.querySelector('.countries');
getJson();
function getJson() {
  fetch('/data.json')
  .then(res => res.json())
  .then(data => {
    let numberOfCons = 8;
    cons.innerHTML = "";
    for(let i = 0; i < numberOfCons; i++) {
      cons.innerHTML += `
      <div class="country d-flex justify-content-between">
                <div class="flag">
                  <img class="me-3" src="${data.data.countries[i].flag}" alt=""><span class="coun-name my-auto">${data.data.countries[i].name}</span>
                </div>
                <span class="numbers my-auto">${data.data.countries[i].cases}</span>
      </div>
      `
    }
  });
}

// window onload
window.onload = () => {
  fadeOut();
}

// back to top
let toTop = document.querySelector('.back-to-top');

// widow onscroll
window.onscroll = () => {
  //back to top
  if(window.scrollY >= 600) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }

  // indector
  let posit = document.documentElement.scrollTop;
  let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scroll = posit * 100 / calHeight;
  document.getElementById('indector').style.width = scroll + "%";
}

//back to top
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// pre loader
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 3000);
}
// Wow js
new WOW().init();