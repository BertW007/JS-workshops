/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener('DOMContentLoaded',function(){
   var buttonNext = document.getElementById('nextPicture');
   var buttonPrev = document.getElementById('prevPicture');
   var liElements = document.querySelectorAll('.slider ul li');

   var calc = 0;

   var tabLi = Array.from(liElements);

   console.log(liElements);
   console.log(buttonNext);
   console.log(buttonPrev);
   console.log(tabLi);


   tabLi[0].classList.add("visible");

   buttonNext.addEventListener('click', function(){
       if(calc < tabLi.length-1){
         tabLi[calc].classList.remove("visible");
        tabLi[calc+1].classList.add("visible");
        calc++
      }else{
        calc = 0;
        tabLi[calc].classList.add("visible");
        tabLi[calc+5].classList.remove("visible");
      }
     });
   buttonPrev.addEventListener('click', function(){
        if(calc > 0){ //
          tabLi[calc].classList.remove("visible");
          tabLi[calc-1].classList.add("visible");
          calc--
       }else{
         calc = tabLi.length-1;
         tabLi[calc].classList.add("visible");
         tabLi[calc-5].classList.remove("visible");
        }
    });
   });
