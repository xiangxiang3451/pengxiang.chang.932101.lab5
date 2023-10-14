function Click(idNum) {
    var tag = document.getElementById('box');
    document.getElementById('firstNum').innerHTML = idNum;
    document.getElementById('secondNum').innerHTML = idNum;
    tag.style.display = 'flex';

}
function show() {
    var tag = document.getElementById('box');
    tag.style.display = 'none';
}