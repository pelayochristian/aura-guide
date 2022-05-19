/**
 * @description       : JS Controller of the Child component as a publisher.
 * @author            : pelayochristian.dev@gmail.com
 * @last modified on  : 05-19-2022
 * @last modified by  : pelayochristian.dev@gmail.com
**/

({
    handleComponentEvent: function (cmp, event) {
        var messageFromEvent = event.getParam('message');
        cmp.set('v.messageFromEvent', messageFromEvent);
    }
});