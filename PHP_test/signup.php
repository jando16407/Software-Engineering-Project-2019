<!DOCTYPE html>
<html>
<head>
<title>Sign up!</title>
</head>

<body>
    <h1>
        Sign Up
    </h1>
    <p>
        <label for="name"><b>Full Name</b></label><br>
        <input type="text" placeholder="Enter Full Name" name="name" required>
        <br>
        <label for="email"><b>Email</b></label><br>
        <input type="text" placeholder="Enter Email" name="email" required>
        <br>
        <label for="psw"><b>Password</b></label><br>
        <input type="password" placeholder="Enter Password" name="psw" required>
        <br>
        <label for="psw-repeat"><b>Repeat Password</b></label><br>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
        <br>
        <label>
            <input id="isAdmin" type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Admin?
        </label><br>
        <label id="secNum" for="sectionNum"><b>Section Number</b></label><br>
        <input id="secNumInput" type="text" placeholder="Enter Section Number" name="sectionNum" required><br>
        <button>Sign Up</button>
    </p>
    <p>
    
        echo <<< EOM
        <script>
            var sectionNum = document.getElementById("secNum");
            var sectionNumInput = document.getElementById("secNumInput");
            var isAdmin = document.getElementById("isAdmin");
            sectionNum.style.visibility = 'hidden';
            sectionNumInput.style.visibility = 'hidden';
            isAdmin.onclick = function(){
                if(isAdmin.checked == false){
                sectionNum.style.visibility = 'visible';
                sectionNumInput.style.visibility = 'visible';
                }
                else{
                sectionNum.style.visibility = 'hidden';
                sectionNumInput.style.visibility = 'hidden';
                }
            }
        </script>
    EOM;
    
    </p>
</body>
</html>