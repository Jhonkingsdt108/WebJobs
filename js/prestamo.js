
function gen_table(){

    
    let n=Number(document.getElementById("capital").value);
    let a = 5;
    let b = 7;
    let c = 10;
    let p =100

    
    document.getElementById("t1").innerHTML=(n*(a/p)).toFixed(0);
    document.getElementById("t2").innerHTML=(n*(b/p)).toFixed(0);
    document.getElementById("t3").innerHTML=(n*(c/p)).toFixed(0);

} 