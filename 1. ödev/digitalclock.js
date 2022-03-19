let userName = prompt("Lütfen adınızı giriniz.");

    if((userName != "") && (userName != null)) {
        document.getElementById("myName").innerHTML=userName.toUpperCase();   
}
   else if(userName == "") 
    alert("Boş giriş yaptınız!");   
   else if(userName == null) 
    alert("Giriş yapmaktan vazgeçtiniz!");
   function dateClock(){
      let day= new Date().toLocaleString();
      document.getElementById("myClock").innerHTML=day;
   }
   setInterval(dateClock,1000);