var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};
