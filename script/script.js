const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const labelName = document.getElementById('label-name')
const labelEmail = document.getElementById('label-email')
const buttonSubmit = document.getElementById('submit')
const arrowBack = document.getElementById('arrowback')
const arrowForward = document.getElementById('arrowforward')
const page = document.getElementById('page')
const cards = document.getElementsByClassName('card-item')

let regExpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let regExpName =  /^[А-ЯA-Za-zа-яё]*$/ 
let distance = (Number(page.textContent) - 1) * 1140

inputName.addEventListener('input', onInputName)
inputEmail.addEventListener('input', onInputEmail)

buttonSubmit.addEventListener('submit', function(event) {
    event.preventDefault()
    onInputEmail()
    onInputName()
})

arrowForward.addEventListener('click', onPageForward)

arrowBack.addEventListener('click', onPageBack)

function onPageBack() {
    if (Number(page.textContent) > 1) {
        page.textContent = Number(page.textContent) - 1
        changePage()
}
}

function onPageForward() {
    if (Number(page.textContent) < 3) {
        page.textContent = Number(page.textContent) + 1
        changePage()
}
}

function changePage() {
    distance = (Number(page.textContent) - 1) * 1140
        for (let i=0; i<cards.length; i++) {
            cards[i].style.transform = 'translateX(-'+distance+'px)'
        }
}

function onInputEmail() {
    if (regExpEmail.test(inputEmail.value) == false || !inputEmail.value) {
        labelEmail.classList.remove('hidden')
        inputEmail.classList.add('error')
        buttonSubmit.disabled = true
    } else {
        labelEmail.classList.add('hidden')
        inputEmail.classList.remove('error')
        buttonSubmit.disabled = false
    }
}

function onInputName() {
    if (regExpName.test(inputName.value) == false || !inputName.value) {
        labelName.classList.remove('hidden')
        inputName.classList.add('error')
        buttonSubmit.disabled = true
    } else {
        labelName.classList.add('hidden')
        inputName.classList.remove('error')
        buttonSubmit.disabled = false
    }
}
