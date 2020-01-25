define([], function () {
	var Util = {

		isObject: function(obj) {
           return !AIDiscountsUtil.isUndefOrNull(obj) && typeof(obj) === "object";
        },
		isHttpErrorCode: function(xhr) {
            return (xhr.status.toString().startsWith("5") 
                    || xhr.status.toString().startsWith("4")
                    || xhr.status.toString().startsWith("0"));
        },

    	isUndefOrNull: function (val) {
           return (val === undefined || val === null);
        },

		isValidJSONResponse: function(xhr) {
		    return Util.isObject(xhr) &&
		        !Util.isHttpErrorCode(xhr) &&
		        !Util.isUndefOrNull(xhr.responseJSON);
		}
	}
});