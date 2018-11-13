$(document).ready(function () {
    
    // process the form
    $('form').submit(function (event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name': $('input[name=name]').val(),
            'address': $('input[name=address]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=phone]').val(),
            'city': $('select[name=city]').val(),
            'gender': $('select[name=gender]').val(),
            'source': $('input[name=source]').val(),
            'product': $('select[name=product]').val(),
            'company': $('input[name=company]').val(),

        };

        console.log(formData);

        // process the form
        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'http://jala.ai/new-jaring/api/getLead/', // the url where we want to POST
            data: formData, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true
        })
                // using the done promise callback
                .done(function (data) {

                    // log data to the console so we can see
                    //console.log(data);
                    if (data.res) {
                        alert('thanks for your interest');
                    } else {
                        alert('sorry the system has been error');
                    }
                    window.location.href = data.redirect;
                    // here we will handle errors and validation messages
                });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });


});
