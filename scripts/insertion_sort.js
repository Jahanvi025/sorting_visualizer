function Insertion(){
    //Setting time complexities
    document.getElementById("Time_Worst_case").innerText="O(n²)";
    document.getElementById("Time_Average_case").innerText="Θ(n²)";
    document.getElementById("Time_Best_case").innerText="Ω(n)";

    //Setting Space complexity
    document.getElementById("Space_Worst_case").innerText="O(1)";
    document.getElementById("Space_Average_case").innerText= "O(1)";
    document.getElementById("Space_Best_case").innerText= "O(1)";

    c_delay=0;
    for(var j=1;j<array_size;j++){
        div_update(divs[j],div_sizes[j],"yellow"); //color update

        var key=div_sizes[j];
        var i=j-1;
        while(i>= 0 && div_sizes[i] > key)
        {
            div_update(divs[i],div_sizes[i], "red");//color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update

            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i--;
        }
        div_sizes[i+1]=key;
        
        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    //enable buttons to work after sorting
    enable_buttons();
}