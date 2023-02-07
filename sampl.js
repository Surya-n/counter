var i = 0;
    function inc() {
        document.getElementById('counter').value = ++i;
    }
    function dec() {
        document.getElementById('counter').value = --i;
    }
    function reset() {
        var i=0;
        document.getElementById('counter').value = i;
    }