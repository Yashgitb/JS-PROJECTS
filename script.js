let input = document.getElementById("inputBox")
let buttons = document.querySelectorAll("button")
let string = "";


buttons.forEach(button => {
  button.addEventListener("click", (e) =>{
   let value = e.target.innerText;

   if (value === '=') {
        string = eval(string);
        
    } 
    else if(value === 'AC' ){
      string = "";
    }
    else if(value === 'DL' ){
      string = string.slice(0,-1);
    }
    else if(value === 'X' ){
      string = string.slice(0,-1);
    }
    else if(value === '%' ){
       string = (eval(string))/100;
    }
    else if(value === 'x^2' ){
       let square = Number(string);
       square = square**2;
       string=String(square);
    }
    else if(value === "1/x"){
      let inver = Number(string);
       inver = 1/inver;
       string = String(inver);
    }
    else if (value === "x^0.5"){
      let squareroot = Number(string);
       squareroot = Math.sqrt(squareroot);
       string = String(squareroot);
    }
    else {
        string = string+value;        
    }
        input.value = string;
    
  });
});
