function likeCounter(){
    let element = document.getElementById("increment-text");
    let value = parseInt(element.innerHTML);
    ++ value;
    document.getElementById("increment-text").innerHTML=value;

    }
