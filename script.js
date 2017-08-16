'use strict';
$('#search').keyup(function() {
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");
    $.getJSON('jason.json', function (data) {
        var output = '<ul>';
        $.each(data, function (key, val) {
            if (val.brand.search(myExp) != -1) {
                output += '<li>';
                output += '<h2>' + val.model + '</h2>';
                //output += '<img src="images/' + val.url + "alt=" + val.model +"/>";
                output += `<img src="image/${val.url}" alt= '${val.model}'/>`;
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    });
});



//var request;
//if(window.XMLHttpRequest){
//    request = new XMLHttpRequest();
//} else{
//    request = new ActiveXObject("Microsoft.XMLHTTP");
//}
//request.open('Get', 'data.json');
//request.onreadystatechange = function(){
//    if((request.readyState===4)&&(request.status===200)){
//        var items = JSON.parse(request.responseText);
//        var output = '<ul>';
//        for(var key in items){
//            output += '<li>' + items[key].shortname + '</li>';
//        }
//        output += '</ul>';
//        console.log((output));
//    }
//}

//$.getJSON('data.json', function(data){
//    var output = '<ul>';
//    $.each(data, function(key, val){
//        output +='<li>' + val.name + '</li>';
//    });
//    output += '</ul>';
//    console.log((output));
//    $('#update').prepend(output);
//})

