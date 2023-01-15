
const body = document.querySelector("body");

// container one
const container1 = document.createElement('div')
      container1.classList.add("container");
      container1.setAttribute("id","top")

const h1tag = document.createElement("h1");
      h1tag.innerHTML=`where in the world?`;
      container1.append(h1tag);

const button1 = document.createElement("button");
      button1.classList.add("toggle", "filterbtn");
      button1.innerText="Dark mode";

const icon1 = document.createElement("i");
      icon1.classList.add("far","fa-moon","moon");
      button1.prepend(icon1);

container1.append(h1tag,button1);
    body.prepend(container1) ;

// container two
const container2 = document.createElement('div')
      container2.classList.add("container2");

    //1) inside form div 
const formdiv = document.createElement('div')
      formdiv.classList.add("form-control");

const input = document.createElement('input');
      input.classList.add("search");
      input.type="text";
      input.placeholder="Search For Country";

const icon2 = document.createElement("i");
      icon2.classList.add("fas","fa-search");
      formdiv.append(input,icon2);
      container2.append(formdiv);

    //2) inside dropDownCon div
const dropDownCon = document.createElement("div");
      dropDownCon.classList.add('dropDownCon');

    // row one start
const dropDownDiv = document.createElement("div");
      dropDownDiv.classList.add("dropDown");

const ptag2 = document.createElement("p");
      ptag2.innerHTML="Filter By Region";
      dropDownDiv.append(ptag2);

const button2 = document.createElement("button");

const icon3 = document.createElement("i");
      icon3.classList.add("fas","fa-chevron-down");
      button2.append(icon3);
      dropDownDiv.append(button2);
    // row one end
dropDownCon.append(dropDownDiv);



// 3) row two start
const showDropDown = document.createElement("div");
      showDropDown.classList.add("drop","showDropDown");

      const All = document.createElement("p");
            All.classList.add("region");
            All.innerHTML="All";

      const Africa = document.createElement("p");
            Africa.classList.add("region");
            Africa.innerHTML="Africa";

      const America = document.createElement("p");
            America.classList.add("region");
            America.innerHTML="America";

      const Asia = document.createElement("p");
            Asia.classList.add("region");
            Asia.innerHTML="Asia";

      const Europe = document.createElement("p");
            Europe.classList.add("region");
            Europe.innerHTML="Europe";

      const Oceania = document.createElement("p");
            Oceania.classList.add("region");
            Oceania.innerHTML="Oceania";
showDropDown.append(All,Africa,America,Asia,Europe,Oceania);
dropDownCon.append(showDropDown);

container2.append(dropDownCon);

body.appendChild(container2) ;


// container three
const container3 = document.createElement('div')
      container3.classList.add("countries");

body.appendChild(container3) ;

// container 4
const countryModalDiv = document.createElement("div");
countryModalDiv.classList.add("countryModal","show");

const backtoTop = document.createElement("button");
backtoTop.innerHTML="TOP";

body.appendChild(countryModalDiv);
backtoTop.classList.add("backtoTop");
backtoTop.addEventListener("click",()=>{
    topFunction();
})

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}


body.append(backtoTop);



const countryElem = document.querySelector('.countries');
const search  = document.querySelector('.search');

const dropDown = document.querySelector('.dropDown');
const dropElem = document.querySelector('.drop');

const region = document.querySelectorAll('.region');


// fetch data
async function getCountry() {
    const url = await fetch('https://restcountries.com/v3/all');
    const res = await url.json();

    // console.log(res);

    res.forEach(Element => {
        showcountrys(Element)
    });
}

getCountry()

