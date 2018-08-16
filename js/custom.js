document.addEventListener('DOMContentLoaded',function(){
    var barsButton = document.querySelector('.button-bar');
    var dropDown = document.querySelector('.drop-down');

    // click
    barsButton.addEventListener('click',function(e){
        e.preventDefault();
        dropDown.classList.toggle('show');
    })
},false);