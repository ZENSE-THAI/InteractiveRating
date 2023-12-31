const rating_section = document.querySelector('[data-rating-section]')
const thank_section = document.querySelector('[data-thank-section]')
const rateCheck = document.querySelectorAll('.ratings span')
const btn = document.querySelector('[data-btn-submit]')
const ratePoint = document.getElementById('ratepoint')

let rate = null;

rateCheck.forEach((rateCheck) => {
    rateCheck.addEventListener('click' , (e) => {
        const active = document.querySelector('.checked')
        if (active) {
            active.classList.remove('checked')
        } 
        const check = e.target
        check.classList.add('checked')
        rate = e.target.innerText
    })
})


btn.addEventListener('click' ,() => {
    if (rate){
        ratePoint.innerHTML = rate ;
        rating_section.classList.add('hidden');
        thank_section.classList.remove('hidden')
    }
    
})