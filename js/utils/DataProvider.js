
define([
	'utils/utils'
    'jquery'
], function (
	Util,
    $) {
        
function handleJSONResponse(xhr) {
             if (Util.isValidJSONResponse(xhr)) {
                return xhr.responseJSON;
            }
           return null;
        }


function getToDoList(callback, async) {
            if (Util.isUndefOrNull(async)) {
                async = true;
            }
            
            $.ajax({
                type: "GET",
                data: {},
                url:  "http://localhost:8080" + "/todofiles",
                async: true,
                complete: function (value, status) {
                	/*
                    if (status === "success" || status === "nocontent") {
                        value = handleJSONResponse(value);                   
                        callback(value, status);
                    } else {
                        // TODO: Handle error  
                        value = handleJSONResponse(value);                   
                        callback(value, status);
                    }
                    */
                   console.error("here!!!");
                }
            });
        }
});