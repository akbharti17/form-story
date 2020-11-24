function getData() {
   var animal=document.getElementById("animal").value;
   var animal2=document.getElementById("animal2").value;
   var animal3=document.getElementById("animal3").value;
   var adj=document.getElementById("adj").value;
   var verb=document.getElementById("verb").value;
   var num=document.getElementById("number").value;
   var mvtq=document.getElementById("mvtq").value;
   var moral=document.getElementById("moral").value;
   var speed= document.getElementById("relative_speed").value; 
   




   localStorage.setItem("txt1",animal);
   localStorage.setItem("txt2",animal2);
   localStorage.setItem("txt3",animal3);
   localStorage.setItem("txt4",adj);
   localStorage.setItem("txt5",verb);
   localStorage.setItem("txt6",num);
   localStorage.setItem("txt7",mvtq);
   localStorage.setItem("txt8",moral);
   localStorage.setItem("SP", speed);
  

}
function ans(a)
{
  localStorage.setItem("answer",a);
}

function loadData(){
    var i,j,k;
    for(i=0;i<6;i++){
        document.getElementsByClassName("text1")[i].innerHTML=localStorage.getItem("txt1");
    }
    for(j=0;j<10;j++){
        document.getElementsByClassName("text2")[j].innerHTML=localStorage.getItem("txt2");
    }
    for(k=0;k<3;k++){
        document.getElementsByClassName("text5")[k].innerHTML=localStorage.getItem("txt5");
    }
    document.getElementById("text3").innerHTML=localStorage.getItem("txt3");
    document.getElementById("text4").innerHTML=localStorage.getItem("txt4");
    document.getElementById("num").innerHTML=localStorage.getItem("txt6");
    document.getElementById("ans").innerHTML=localStorage.getItem("answer");
    document.getElementById("mqt").innerHTML=localStorage.getItem("txt7");
    document.getElementById("moral").innerHTML=localStorage.getItem("txt8");
    document.getElementById("spd").innerHTML=localStorage.getItem("SP");
}