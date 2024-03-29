//inp_as is input array size
var inp_as = document.getElementById('a_size');
var array_size = inp_as.value;
//button data 
var inp_gen = document.getElementById('a_generate');
//input speed of the array
var inp_aspeed = document.getElementById('a_speed');
//var array_speed=document.getElementById('a_speed').value;

//node list of all sorting buttons
var algo_btns = document.querySelectorAll(".sorting-btn button");

var div_sizes=[];
var divs=[];
var margin_size;
var array_container = document.getElementById('array_container');
array_container.style="flex-direction:row; gap:0.2%";

//array generation and updation.
inp_gen.addEventListener('click', generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array(){
    array_container.innerHTML="";
    for(let i=0; i< array_size; i++){
        div_sizes[i]=Math.floor(Math.random()*2.7*(inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        array_container.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style="margin-left: " + margin_size+ "%; background-color:#71ADB5; width:" + (100/array_size-(1*margin_size))+"% ; height:"+ (div_sizes[i] + 30 ) + "px;";
    }
}

function update_array_size(){
    array_size = inp_as.value;
    generate_array();
}
//when window refresh update array size and generate new array container
window.onload=update_array_size();

//Running the appropriate algorithm on click of sorting buttons.
for(var i= 0; i<algo_btns.length; i++){
    algo_btns[i].addEventListener("click",runalgo);
}

//function is used to disable all buttons on the page
function disable_buttons(){
    for(var i=0;i < algo_btns.length; i++){

       /*These two lines of code remove existing classes from the i-th element of butts_algos and then add the class "butt_locked" to it, essentially styling or marking it as locked or inactive for further interaction.*/
        algo_btns[i].classList=[];
        algo_btns[i].classList.add("button_locked");

        algo_btns[i].disabled=true;
        inp_as.disabled= true;
        inp_gen.disabled= true;
        inp_aspeed.disabled=true;
    }
}
function runalgo(){
     // Get the elements with the classes time_complexities and space_complexity
     var timeComplexityDiv = document.getElementsByClassName("time_complexities")[0];
     var spaceComplexityDiv = document.getElementsByClassName("space_complexity")[0];
     
     // Set their opacity to 1 to make them visible
     timeComplexityDiv.style.opacity = "1";
     spaceComplexityDiv.style.opacity = "1";
    disable_buttons();
    
    this.classList.add("button_selected");
    switch(this.innerHTML){
        case "Bubble Sort": Bubble();
        break;
        case "Selection Sort": Selection_Sort();
        break;
        case "Insertion Sort": Insertion();
        break;
        case "Quick Sort": Quick();
        break;
        case "Merge Sort": Merge();
        break;
        case "Heap Sort": Heap();
        break;
    }
}