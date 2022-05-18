
const btn = document.querySelector('.howmany');
const modal = document.querySelector('#modal');
const result = document.querySelector('.wrap-result');
const go = document.querySelector('#gotrain')


const job = document.querySelector('#job');
const inputjob = document.querySelector('#jobname');
const hour = document.querySelector('#hour');
const inputhour = document.querySelector('#trainhour');
const modalbtn = document.querySelector('.modalbtn')

btn.addEventListener('click', () => {
    result.classList.add('show');
    job.textContent = inputjob.value;
    hour.textContent = (10000 / (inputhour.value));
})

go.addEventListener('click', () => {
    modal.classList.toggle('show');
})

modalbtn.addEventListener('click', () => {
    modal.classList.toggle('show');
})

