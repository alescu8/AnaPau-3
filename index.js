const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click',function(){
    alert('yo tambien te quieroooooo, no era tan dificil Ana ya vez JAJAJAAJA')
});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transfors',`translate(-${randomX}%,-${randomY}%)`);
})