count=0
$(document).ready(function(){
    $("#myModal").modal('show');
    $(".fa-bell").click(function(){
        $("#myModal").modal('show');
    });
});
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  function openclose1(){
    if(count==0||count==2)
    {
        openNav();
        count=1
        $(document).ready(function(){
            $(".staffcon").show("1000")
            $(".lettersamp").hide("1000");
            });
    }
    else
    {
        closeNav();
        count=0;
    }
  }
  function openclose2(){
    if(count==0||count==1)
    {
        openNav();
        count=2
        $(document).ready(function(){
            $(".staffcon").hide("1000")
            $(".lettersamp").show("1000");
            });
    }
    else
    {
        closeNav();
        count=0;
    }
  }