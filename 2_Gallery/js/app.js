/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded',function() {


    var liElements = document.querySelectorAll('.gallery ul li');
    var bodyAll = document.querySelector('body');
    var newDiv = document.createElement("div");
    bodyAll.appendChild(newDiv);
    newDiv.id = "big";
    var newDivLoc = document.querySelector("#big");

    for (var i = 0; i < liElements.length; i++) {
        liElements[i].addEventListener('click', function () {
            var atr = this.querySelector('img').getAttribute("src");
            var fullScreen = function (src) {
                newDivLoc.innerHTML = '<div class="fullScreen"><img src=' + src + '><button class="close">Close</button></div>';
            };
            fullScreen(atr);


            var button = document.querySelector(".close");
            button.addEventListener('click', function () {
                var DivFull = document.querySelector(".fullScreen");
                DivFull.remove();
            })
        });
    }
});









































