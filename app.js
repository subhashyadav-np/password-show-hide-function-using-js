//lets work for functionality

//selecting html element and declearing in viriable
let input = document.querySelector('#input');
let btn = document.querySelector('#passwordTypeChanger');

//if someone click on button
btn.addEventListener('click', function(){

    //lets check condition first 
    if (input.type == 'password') {
        //lets make type text
        input.type = "text";
        //and change the icon of button
        btn.innerHTML = '<i class="fa fa-eye-slash"></i>';
    } else{
        input.type = 'password';
        btn.innerHTML = '<i class="fa fa-eye"></i>';
    }

});