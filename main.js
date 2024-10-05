let demo = document.getElementById("demo");
let btn1 = document.getElementById("btn");
let zeyad = document.getElementById("zeyad");
let botn = document.getElementById("botn");
let pra = document.getElementById("pra");
btn1.onclick = function(){
let year = document.getElementById("year").value;
let Month = document.getElementById("Month").value;
let day = document.getElementById("day").value;
  if(year=="" || Month=="" || day =="" ){
    zeyad.style.display="block";
    botn.onclick = function(){
    zeyad.style.display="none";
    }
  }
  else{
    let num = 2024 - year;
    let num1 = 12 - Month;
    let num2 = 30 - day;
    document.getElementById("demo").textContent = 'عمرك الان'+" "+num;
    document.getElementById("demo1").textContent = ' عمرك بالشهور'+" "+num1;
    document.getElementById("demo2").textContent = ' عمرك بالايام'+ " "+num2;
    document.getElementById("year").value  = "";
    document.getElementById("Month").value  = "";
    document.getElementById("day").value  = "";
    pra.style.display = "block";
  }
} 