

let btn1 = document.getElementById('btn1')

//arrow function

btn1.addEventListener('click', () => {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
   
    
    if(email && password){
        alert('success')
    }else{
        alert('error')
    }

});
