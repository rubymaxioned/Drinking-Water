var bigGlass = document.querySelector(".big-glass");
var liter = document.querySelector(".liter");
var remaining = document.querySelector(".remaining");
var percentage = document.querySelector(".percentage");
var smallGlass = document.querySelectorAll(".small-glasses");
console.log(smallGlass);

smallGlass.forEach(function(list,index){
    
    list.addEventListener('click',function(){
        console.log(list);
    console.log(index);
        for(var i=0; i<=index; i++){
            console.log(smallGlass[i]);
            smallGlass[i].classList.add('color');
        }
    })
})