(function() {	
    $(document).on("pageinit", "#sms", function(e) {
        e.preventDefault();
        
        function onDeviceReady() {
            console.log("Apache Cordova is loaded ...");
        
            $("#sendSMS").on("tap", function(e) {
                e.preventDefault();

                if (! $("#smsForm").valid()) {
                    return;
                }
            
                var messageInfo = {
                    phoneNumber: $("#phoneNo").val(),
                    textMessage: $("#textMessage").val()
                };
                
                sms.sendMessage(messageInfo, function() {
                    $("#result").html("Message is sent successfully ...");
                }, function(error) {
                    $("#result").html("Error code: " + error.code + ", Error message: " + error.message);
                });
            });
        }
                   
        document.addEventListener("deviceready", onDeviceReady, false);
    });

    $(document).on("pageshow", "#sms", function(e) {
        e.preventDefault();
        
        $("#smsForm").validate({
        	errorLabelContainer: "#messageBox",
        	wrapper: "li", 
        	rules: {
        		textMessage: "required",
        		phoneNo: {
                    required: true,
                    number: true
                }
            },
            messages: {
            	textMessage: "Please specify text message",
            	phoneNo: {
                    required: "Please specify Phone number",
                    number: "Phone number is numeric only"
                }
            }
        });
    });    

})();