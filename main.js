
document.querySelector('#push').onclick = function () {
    if (document.querySelector("input").value.length == 0) {
        alert("please add the first task");
    } else {

        document.querySelector(".tasks").innerHTML += `
        <li class="list-item">
          <input type="checkbox" id="myCheck" onclick="myCheck()">
         <span class="hid"> ${document.querySelector("input").value }</span> 
        
        </li>
        
        `
    }
  
    myCheck();

}
function myCheck() {
        //console.log( document.querySelectorAll("li") );
        for(let i=0;i< (document.querySelectorAll("li")).length ;i++){
            console.log( (document.querySelectorAll("#myCheck"))[i].checked);

            let temp = (document.querySelectorAll("#myCheck"))[i].checked;
 
            if (temp == true) {
                console.log("checked one");
                (document.querySelectorAll(".hid"))[i].classList.add("checked");
        
            }
            else if(temp == false){
                console.log("UNchecked one");
                                (document.querySelectorAll(".hid"))[i].classList.remove("checked");

                //document.querySelector(".hid").classList.remove("checked");
            }
        }



}
function myFunction() {
    let temp = document.getElementById("myCheck").checked;
    console.log(`temp ${temp} `);
    //console.log( document.querySelectorAll("#myCheck") );
    console.log("*******************");
    if (temp == true) {
        console.log("checked one");
        document.querySelector(".hid ").classList.add("checked");

    }
    else if(temp == false){
        console.log("UNchecked one");
        document.querySelector(".hid").classList.remove("checked");
    }

}