function valusr()
{
    let un = document.getElementById("username").value;
    let pw = document.getElementById("password").value;

    if(un == "admin" && pw == "123")
    {
        alert("Login successfully..!");
        return true;
    }

    else if(un != "admin")
    {
        alert("Invalid Username");
        return false;
    }

    else if(pw != "123")
    {
        alert("Invalid Password");
        return false;
    }

    else
    {
        return true;
    }

}