
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

// 수정한 코드
let jobname = document.input_form.inputjob.value;
let dayhour = document.input_form.inputhour.value;
// input 안에 job, hour이라는 이름의 value 불러옴

if (jobname == "" || dayhour == "") {
  alert(" 입력되지 않은 값이 있습니다. ");
  if (jobname == "") {
    document.input_form.inputjob.focus();
    //focus가 jobname으로 옮겨짐
  } else if (dayhour == "") {
    document.input_form.inputhour.focus();
    //focus가 dayhour으로 옮겨짐
  }
}

