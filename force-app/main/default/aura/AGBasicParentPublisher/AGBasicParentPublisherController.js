/**
 * @description       : JS Controller of the Parent component as a publisher.
 * @author            : pelayochristian.dev@gmail.com
 * @last modified on  : 05-19-2022
 * @last modified by  : pelayochristian.dev@gmail.com
**/

({
    // eslint-disable-next-line no-unused-vars
    publishEvent: function (cmp, event) {
        var messageEvent = $A.get('e.c:AGMessageApplicationEvent');
        messageEvent.setParams({
            message: 'Message from publisher component'
        });
        messageEvent.fire();
    }
});