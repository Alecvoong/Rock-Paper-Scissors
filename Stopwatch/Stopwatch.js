let [h,m,s,ms] = [00,00,00,00];
let num;
let starttime= true;

function start(){
  if(starttime){
  num = setInterval(stopwatchStart,10);
  starttime = false;
  }
}

function stop(){
  if(!starttime)
  {
    clearInterval(num);
    starttime=true;
  }
}

function stopwatchStart()
{
  ms+=1;

  if (ms === 100){
    s++;
    ms = 0;
    if (s<10){
      s = "0" + s;}
  }

  if (s === 60){
    m++;
    s = 0;
    if (m<10)
    m = "0" + m;
  }

  if (m === 60){
    h++;
    m = 0;
    if (h<10)
    h = "0" + h;
  }

  displayTime();
}

function reset(){
  [h,m,s,ms] = [0,0,0,0];
  displayTime();
}

function upH(){
  h++;
  displayTime();
}

function upM(){
  if (m<59)
  m++;
  displayTime();
}

function upS(){
  if(s<59)
  s++;
  displayTime();
}

function upMs(){
  if(ms<99)
  ms++;
  displayTime();
}

function downH(){
  if (h>0)
  h--;
  displayTime();
}

function downM(){
  if (m>0)
  m--;
  displayTime();
}

function downS(){
  if (s>0)
  s--;
  displayTime();
}

function downMs(){
  if (ms>0)
  ms--;
  displayTime();
}

function displayTime() {
  document.querySelector('.hour').innerHTML = `${h} hr : `;
  document.querySelector('.minute').innerHTML = `${m} m : `;
  document.querySelector('.second').innerHTML = `${s} s :`;
  document.querySelector('.ms').innerHTML = `${ms} ms`;
}
