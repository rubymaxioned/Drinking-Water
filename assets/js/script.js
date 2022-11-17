var bigGlass = document.querySelector(".big-glass");
var liter = document.querySelector(".liter");
var remaining = document.querySelector(".remaining");
var percentage = document.querySelector(".percentage");
var smallGlass = document.querySelectorAll(".small-glasses");
var reminder = document.querySelector(".reminder");


smallGlass.forEach(function (list, index) {

    list.addEventListener('click', function () {
        var percentageContent = 0;
        var glassHeight = 0;
        var reminderHeight = 0;
        var literText = 2;

        for (var i = 0; i <= index; i++) {
            smallGlass[i].classList.add('color');
            percentageContent += 12.5;
            percentage.innerText = percentageContent+"%";
            glassHeight += 25.5;
            reminderHeight += 10;
            literText -= 0.25;
            var reminderHeightFinal = 75 - reminderHeight;
            var literTextFinal = literText;
        }

        for (var i = index + 1; i <= 7; i++) {
            smallGlass[i].classList.remove('color');
        }
        
        liter.innerText = literTextFinal + "L";
        percentage.style.visibility = "visible";
        percentage.style.height = `${glassHeight}px`;
        reminder.style.top = `${reminderHeightFinal}px`;
        console.log(percentage.style.top);
    })
})