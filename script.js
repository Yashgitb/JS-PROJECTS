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
    else if(value === '%' ){
       string = (eval(string))/100;
    }
    else {
        string = string+value;        
    }
        input.value = string;
    
  });
});