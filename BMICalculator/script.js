const form = document.querySelector('form');
//this usecase will givr you empty
//const height = parseINt(document.querySelector('#height').value)

    form.addEventListener('submit' , function (e) {
      e.preventDefault();
      
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === ' ' ||  height < 0 || isNaN(height)){

        results.innerHTML = `Please give a valid height ${height}`;

    }
    if (weight === ' ' ||  weight < 0 || isNaN(weight)){

        results.innerHTML = `Please give a valid height ${weight}`;

    }

    let BMI = weight/(height*height);
    BMI = BMI*10000;
    results.innerHTML = `The BMI of the person is ${BMI}`
    if (BMI < 18.6){

        results.innerHTML = `<span>${BMI}</span><br>The person is underweight`
        
    }else if (BMI > 24.9){

        results.innerHTML = `<span>${BMI}</span><br>The person is Overweight`

    }else{
        results.innerHTML = `<span>${BMI}</span><br>The person is Normal`
    }


  });


