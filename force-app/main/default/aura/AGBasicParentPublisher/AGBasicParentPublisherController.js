/**
 * Created by christianpelayo on 4/9/22.
 */

({
    publishEvent: function (cmp, event) {
        var messageEvent = $A.get("e.c:AGMessageApplicationEvent");
        messageEvent.setParams({
           "message" : "Message from publisher component"
        });
        messageEvent.fire();
    }
});