

// window.onload=function() {
//   // Month,Day,Year,Hour,Minute,Second
//   upTime('jan,01,1914,00:00:00');
// };

function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);
  days=Math.floor(difference/(60*60*1000*24)*1);
  years = Math.floor(days / 365);
  if (years > 1){ days = days - (years * 365)}
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
  document.getElementById('years').firstChild.nodeValue = years;
  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
};

$(".bars-cell").click(function(){
  $(".navbar").slideToggle();
  $(".dropdown").css("display", "none");

});

$("ul li").click(function(){
  $("ul ul").slideUp();
  $(this).find("ul").slideToggle();

});

$(window).resize(function(){
  if($(window).width() > 768){
    $("ul").removeAttr("style");
  }

});

window.onload=function() {
    // $("#hiring-object").slideUp(3300);
    // $("#walk-in-object").slideUp(3600);
    // $("#mailing-object").slideUp(3900);
    // // $(".opening-reveal").show();
    // $(".opening-slide-up").slideDown(4600);
    // $("#hiring-object").slideDown();
    // $("#walk-in-object").slideDown();
    // $("#mailing-object").slideDown();
    // $("#.opening-reveal").show().slideDown(4000);
    // $(".opening-slide-up").show();

    // Month,Day,Year,Hour,Minute,Second
    upTime('jan,01,1914,00:00:00');
  };


  // window.onload=function() {
  //   // Month,Day,Year,Hour,Minute,Second
  //   upTime('jan,01,1914,00:00:00');
  // };

  document.getElementById('search').onsubmit = function() {
        window.location = 'http://www.google.com/search?q=site:rinellaproduce.com ' + document.getElementById('textSearch').value;
        return false;
    }
