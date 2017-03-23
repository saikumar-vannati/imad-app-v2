console.log('Loaded!');
var element = document.getElementById('main_text');

element.innerHtml = 'this is saikumar and my first webapp';
var img = document.getElementById('madi');

var marginLeft= 0;

function moveRight()
{
    marginLeft = marginLeft +5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};