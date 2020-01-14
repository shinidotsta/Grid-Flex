const button=document.getElementById("btn");
const main=document.querySelector(".main-container");
var bxval=document.querySelector(".box1").innerHTML;


var nwval=parseInt(bxval);
console.log(nwval);

//function
var clickHandler=function()
{
    
    let template=`<div class="box1" style="background-color:grey;">${nwval+1}</div>`;
    
    //template.style.color=green;
    
    var newDiv=document.createElement("div");
    var newText=document.createTextNode("welcome");
    newDiv.appendChild(newText);
    main.innerHTML+=template;
    nwval=nwval+1;
   // button.appendChild(newDiv);
   // document.body.insertBefore(newDiv,button);
   
}




//event calls
button.onclick=clickHandler;