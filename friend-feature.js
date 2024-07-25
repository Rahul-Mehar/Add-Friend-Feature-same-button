var istatus=document.querySelector("h5")

var btn = document.querySelector("#add")

var check = 0

// var removefriend = document.querySelector("#remove")




btn.addEventListener("click", function(){
    if (check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color="green"
        btn.innerHTML="Remove Friend"
        // document.getElementById('add').style.color = 'green';
        // document.getElementById('add').style.width = '130px';
        // document.getElementById('add').style.height = '50px';
        // console.log("hui hui hui")
        check = 1 
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color="Red"
        btn.innerHTML = "Add Friend"
        // document.getElementById('add').style.color = 'Red';
        // document.getElementById('add').style.width = '100px';
        // document.getElementById('add').style.height = '50px';
        // console.log("hui hui hui")
        check = 0

    }

})

// removefriend.addEventListener("click", function(){
// istatus.innerHTML = "Stranger"
// istatus.style.color = 'red'

// })