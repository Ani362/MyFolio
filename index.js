///////////////////////////////////MENU/////////////////////////////////////

window.onscroll = () => {myScroll()}

function myScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector('#button-top').style.display = 'none';
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector('#navbar').style.display = 'block';
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                document.querySelector('#button-top').style.display = 'block';
            }
            else{
                document.querySelector('#button-top').style.display = 'none';
            }
        } 
    
        else {
            document.querySelector('#navbar').style.display = 'none';

        }
    }

}

////////////////////////////////////////BUTTON TOP///////////////////////////

let buttonTop = document.querySelector('#button-top');

function topButton(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//////////////////////////////////////SLIDER/////////////////////////////////
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let li = document.querySelectorAll('li');
let index = 0;
let lis = li.length;

prev.onclick = () => {
    li[index].classList.remove('active');
    index--;
    if(index < 0){
        index = lis-1;
    }
    li[index].classList.add('active');
}

next.onclick = () => {
    li[index].classList.remove('active');
    index++;
    if(index > lis-1) {
        index = 0;
    }
    li[index].classList.add('active');
}
///////////////////////////////Form//////////////////////


// let button = document.getElementById('button');

// button.onclick = () => {
function valid(){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let input3 = document.getElementById('input3').value;
    let input4 = document.getElementById('input4').value;
    let alert_content = document.querySelector(".alert-content");
    let span = document.querySelector("#span");
    let h5 = document.querySelector("h5");


    if(input1.length < 1 ){
        alert_content.style.display = "block";
        alert_content.style.background = "red";
        h5.innerHTML = "error 1";
        
    }
    else if(input2.length < 1 ){
        alert_content.style.display = "block";
        alert_content.style.background = "red";
        h5.innerHTML = "error 2";
        
    }
    else if(input3.length < 1 ){
        alert_content.style.display = "block";
        alert_content.style.background = "red";
        h5.innerHTML = "error 3";
        
    }
    else if(input4.length < 1 ){
        alert_content.style.display = "block";
        alert_content.style.background = "red";
        h5.innerHTML = "error 4";
       
    }
    else{
        alert_content.style.display = "block";
        alert_content.style.background = "green";
        h5.innerHTML = "true";
        
    }

}

let newDiv = document.querySelector('.alert-content');
let span = document.querySelector('#span');

span.onclick = () => {
    newDiv.style.display = "none";
}
window.onclick = (e) => {
    if(e.target === newDiv){
        newDiv.style.display = "none";
    }
}