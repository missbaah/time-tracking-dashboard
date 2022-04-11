const daily = document.querySelector(".daily");
const links = document.getElementsByTagName('a')

   links[0].addEventListener('click', function(){
       if(daily.onclick){
           document.querySelectorAll(".dailyhours") = document.querySelectorAll(".dailyhours").innerHTML
           document.querySelectorAll(".yesterday") = document.querySelectorAll(".yesterday").innerHTML
       }
   })