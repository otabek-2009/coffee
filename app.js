let logo = document.querySelector(".logo")
logo.src = header_data.logoImg

let list = document.querySelector(".list")

let list_item = ''
header_data.nav.forEach((item)=>{
     list_item += `
     <li>${item}</li>
     `
})

list.innerHTML = list_item

let hero = document.querySelector(".hero")
hero.style.backgroundImage = `url(${hero_data.bgImg})` ;

hero.innerHTML = `
<div class="container">
<h1>${hero_data.title}</h1>
<p>${hero_data.text}</p>
<button>${hero_data.btn_text}</button>

</div>
`

let collection__title =document.querySelector(".collection__title")
collection__title.textContent = collection_data.text 
let collection__wrapper = document.querySelector(".collection__wrapper") 
let collection_card= '' 
collection_data.collection_cards.forEach((item)=>{
collection_card+= `
<div class="collection_card">
<img src="${item.img}" alt="">
<h4>${item.title}</h4>
<p>${item.text}</p>
</div>


`
})


collection__wrapper.innerHTML = collection_card


document.querySelector(".choose__title").textContent = choose_data.title
document.querySelector(".choose__text").textContent = choose_data.text
let choose__wrapper = document.querySelector(".choose__wrapper")
let choose__content = ''
choose_data.choose_card.forEach((item)=>{
     choose__content+= `
     <div class="choose__card">
     <img src="${item.img}" alt="" >
     <h4>${item.title}</h4>
     <p>${item.text}</p>
</div>
     `
})

choose__wrapper.innerHTML = choose__content

document.querySelector(".step__text").textContent = step.text
let step__link = document.querySelector(".step__link")

step__link.textContent = step.btn.text
step__link.href = step.btn.url
let step__wrapper = document.querySelector(".step__wrapper")
let step_content = ''
step.cards.forEach((item)=> {
     step_content += `
     
     <div class="step_card">
                              <h2>${item.number}</h2>
                              <h4>${item.title}</h4>
                              <p>${item.text}</p>
     `
})
step__wrapper.innerHTML = step_content