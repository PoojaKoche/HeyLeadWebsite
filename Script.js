// Readmore buttons in latest blog JavaScript
function readMore(){
    let dots=document.getElementById("dots");
    let moreText=document.getElementById("more");
    if(dots.style.display==="none")
    {
        dots.style.display="inline";
        moreText.style.display="none";
    }
    else{
        dots.style.display="none";
        moreText.style.display="inline";
    }
}

function readMore1(){
    let dots=document.getElementById("dots1");
    let moreText=document.getElementById("more1");
        if(dots.style.display==="none")
    {
        dots.style.display="inline";
        moreText.style.display="none";
    }
    else{
        dots.style.display="none";
        moreText.style.display="inline";
    }
}

function readMore2(){
    let dots=document.getElementById("dots2");
    let moreText=document.getElementById("more2");
    if(dots.style.display==="none")
    {
        dots.style.display="inline";
        moreText.style.display="none";
    }
    else{
        dots.style.display="none";
        moreText.style.display="inline";
    }
}

//Subscibe button pop up message
function subscribe(){
    alert("You have subscribed our newspaper, you will get daily update about  us, Thank You!");
}
//log in form pop up
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  