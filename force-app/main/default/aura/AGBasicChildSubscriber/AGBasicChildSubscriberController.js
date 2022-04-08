/**
 * Created by christianpelayo on 4/9/22.
 */

({
    handleComponentEvent : function(cmp, event) {
        var messageFromEvent = event.getParam("message");
        cmp.set("v.messageFromEvent", messageFromEvent);
    }
});