    var t;
    window.onload = function() {resetTimer()};
    window.onmousemove =function() {resetTimer()};
    window.onkeypress = function() {resetTimer1()};

function logout() {
         window.location.href ="../../logout.html"
    }
    function resetTimer(){
     clearTimeout(t);
     t = setTimeout(function(){logout();}, 3000000);
    }