function showcountrys(data) {
    // console.log(data);
    

    const country = document.createElement('div');
          country.classList.add('country');

    const wetherBtn = document.createElement("button");
          wetherBtn.innerHTML="get Wether";
    
const imgbox = document.createElement("div");
      imgbox.classList.add="country_img";

const flagimg = document.createElement("img");
      flagimg.setAttribute("src",data.flags[0]);
      flagimg.setAttribute("src",data.flags[0]);
      flagimg.classList.add("img");

      imgbox.appendChild(flagimg);

const country_info = document.createElement("div");
      country_info.classList.add("country_info");

      const ptag1 = document.createElement("p");
            ptag1.classList.add("myspace");
      const ptag2 = document.createElement("p");
      ptag2.classList.add("myspace");

      const ptag3 = document.createElement("p");
      ptag3.classList.add("myspace");

      const ptag4 = document.createElement("p");
      ptag4.classList.add("myspace");

            ptag1.innerHTML=`<strong>Name:</strong> <span> ${data.name.common} </span>`;
            ptag2.innerHTML=`<strong>Country Code:</strong> ${data.cca2}  ${data.ccn3}`;
            ptag3.innerHTML=`<strong>Lat,Long:</strong> ${data.latlng[0]},${data.latlng[1]}`;
            ptag4.innerHTML=`<strong>Region:</strong> ${data.region}`;
            ptag4.classList.add("regionName");
      const wetherbtn = document.createElement("a");
            wetherbtn.classList.add("wether","myspace");
            wetherbtn.innerHTML=`get Wether`;
            
    country_info.append(ptag1,ptag2,ptag3,ptag4,wetherbtn);

      country.prepend(imgbox);
      country.append(country_info);

      countryElem.appendChild(country);

      wetherbtn.addEventListener("click", ()=>{
        showcountryDetails(data);
    })

};

// drop down filter

dropDown.addEventListener('click', (e)=>{
    dropElem.classList.toggle("showDropDown");
    // console.log("hello");
});

const regionName = document.getElementsByClassName('regionName');


region.forEach( element =>{
    // console.log(element.innerText);

    element.addEventListener("click", ()=>{
        Array.from(regionName).forEach(elem => {
            // console.log(elem);
            if(elem.innerText.includes(element.innerText) || element.innerText=="All"){
                elem.parentElement.parentElement.style.display = "grid";
            } else {
                elem.parentElement.parentElement.style.display = "none";
            }
        })
    })

});

// search filter
const countryName = document.getElementsByClassName('countryName');

search.addEventListener("input", ()=>{
    // console.log(search.value.toLowerCase());
    Array.from(countryName).forEach(elem => {
        // console.log(elem);
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase()) ){
            elem.parentElement.parentElement.style.display = "grid";
        } else {
            elem.parentElement.parentElement.style.display = "none";
        }
    })
})


// dark mode
const darkmodeButton = document.querySelector(".toggle");
const moon = document.querySelector(".moon");

darkmodeButton.addEventListener('click', (e)=>{

    document.body.classList.toggle("dark");
    moon.classList.toggle("fas");

});

// back
const back = document.querySelector(".back");

const countryModal = document.querySelector(".countryModal");

back.addEventListener("click", ()=>{
    countryModal.classList.toggle("show")
})



// fetch data
function showcountryDetails(data){
const lat = data.latlng[0];
const lon = data.latlng[1];
async function getWether() {
    wether_data="";
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9c186bec8048800ce3241ffb0e4ea6ed`);
    const res = await url.json();
    console.log(res);
    countryModal.classList.toggle("show");
    countryModal.innerHTML = `
    <button class="back">Back</button>

    <div class="modal">
      <div class="leftModal">
      <img src=${data.flags[0]} alt="img">
      </div>
      <div class="rightModal">
      <div class="modelinfo">
      <div class="innerleft inner">
      <h1>${data.name.common}</h1>
            <p><strong>Region:</strong> ${data.region}</p>
            <p><strong>weather:</strong> ${res.weather[0].description}</p>
          <p><strong>wind speed:</strong> ${res.wind.speed} km/h</p>
          <p><strong>Temporature:</strong> ${res.main.temp} F</p>
          <p><strong>pressure:</strong> ${res.main.pressure} F</p>
          <p><strong>humidity:</strong> ${res.main.humidity} %</p>
          </div>
        </div>
      </div>
    </div> `;

    const back = countryModal.querySelector(".back")
    // const Wether = countryModal.querySelector(".back")
          back.addEventListener("click", ()=>{
              countryModal.classList.toggle("show")
          })

};
getWether();

}

