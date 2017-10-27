// JavaScript source code
function nameValidation() {
    debugger;
    var first_Name, last_Name;

    first_Name = document.getElementById("user").value;

    last_Name = document.getElementById("user_last").value;
    debugger;

    if (isNaN(first_Name) && first_Name != ""){
        debugger;
        return true;
    }

    else {
        debugger;
        document.getElementById("user").focus();
        document.getElementById("user").value = "";       
        alert("Enter a valid first name.");
        return false;
    }

    if (last_Name != "" && isNaN(last_Name)) {
        return true;
    }
    else{
        document.getElementById("user_last").focus();
        document.getElementById("user_last").value = "";
        alert("Enter a valid last name.");
        return false;
         }
    }

function emailValidation() {
    var email_Address;

    email_Address = document.getElementById("user_email").value;

    if (isNaN(email_Address) && email_Address != "")
        return true;

    else {
        alert("Enter a valid email address.")
        return false;
        }
}

function commentValidation() {
    var user_comments;

    user_comments = document.getElementById("comment").value;

    if (user_comments == ""){
        alert("Please enter input into the comments section.");
        return false;
    }
    else
        return true;
}

