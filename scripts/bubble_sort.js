function Bubble(){
    //first setting time complexities
    document.getElementById("Time_Worst_case").innerText="O(n²)";
    document.getElementById("Time_Average_case").innerText="θ(n²)";
    document.getElementById("Time_Best_case").innerText="Ω(n)";
    
    //setting space complexities
    document.getElementById("Space_Worst_case").innerText= "O(1)";
    document.getElementById("Space_Average_case").innerText= "O(1)";
    document.getElementById("Space_Best_case").innerText= "O(1)";
     
    c_delay=0;
    
    for(var i = 0;i< array_size -1; i++){
        for(var j =0; j<array_size-i-1; j++){
            //compare elements
            div_update(divs[j],div_sizes[j],"yellow");//color update
            div_update(divs[j+1],div_sizes[j+1],"yellow");
            if(div_sizes[j]>div_sizes[j+1]){
                //swap elements or div
                div_update(divs[j],div_sizes[j],"red");//color update
                div_update(divs[j+1],div_sizes[j+1],"red");

                var temp = div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                
                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color update
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update
    
    enable_buttons();
}