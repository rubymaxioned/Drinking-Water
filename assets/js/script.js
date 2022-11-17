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
        var literHeight = 0;
        var remainingHeight = 0;
        var literText = 0;
        for (var i = 0; i <= index; i++) {
            console.log(smallGlass[i]);
            smallGlass[i].classList.add('color');
            percentageContent += 12.5;
            console.log(percentageContent);
            percentage.innerText = percentageContent+"%";
            glassHeight += 25.5;
            literHeight += 10;
            remainingHeight += 12.5;
            literText += 0.25;
            var literHeightFinal = 75 - literHeight; 
            var remainingHeightFinal = 100 - remainingHeight;
            var literTextFinal = literText;
            console.log(literTextFinal);
        }
        for (var i = index + 1; i <= 7; i++) {
            console.log(smallGlass[i]);
            smallGlass[i].classList.remove('color');
        }
        liter.innerText = literTextFinal + "L";
        percentage.style.visibility = "visible";
        percentage.style.height = `${glassHeight}px`;
        // liter.style.top = `${literHeightFinal}px`;
        // remaining.style.top = `${remainingHeightFinal}px`;
        console.log(percentage.style.height);
    })
})