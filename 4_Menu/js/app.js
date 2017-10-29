/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded',function() {

    var firstRowLi = document.querySelectorAll("div>ul>li");
    var secondLi = document.querySelectorAll("div>ul>li>ul");
    for (var i=0; i<secondLi.length; i++) {
        secondLi[i].style.display = "none";
    };

    for (var i = 0; i < firstRowLi.length; i++) {
        firstRowLi[i].addEventListener(`mouseover`, function (event) {
            if(this.querySelector('ul') !== null) {
                this.querySelector("ul").style.display = "inline-block";
            }
        });

        firstRowLi[i].addEventListener("mouseout", function (event) {
            if(this.querySelector('ul') !== null){
                 this.querySelector('ul').style.display = "none";
            }
        });

    }
});