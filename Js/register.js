//signing up user
document.getElementById("Signup").onclick = function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;

    //collecting user credentials in firebase
    firebase.auth().createUserWithEmailAndPassword(email,password).then((userCred)=>{
        
        console.log(email,password)
        //using sign up data to redirect new user to home page
        window.location.href = "home.html";
        // error message according to error done
    }).catch((error)=>{
        let mess = error.message;
        alert(mess)
    })

   
    
}
