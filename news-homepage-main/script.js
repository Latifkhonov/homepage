$(document).ready(function () {
   let desktopSize = window.matchMedia("( min-width:420px)");
   if (desktopSize.matches){
    $('.open').hide()
    $('.neutral').hide()
    $('.backside').hide()
  
   }
   else{
    $('.backside').hide()
    $('.neutral').hide()
    $('.open').show()
    
    $('.open').click(function(){
        $('.backside').show(500)
        $('.neutral').toggle(500);
        $('.open').toggle();
        
    });
    $('.close').click(function(){
        $('.neutral').toggle(500)
        $('.open').toggle()
    })
   }    
});