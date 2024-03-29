//We only have to change background-color and height of the sorting element.
/*This line calculates the delay time for visualizing sorting algorithms based on the user-selected speed. It adjusts the delay inversely proportional to the size of the array being sorted and directly proportional to the chosen speed level. By dividing the array size by 10 and multiplying it by the speed factor, it ensures that larger arrays have longer delays for visualization. The resulting delay time is used in the visualization loop to control the speed of the sorting animation.*/
var speed = 1000;
inp_aspeed.addEventListener("input",vis_speed);

function vis_speed(){
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed)){
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    delay_time=10000/(Math.floor(array_size/10)*speed); //Decrease numerator to increase speed.
}
var delay_time=10000/(Math.floor(array_size/10)*speed); //Decrease numerator to increase speed.

var c_delay=0; //This updated on every div change so that visualization is visible.

function div_update(array_container,height,color){
    window.setTimeout(function(){
        array_container.style="margin:0%" + margin_size + "%; width:" + (100/array_size-(1*margin_size))+"% ; height:"+ (height) + "px; background-color:" + color + ";";
    },c_delay+=delay_time);
}

//enable buttons when the sorting time is completed and array is sorted.
function enable_buttons(){
    window.setTimeout(function(){
        for(var i=0;i<algo_btns.length; i++){
            
            algo_btns[i].classList=[];
            algo_btns[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
       
        }
    },c_delay+=delay_time);
}