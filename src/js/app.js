const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */

 console.log('js loaded!')

 // EX01
 document.querySelector('#ex01').innerHTML = 'done'

 // EX02
 document.querySelector('.ex02').className = 'red'

 // EX03
 document.querySelector('blockquote').innerHTML = 'When you focus on the good, the good gets better.'

 // EX04
 const ul = document.querySelector('#shopping-list')
 let newLi = document.createElement('li')
 newLi.innerHTML = 'Milk'

 ul.appendChild(newLi)

 // EX05


 // EX06
 let clickCounter = 0
  
 window.addEventListener("click", function(){
    document.getElementById('click-counter').innerHTML = clickCounter++;
 })


 // EX07
 let button = document.querySelector('button');

 button.addEventListener('click', function(){
     button.disabled = true;
 })

 // EX08
 document.querySelector('#link-to-svt').setAttribute('href','javascript:void(0)')

 // EX09



