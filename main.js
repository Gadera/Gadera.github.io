let id=(id) =>
document.getElementById(id);

let classes = (classes) =>
document.getElementsByClassName(classes);

let fname = id("fname"),
    lname = id("lname"),
    email = id("email"),
    password = id("password"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    engine(fname, 0, "First Name cannot be empty");
    engine(lname, 1, "Last Name cannot be empty");
    engine(email, 2, "Looks like this is not an email");
    engine(password, 3, "Password cannot be empty");
});


let engine = (id, serial, message) => {

    if (id.value.trim() === ""){
    }
    else{
    }

    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
    }
    else{
        errorMsg[serial].innerHTML = "";
    }

    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid hsl(0, 100%, 74%)";

        //icons
        failureIcon[serial].style.opacity =
        "1";
        successIcon[serial].style.opacity = 
        "0";
    }
    else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid hsl(154, 59%, 51%)";

        //icons
        failureIcon[serial].style.opacity =
        "0";
        successIcon[serial].style.opacity =
        "1";
    }
}

