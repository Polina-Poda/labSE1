   var currentActive = "none";
   $(document).ready(function(){
       $("#tab2").slideToggle();
       $("#tab2").toggleClass("active");
   });
   $(document).ready(function(){
       $("#tab3").slideToggle();
       $("#tab3").toggleClass("active");
   });
   $(document).ready(function(){
       $("#tab4").slideToggle();
       $("#tab4").toggleClass("active");
   });
   $(document).ready(function(){
       $("#tab1").slideToggle();
       $("#tab1").toggleClass("active");
   });
   $(document).ready(function(){
       $("#toggle1").click(function(){
           if(currentActive == "none"){
               $("#tab1").slideToggle("slow");
               $(this).toggleClass("active");
               currentActive = "tab1";
           } else{
               switch (currentActive){
                   case "tab1":
                       $("#tab1").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "none";
                       break;
                   case "tab2":
                       $("#tab2").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab1").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab1";
                       break;
                   case "tab3":
                       $("#tab3").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab1").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab1";
                       break;
                   case "tab4":
                       $("#tab4").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab1").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab1";
                       break;
               }
           }
       });
   });
   $(document).ready(function(){
       $("#toggle2").click(function(){
           if(currentActive == "none"){
               $("#tab2").slideToggle("slow");
               $(this).toggleClass("active");
               currentActive = "tab2";
           } else{
               switch (currentActive){
                   case "tab2":
                       $("#tab2").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "none";
                       break;
                   case "tab1":
                       $("#tab1").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab2").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab2";
                       break;
                   case "tab3":
                       $("#tab3").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab2").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab2";
                       break;
                   case "tab4":
                       $("#tab4").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab2").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab2";
                       break;
               }
           }
       });
   });
   $(document).ready(function(){
       $("#toggle3").click(function(){
           if(currentActive == "none"){
               $("#tab3").slideToggle("slow");
               $(this).toggleClass("active");
               currentActive = "tab3";
           } else{
               switch (currentActive){
                   case "tab2":
                       $("#tab2").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab3").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab3";
                       break;
                   case "tab1":
                       $("#tab1").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab3").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab3";
                       break;
                   case "tab3":
                       $("#tab3").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "none";
                       break;
                   case "tab4":
                       $("#tab4").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab3").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab3";
                       break;
               }
           }
       });
   });
   $(document).ready(function(){
       $("#toggle4").click(function(){
           if(currentActive == "none"){
               $("#tab4").slideToggle("slow");
               $(this).toggleClass("active");
               currentActive = "tab4";
           } else{
               switch (currentActive){
                   case "tab2":
                       $("#tab2").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab4").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab4";
                       break;
                   case "tab1":
                       $("#tab1").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab4").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab4";
                       break;
                   case "tab4":
                       $("#tab4").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "none";
                       break;
                   case "tab3":
                       $("#tab3").slideToggle("slow");
                       $(this).toggleClass("active");
                       $("#tab4").slideToggle("slow");
                       $(this).toggleClass("active");
                       currentActive = "tab4";
                       break;
               }
           }
       });
   });
