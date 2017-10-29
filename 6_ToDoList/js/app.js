/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded',function() {
    var UlList = document.getElementById("taskList");
    var buttonRemove = document.getElementById("removeFinishedTasksButton");
    var buttonAdd = document.getElementById('addTaskButton');
    var inputElem = document.getElementById('taskInput');
    var counter = document.getElementById('counter');






    buttonAdd.addEventListener('click', function () {
        var inputMessage = document.getElementById('taskInput').value;
        if(inputMessage.length > 5 && inputMessage.length < 100){
            counter.innerText++;
            var Li = document.createElement("li");
            UlList.appendChild(Li);
            Li.innerHTML = "<h1>"+inputMessage+"</h1>" +
                            "<button class='delete'>Delete</button>" +
                            "<button class='complete'>Complete</button>"
            Li.style.listStyleType = "none";


            var buttonComplete = Li.querySelector("button:last-of-type");
            var buttonDelete = Li.querySelector("button:first-of-type");

                buttonComplete.addEventListener('click', function(){
                    var h1Element = this.previousElementSibling.previousElementSibling;
                    h1Element.classList.toggle("red");
               })
              buttonDelete.addEventListener('click', function(){
                  Li.parentElement.removeChild(Li);
                  counter.innerText--;
               });

        }else{
            alert("Ilość znaków musi być większa od 5 i mniejsza od 100");
        }
        inputElem.value = "";
    });

    buttonRemove.addEventListener("click", function(){
        var h1Elements = document.querySelectorAll('.red');
        for (var i=0; i<h1Elements.length; i++ ) {
            h1Elements[i].parentElement.remove();
            counter.innerText--;
        }

    });



});




