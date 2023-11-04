let str = "";
let inp = document.querySelector("input");
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach(but => {
  but.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      str = eval(str);
      console.log(str);
    }
    else if (e.target.innerHTML === 'CLR') {
      str = '';
      inp.value = '';
    }
    else if (e.target.innerHTML === 'DEL') {
       str=str.slice(0,-1);
      }
    if (e.target.innerHTML !== '=' && e.target.innerHTML !== 'CLR' && e.target.innerHTML !== 'DEL')
      str += e.target.innerHTML;
      inp.value = str;
    
  });
});
