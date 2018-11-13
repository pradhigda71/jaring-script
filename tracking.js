$(document).ready(function(){
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var q = getUrlParameter('q');
    var url = "http://jala.ai/new-jaring/tracking/" ;

    if(typeof q != 'undefined'){
        var data = {
        'query' : q
        }

        $.ajax({
            type: "POST",
            dataType: 'json',
            url: url,
            data: data,
            success: function (data) {
                //window.location.href= data.redirect
                $('#source').val(data.unique_code);
                /*$('select[name=city]').html(data.htmlCity)*/
                //console.log(data);
            }
        });

    }
});
