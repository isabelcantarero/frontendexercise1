$(function() {

    $("nav").delegate("a", "click", function() {
        var selected = $(this).text();
        
            $('#content').load(selected + ".html");
       
        return true;
    })

});


