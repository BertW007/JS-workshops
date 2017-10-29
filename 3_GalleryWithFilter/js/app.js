/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded',function(){
    var galleryImages = document.querySelectorAll('#gallery img');
    var showButton = document.getElementById("showButton");
    var hideButton = document.getElementById("hideButton");
    var input = document.getElementById("tagInput");



    showButton.addEventListener('click', function (){
       var inputValue = input.value;
       for(var i=0; i<galleryImages.length; i++){
           var inputValue = input.value;
           var galleryTag = galleryImages[i].dataset.tag;
           var indexOfValue = galleryTag.indexOf(inputValue);
            if(indexOfValue == 0 || indexOfValue > 0){
                galleryImages[i].classList.remove("invisible");
            }

       };
    });

    hideButton.addEventListener('click', function (){

        for(var i=0; i<galleryImages.length; i++){
            var inputValue = input.value;
            var galleryTag = galleryImages[i].dataset.tag;
            var indexOfValue = galleryTag.indexOf(inputValue);
            if(indexOfValue == 0 || indexOfValue > 0){
                galleryImages[i].className += "invisible";
            }




        };

    });



})