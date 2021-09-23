let bearSize = 220;
let headSize = 81.5;
let headTop = 320;
let headLeft = 51;
function fatten(){
    $('.bear').html('<img id="fatBear" src="images/fatbear12.png" height="' + bearSize + 'px">');
    bearSize++;
    $('.head').html('<img id="bearHead" src="images/bearHead.png" height="' + headSize + 'px">');
    $('#bearHead').css({'top':''+ headTop + 'px','left':''+ headLeft + 'px'});
    headTop-=0.08;
    headSize+=0.365;
    headLeft-=0.04;
     if(bearSize < 235) {
         setTimeout(() => {
       fatten(); 
    }, 100);
    }
     }
    

$('.imgDiv').on('click',function(){
    if(bearSize < 235) {
    fatten();
    }
});