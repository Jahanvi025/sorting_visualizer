function Merge() {
    // Setting Time complexities
    document.getElementById("Time_Worst_case").innerText = "O(n logn)";
    document.getElementById("Time_Average_case").innerText = "Θ(n logn)";
    document.getElementById("Time_Best_case").innerText = "Ω(n logn)";

    // Setting Space complexity
    document.getElementById("Space_Worst_case").innerText = "O(n)";
    document.getElementById("Space_Average_case").innerText = "O(n)";
    document.getElementById("Space_Best_case").innerText = "O(n)";

    c_delay = 0;
    // 0 = start && array_size-1 = end
    merge_partition(0, array_size - 1);
    enable_buttons();
}

function merge_sort(start, mid, end) {
    var p = start, q = mid + 1;
    var temp = [],
        k = 0;

    while (p <= mid && q <= end) {
        if (div_sizes[p] < div_sizes[q]) {
            temp[k++] = div_sizes[p];
            div_update(divs[p], div_sizes[p], "red"); // Color update
            p++;
        } else {
            temp[k++] = div_sizes[q];
            div_update(divs[q], div_sizes[q], "red"); // Color update
            q++;
        }
    }

    while (p <= mid) {
        temp[k++] = div_sizes[p];
        div_update(divs[p], div_sizes[p], "red"); // Color update
        p++;
    }

    while (q <= end) {
        temp[k++] = div_sizes[q];
        div_update(divs[q], div_sizes[q], "red"); // Color update
        q++;
    }

    k = 0;
    for (var i = start; i <= end; i++) {
        div_sizes[i] = temp[k++];
        div_update(divs[i], div_sizes[i], "green"); // Color update
    }
}

function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow"); // Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}
