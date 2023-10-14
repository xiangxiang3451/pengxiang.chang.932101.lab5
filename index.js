function firstClick() {
    var tag = document.getElementById('box');
    tag.style.display = 'flex';

}
function secondClick(){
    var tag = document.getElementById('box');
    document.getElementById('firstNum').innerHTML='2';
    document.getElementById('secondNum').innerHTML='2';
    tag.style.display = 'flex';
    
}
function thirdClick(){
    var tag = document.getElementById('box');
    document.getElementById('firstNum').innerHTML='3';
    document.getElementById('secondNum').innerHTML='3';
    tag.style.display = 'flex';
}
function show(){
    var tag = document.getElementById('box');
    tag.style.display = 'none';
}