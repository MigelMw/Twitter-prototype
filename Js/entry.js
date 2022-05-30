//signing in existing user
document.getElementById("Signin").onclick = function(){

    //data from user input
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email,password).then((userCred)=>{
        //redirecting to home page after signing in
        window.location.href ="home.html";
        // error message according to error done
    }).catch((error)=>{
        let mess = error.message;
        alert(mess)
    })
}