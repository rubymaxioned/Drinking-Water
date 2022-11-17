var bigGlass = document.querySelector(".big-glass");
var liter = document.querySelector(".liter");
var remaining = document.querySelector(".remaining");
var percentage = document.querySelector(".percentage");
var smallGlass = document.querySelectorAll(".small-glasses");
console.log(smallGlass);

smallGlass.forEach(function (list, index) {

    list.addEventListener('click', function () {
        console.log(list);
        console.log(index);
        var percentageContent = 0;
        var glassHeight = 0;
        for (var i = 0; i <= index; i++) {
            console.log(smallGlass[i]);
            smallGlass[i].classList.add('color');
            percentageContent += 12.5;
            console.log(percentageContent);
            percentage.innerText = percentageContent+"%";
            glassHeight += 25.5;
            console.log(glassHeight)
        }
        for (var i = index + 1; i <= 7; i++) {
            console.log(smallGlass[i]);
            smallGlass[i].classList.remove('color');
        }
        percentage.style.visibility = "visible";
        percentage.style.height = `${glassHeight}px`;
        console.log(percentage.style.height);
    })
})