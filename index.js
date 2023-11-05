function display(i){
    document.getElementById("res").value +=i;
}
function reset(){
    document.getElementById("res").value="";
}
function cal(){
    let x=document.getElementById("res").value;
    if(x.endsWith("+") || x.endsWith("/") ||x.endsWith("*") ||x.endsWith("-") ){
        alert("Invalid Format");
    }else if(x===""){
        document.getElementById("res").value=""
    }else{
        document.getElementById("res").value=eval(x);
    }
    
    
}
function del(){
    let x= document.getElementById("res").value;
    let l=x.length;
    document.getElementById("res").value=x.slice(0,l-1);
}