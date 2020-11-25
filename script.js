function calculator(){
    var x =parseInt(document.getElementById("num1").value);
    var y =parseInt(document.getElementById("num2").value);


    var opt = document.getElementById("options").value;

    if(opt === "+" ){
    document.getElementById("result").value=x+y;
    }
    else if(opt === "-" ){
    document.getElementById("result").value=x-y;
    }
    else if(opt === "*" ){
    document.getElementById("result").value=x*y;
    }
    else if(opt === "/" ){
    document.getElementById("result").value=x/y;
    }
    else{
        document.getElementById("result").value="Worng Number";
    }

}