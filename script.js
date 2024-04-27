//getting elements
document.addEventListener("DOMContentLoaded", function() {

    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");

    b1.classList.remove("animate");
    b2.classList.remove("animate");
    b3.classList.remove("animate");
    b4.classList.remove("animate");
    //getting their heights
    //only need to check two since b1b2 are two different rows. b1-b3 and b2-b4 are in the same row
    var b1_height = b1.clientHeight; 
    var b2_height = b2.clientHeight; 
    //adding event listener for scroll action to call function "animate"
    document.addEventListener('scroll', animate);

    let viewStatus = [0, 0];
    console.log(viewStatus);

    //function to check if elements are in view
    function inView(){
        //get window height
        var windowHeight = window.innerHeight; 
        //get number of pixels that the document is scrolled; 
        var scrollY = window.scrollY || window.pageYOffset; 

        //get current scroll position 
        var scrollPosition = scrollY + windowHeight; 
        //get element position
        var r1_pos = b1.getBoundingClientRect().top + scrollY + b1_height; 
        var r2_pos = b2.getBoundingClientRect().top + scrollY + b2_height; 
        
        if (scrollPosition > r1_pos){
            viewStatus[0] = 1
        } else 
            viewStatus[0] = 0; 
        if (scrollPosition > r2_pos){
            viewStatus[1] = 1
        } else 
            viewStatus[1] = 0; 
    }

    function animate(){
        console.log(viewStatus);
        inView();
        if (viewStatus[0]){
            b1.classList.add('animate1'); 
            b3.classList.add('animate2'); 
        }
        if (viewStatus[1]){
            b2.classList.add('animate1'); 
            b4.classList.add('animate2'); 
        }
    }

});




