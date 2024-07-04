
import { Display } from "./display.js";
import { Category } from "./api.js";



const display = new Display();
const category = new Category();

/////////////////// all nav-bar btns to array 
let list = Array.from(document.querySelectorAll('.navbar-nav li'));
console.log(list.length);

///////////////////// nav-bar btns click to diplay game by genere
for (const x of list) {
    x.addEventListener('click', async (e) => {
        console.log(e.target.textContent);
        let data = await category.gameByGener(e.target.textContent);
        console.log(data);
        await display.display(data);
        showDetails();
    })
}
////////////////// display game detail fun
function showDetails() {
    let o = document.querySelectorAll('.item')
    for (const i of o) {
        i.addEventListener('click', async function (e) {
            let id = e.currentTarget.getAttribute('data-set');
            let data = await category.gameById(id);
            console.log(data);
            await display.dp(data);
            console.log('hi');
            closeDetail()
        })
    }
}

///////////////// game detail close btn
function closeDetail() {
    let i = document.querySelector('.detail-btn')
    i.addEventListener('click', function (e) {
        display.spic.classList.add('d-none');
    })
}


// let loadPage = document.querySelector('.load-page')
// document.addEventListener( 'readystatechange', function(e){
//     console.log('hi');
//     loadPage.classList.add('d-none')
// })

