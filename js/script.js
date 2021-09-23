
$('#images').html('<img id="image" class="image" src="images/dontEat.jpg"><img id="text1" class="text" src="images/comeOn.png">')

$('.images').on('click',function(){
    $('#text1').detach();
    $('#images').append('<img id="text2" class="text" src="images/text2.png">')
    $('.images').on('click',function(){
        $('#images').html('<img id="image1" class="image" src="images/workout.jpg">');
        $('.images').on('click',function(){
            $('#images').html('<img id="image1" class="image" src="images/workout1.jpg">');
            $('.images').on('click',function(){
                $('#images').html('<img id="image1" class="image" src="images/workout2.jfif">');
                $('.images').on('click',function(){
                    $('#images').html('<img id="image1" class="image" src="images/workout3.jpg">');
                    $('.images').on('click',function(){
                        $('#images').html('<img id="image1" class="image" src="images/marwyvi.jpg"><img id="text3" class="text" src="images/timeToEat.png">');
                        $('.images').on('click',function(){
                            $('#images').html('<img id="image1" class="image" src="images/boloMarwyvi.jpg">');
                            $('.images').on('click',function(){
                                $('#images').html('<img id="image1" class="image" src="images/boloMarwyvi.jpg"><img id="text4" class="text" src="images/stillHungry.png">');
                                $('.images').on('click',function(){
                                    $('#images').html('<img id="image1" class="image" src="images/milkStillHungry.png">');
                                    $('.images').on('click',function(){
                                        $('#images').html('<img id="image1" class="image" src="images/goingOut.jpg"><img id="text5" class="text" src="images/eatSomewhere.png">');
                                        $('.images').on('click',function(){
                                            $('#images').html('<img id="image1" class="image" src="images/goingOut.jpg"><img id="text6" class="text" src="images/text6.png">');
                                            $('.images').on('click',function(){
                                                $('#images').html('<img id="image1" class="image" src="images/goingOut.jpg"><img id="text6" class="text" src="images/text7.png">');
                                                $('.images').on('click',function(){
                                                    $('#images').html('<img id="image1" class="image" src="images/goingOut.jpg">');
                                                    $('.yesNO').removeClass('hide');
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

let pleyer;

$('#yes').on('click',function(){
    $('#yes').css({ 'background-color': 'cadetblue'});
    player = 'milk';
    letItStart();
    $('#images').empty();
    $('.yesNo').detach();
})
$('#no').on('click',function(){
    $('#no').css({ 'background-color': 'cadetblue'});
    player = 'mocha';
    letItStart();
    $('#images').empty();
    $('.yesNo').detach();
})
// $('#image1').detach();
 //       letItStart();

function letItStart() {



player == 'mocha' ? $('#milkOrMocha').html('<img id="mocha" class="mocha" src="images/mocha.png">') : $('#milkOrMocha').html('<img id="mocha" class="mocha" src="images/milk.png">');



let backgroundNumber = Math.round(Math.random() * 6);
$('#background').css({ 'background-size': '100%' + screen.height + 'px', 'background-image': 'url(images/background' + backgroundNumber + '.jpg)'});

let mochaHeight = 15;
let grows = (mochaHeight - 15) / 100;
let timer;
let timerSpeed = 20;
let moveSpeed = 1;
let foodNumber;
let height1, width1;
let catchedFood = 0;
let missedAndPoisonedFood = 0;
let foodArray = [
    {
        src: 'images/food0.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food0'
    },
    {
        src: 'images/food1.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food1'
    },
    {
        src: 'images/food2.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food2'
    },
    {
        src: 'images/food3.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food3'
    },
    {
        src: 'images/food4.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food4'
    },
    {
        src: 'images/food5.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food5'
    },
    {
        src: 'images/food6.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food6'
    },
    {
        src: 'images/food7.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food7'
    },
    {
        src: 'images/food8.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food8'
    },
    {
        src: 'images/food9.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food9'
    },
    {
        src: 'images/food10.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food10'
    },
    {
        src: 'images/food11.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food11'
    },
    {
        src: 'images/food12.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food12'
    },
    {
        src: 'images/food13.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'food13'
    },
];

// Count
$('#countCatchedFood').html('<h1>' + catchedFood + '</h1>');
$('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
//movingMocha
document.addEventListener('touchmove',function(ev) {
    var touchLocation = ev.targetTouches[0];
    if(touchLocation.pageX < screen.width - (screen.width * (0.07 + grows / 2))) {
    $('#mocha').css({ 'top': touchLocation.pageY - screen.height * (0.08 + grows / 2) , 'left': touchLocation.pageX - screen.width * (0.07 + grows / 2) });
    } else {
        $('#mocha').css({ 'top': touchLocation.pageY - screen.height * (0.08 + grows / 2) , 'left': touchLocation.pageX - screen.width * (0.14 + grows / 2) });
    }
    height1 = touchLocation.pageY - screen.height * 0.08;
    width1 = touchLocation.pageX - screen.width * 0.07;
})
function newFood() {
    function append() {
        mochaHeight += 0.02;
        grows = (mochaHeight - 15) / 100;
        $('#mocha').css({ 'height': mochaHeight +'vw'});
        let lastFoodNumber = foodNumber;
        foodNumber = (Math.floor(Math.random() * foodArray.length))
        if (foodNumber == lastFoodNumber && foodNumber > 0) {
            foodNumber = foodNumber - 1;
        }
        if (foodNumber == lastFoodNumber && foodNumber == 0) {
            foodNumber = foodNumber + 1;
        }
        $('#foods').append("<img class='food' id='" + foodArray[foodNumber].id + "' src=" + foodArray[foodNumber].src + "></img> ");
        timer = (Math.round(Math.random() * timerSpeed)) + 10;
        timerSpeed > 5 ? timerSpeed-- : timerSpeed = timerSpeed;
        if(catchedFood == 5) {
            ExtraFood();
        }  if(catchedFood == 16) {
            moreFood();
        } if(catchedFood == 40) {
            fastFood();
        } 
    }
    append()
    function moveFood() {
        $('#food' + foodNumber + '').css({ 'top': foodArray[foodNumber].x, 'left': foodArray[foodNumber].y });
        if(foodArray[foodNumber].x < screen.height - 209) { 
            foodArray[foodNumber].x = foodArray[foodNumber].x + moveSpeed 
        } else {
             foodArray[foodNumber].x = 0;
             foodArray[foodNumber].y = Math.round(Math.random() * (screen.width - 50));
        }
        if ((height1 - foodArray[foodNumber].x) < screen.width * (0.09 + grows / 2) && (foodArray[foodNumber].x - height1) < screen.width * 0.13 && (width1 - foodArray[foodNumber].y) < screen.width * (0.10 + grows / 2) && (foodArray[foodNumber].y - width1) < screen.width * (0.12 + grows / 2)) {
            if (foodNumber != 13) {
                catchedFood++;
                // $('#food' + j + '').addClass('hide');
                $('#food' + foodNumber + '').detach();
                $('#countCatchedFood').html('<h1>' + catchedFood + '</h1>');
            } else {
                missedAndPoisonedFood++;
                $('#food' + foodNumber + '').detach();
                $('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
            }
            foodArray[foodNumber].x = 0;
            foodArray[foodNumber].y = Math.round(Math.random() * (screen.width - 50));
            append();
        }
        if (screen.height - foodArray[foodNumber].x < 210) {
            if (foodNumber != 13) {
                $('#food' + foodNumber + '').detach();
                missedAndPoisonedFood++;
                $('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
            } else {
                $('#food' + foodNumber + '').detach();
            }
            foodArray[foodNumber].y = Math.round(Math.random() * (screen.width - 50));
            append();
        }
        setTimeout(moveFood, timer);
    }
    moveFood();
}
newFood()



//meore funqcia

let foodArray2 = [
    {
        src: 'images/food0.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood0'
    },
    {
        src: 'images/food1.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood1'
    },
    {
        src: 'images/food2.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood2'
    },
    {
        src: 'images/food3.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood3'
    },
    {
        src: 'images/food4.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood4'
    },
    {
        src: 'images/food5.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood5'
    },
    {
        src: 'images/food6.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood6'
    },
    {
        src: 'images/food7.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood7'
    },
    {
        src: 'images/food8.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood8'
    },
    {
        src: 'images/food9.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood9'
    },
    {
        src: 'images/food10.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood10'
    },
    {
        src: 'images/food11.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood11'
    },
    {
        src: 'images/food12.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood12'
    },
    {
        src: 'images/food13.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'moreFood13'
    },
];

let moveSpeed2 = 1;
let foodNumber2;
let timer2;
let timerSpeed2 = 10;
function moreFood() {
    
    function appendMoreFood() {
        mochaHeight += 0.02;
        grows = (mochaHeight - 15) / 100;
        let lastFoodNumber2 = foodNumber;
        foodNumber2 = (Math.floor(Math.random() * foodArray2.length));
        if (foodNumber2 == lastFoodNumber2 && foodNumber2 > 0) {
            foodNumber2 = foodNumber2 - 1;
        }
        if (foodNumber2 == lastFoodNumber2 && foodNumber2 == 0) {
            foodNumber2 = foodNumber2 + 1;
        }
        $('#moreFood').append("<img class='food' id='" + foodArray2[foodNumber2].id + "' src=" + foodArray2[foodNumber2].src + "></img> ");
        timer2 = (Math.round(Math.random() * timerSpeed2)) + 1;
        timerSpeed2 > 5 ? timerSpeed2-- : timerSpeed2 = timerSpeed2;
        if(catchedFood == 40) {
            fastFood();
        } 
    }
    appendMoreFood();
    function moveMoreFood() {
        $('#moreFood' + foodNumber2 + '').css({ 'top': foodArray2[foodNumber2].x, 'left': foodArray2[foodNumber2].y });
        
        if (foodArray2[foodNumber2].x < screen.height - 209) {
             foodArray2[foodNumber2].x = foodArray2[foodNumber2].x += moveSpeed2
         } else {
              foodArray2[foodNumber2].x = 0;
              foodArray2[foodNumber2].y = Math.round(Math.random() * (screen.width - 50));
         }

        if ((height1 - foodArray2[foodNumber2].x) < screen.width * (0.09 + grows / 2) && (foodArray2[foodNumber2].x - height1) < screen.width * 0.13 && (width1 - foodArray2[foodNumber2].y) < screen.width * (0.10 + grows / 2) && (foodArray2[foodNumber2].y - width1) < screen.width * (0.12 + grows / 2)) {
            if (foodNumber2 != 13) {
                catchedFood++;
                // $('#food' + j + '').addClass('hide');
                $('#moreFood' + foodNumber2 + '').detach();
                $('#countCatchedFood').html('<h1>' + catchedFood + '</h1>');
            } else {
                missedAndPoisonedFood ++;
                $('#moreFood' + foodNumber2 + '').detach();
                $('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
            }
            foodArray2[foodNumber2].x = 0;
            foodArray2[foodNumber2].y = Math.round(Math.random() * (screen.width - 50));
            appendMoreFood();
        }
        if (screen.height - foodArray2[foodNumber2].x < 210) {
            if (foodNumber2 != 13) {
                $('#moreFood' + foodNumber2 + '').detach();
                missedAndPoisonedFood++;
                $('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
            } else {
                $('#moreFood' + foodNumber2 + '').detach();
            }
            foodArray2[foodNumber2].y = Math.round(Math.random() * (screen.width - 50));
            appendMoreFood();

        }

        setTimeout(moveMoreFood, timer2);
    }
    moveMoreFood();
}







let foodArray3 = [
    {
        src: 'images/food0.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood0'
    },
    {
        src: 'images/food1.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood1'
    },
    {
        src: 'images/food2.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood2'
    },
    {
        src: 'images/food3.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood3'
    },
    {
        src: 'images/food4.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood4'
    },
    {
        src: 'images/food5.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood5'
    },
    {
        src: 'images/food6.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood6'
    },
    {
        src: 'images/food7.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood7'
    },
    {
        src: 'images/food8.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood8'
    },
    {
        src: 'images/food9.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood9'
    },
    {
        src: 'images/food10.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood10'
    },
    {
        src: 'images/food11.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood11'
    },
    {
        src: 'images/food12.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood12'
    },
    {
        src: 'images/food13.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'ExtraFood13'
    },
];

let moveSpeed3 = 1;
let foodNumber3;
let timer3;
let timerSpeed3 = 10;
function ExtraFood() {
    
    function appendExtraFood() {
        mochaHeight += 0.02;
        grows = (mochaHeight - 15) / 100;
        let lastFoodNumber3 = foodNumber;
        foodNumber3 = (Math.floor(Math.random() * foodArray3.length));
        if (foodNumber3 == lastFoodNumber3 && foodNumber3 > 0) {
            foodNumber3 = foodNumber3 - 1;
        }
        if (foodNumber3 == lastFoodNumber3 && foodNumber3 == 0) {
            foodNumber3 = foodNumber3 + 1;
        }
        $('#ExtraFood').append("<img class='food' id='" + foodArray3[foodNumber3].id + "' src=" + foodArray3[foodNumber3].src + "></img> ");
        timer3 = (Math.floor(Math.random() * timerSpeed3)) + 5;
        timerSpeed3 > 5 ? timerSpeed3-- : timerSpeed3 = timerSpeed3;
        if(catchedFood == 16) {
            moreFood();
        } if(catchedFood == 40) {
            fastFood();
        } 

    }
    appendExtraFood();
    function moveExtraFood() {
        $('#ExtraFood' + foodNumber3 + '').css({ 'top': foodArray3[foodNumber3].x, 'left': foodArray3[foodNumber3].y });
        
       if (foodArray3[foodNumber3].x < screen.height - 209) {
            foodArray3[foodNumber3].x = foodArray3[foodNumber3].x += moveSpeed3 
        } else { 
            foodArray3[foodNumber3].x = 0;
            foodArray3[foodNumber3].y = Math.round(Math.random() * (screen.width - 50));
        }
 

        if ((height1 - foodArray3[foodNumber3].x) < screen.width * (0.09 + grows / 2) && (foodArray3[foodNumber3].x - height1) < screen.width * 0.13 && (width1 - foodArray3[foodNumber3].y) < screen.width * (0.10 + grows / 2) && (foodArray3[foodNumber3].y - width1) < screen.width * (0.12 + grows / 2)) {
            if (foodNumber3 != 13) {
                catchedFood++;
                // $('#food' + j + '').addClass('hide');
                $('#ExtraFood' + foodNumber3 + '').detach();
                $('#countCatchedFood').html('<h1>' + catchedFood + '</h1>');
            } else {
                missedAndPoisonedFood ++;
                $('#ExtraFood' + foodNumber3 + '').detach();
                $('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
            }
            foodArray3[foodNumber3].x = 0;
            foodArray3[foodNumber3].y = Math.round(Math.random() * (screen.width - 50));
            appendExtraFood();
        }
        if (screen.height - foodArray3[foodNumber3].x < 210) {
            if (foodNumber3 != 13) {
                $('#ExtraFood' + foodNumber3 + '').detach();
                missedAndPoisonedFood++;
                $('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
            } else {
                $('#ExtraFood' + foodNumber3 + '').detach();
            }
            foodArray3[foodNumber3].y = Math.round(Math.random() * (screen.width - 50));
            appendExtraFood();

        }

        setTimeout(moveExtraFood, timer3);
    }
    moveExtraFood();
}
ExtraFood();











let foodArray4 = [
    {
        src: 'images/food0.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood0'
    },
    {
        src: 'images/food1.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood1'
    },
    {
        src: 'images/food2.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood2'
    },
    {
        src: 'images/food3.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood3'
    },
    {
        src: 'images/food4.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood4'
    },
    {
        src: 'images/food5.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood5'
    },
    {
        src: 'images/food6.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood6'
    },
    {
        src: 'images/food7.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood7'
    },
    {
        src: 'images/food8.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood8'
    },
    {
        src: 'images/food9.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood9'
    },
    {
        src: 'images/food10.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood10'
    },
    {
        src: 'images/food11.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood11'
    },
    {
        src: 'images/food12.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood12'
    },
    {
        src: 'images/food13.png',
        x: 0,
        y: Math.round(Math.random() * (screen.width - 50)),
        id: 'fastFood13'
    },
];

let moveSpeed4 = 2;
let foodNumber4;
let timer4;
let timerSpeed4 = 13;
function fastFood() {
    
    function appendFastFood() {
        mochaHeight += 0.02;
        grows = (mochaHeight - 15) / 100;
        let lastfoodNumber4 = foodNumber;
        foodNumber4 = (Math.floor(Math.random() * foodArray4.length));
        if (foodNumber4 == lastfoodNumber4 && foodNumber4 > 0) {
            foodNumber4 = foodNumber4 - 1;
        }
        if (foodNumber4 == lastfoodNumber4 && foodNumber4 == 0) {
            foodNumber4 = foodNumber4 + 1;
        }
        $('#fastFood').append("<img class='food' id='" + foodArray4[foodNumber4].id + "' src=" + foodArray4[foodNumber4].src + "></img> ");
        timer4 = (Math.floor(Math.random() * timerSpeed4)) + 5;
        timerSpeed4 > 5 ? timerSpeed4-- : timerSpeed4 = timerSpeed4;
        if(catchedFood == 16) {
            moreFood();
        } 
    }
    appendFastFood();
    function moveFastFood() {
        $('#fastFood' + foodNumber4 + '').css({ 'top': foodArray4[foodNumber4].x, 'left': foodArray4[foodNumber4].y });
        
        if (foodArray4[foodNumber4].x < screen.height - 209) {
             foodArray4[foodNumber4].x = foodArray4[foodNumber4].x += moveSpeed4 
         } else {
              foodArray4[foodNumber4].x = 0;
              foodArray4[foodNumber4].y = Math.round(Math.random() * (screen.width - 50));
         }
        if ((height1 - foodArray4[foodNumber4].x) < screen.width * (0.09 + grows / 2) && (foodArray4[foodNumber4].x - height1) < screen.width * 0.13 && (width1 - foodArray4[foodNumber4].y) < screen.width * (0.10 + grows / 2) && (foodArray4[foodNumber4].y - width1) < screen.width * (0.12 + grows / 2)) {
            if (foodNumber4 != 13) {
                catchedFood++;
                // $('#food' + j + '').addClass('hide');
                $('#fastFood' + foodNumber4 + '').detach();
                $('#countCatchedFood').html('<h1>' + catchedFood + '</h1>');
            } else {
                missedAndPoisonedFood ++;
                $('#fastFood' + foodNumber4 + '').detach();
                $('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
            }
            foodArray4[foodNumber4].x = 0;
            foodArray4[foodNumber4].y = Math.round(Math.random() * (screen.width - 50));
            appendFastFood();
        }
        if (screen.height - foodArray4[foodNumber4].x < 210) {
            if (foodNumber4 != 13) {
                $('#fastFood' + foodNumber4 + '').detach();
                missedAndPoisonedFood++;
                $('#countMissedFood').html('<h1>' + missedAndPoisonedFood + '</h1>');
            } else {
                $('#fastFood' + foodNumber4 + '').detach();
            }
            foodArray4[foodNumber4].y = Math.round(Math.random() * (screen.width - 50));
            appendFastFood();

        }

        setTimeout(moveFastFood, timer4);
    }
    moveFastFood();
}

}


