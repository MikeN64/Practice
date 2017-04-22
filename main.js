//var database = firebase.database();

$(document).ready(function(){
    animateIMG();

});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];    

}

function animateIMG(){
    var newq = makeNewPosition();
    $("#cake").animate({ top: newq[0], left: newq[1] }, function(){
      animateIMG();        
    });
    $("#cake2").animate({ top: newq[0], right: newq[1] }, function(){
      animateIMG();        
    });

};

function tweet(){
    var name = $("#name").val();
    var confession =$("confession").val();
}