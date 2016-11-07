/**
 * Created by hxsd on 2016/9/29.
 */
var myApp=angular.module("myApp",["ionic"])

myApp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"views/tabs/tabs.html"
        })
        .state("tabs.home",{
            url:"/home",
            views:{"tabs-home":{
                templateUrl:"views/home/home.html"
            }}
        })
        .state("tabs.topic",{
            url:"/topic",
            views:{"tabs-topic":{
                templateUrl:"views/topic/topic.html"
            }}
        })
        .state("tabs.notice",{
            url:"/notice",
            views:{
                "tabs-notice":{
                    templateUrl:"views/notice/notice.html"
            }}
        })
        .state("tabs.message",{
            url:"/message",
            views:{"tabs-message":{
                templateUrl:"views/message/message.html"

            }}
        })
        .state("tabs.attention",{
            url:"/attention",
            views:{"tabs-notice":{
                templateUrl:"views/notice/attention.html"

            }}
        })
        .state("tabs.support",{
            url:"/support",
            views:{"tabs-notice":{
                templateUrl:"views/notice/support.html"

            }}
        })
        .state("tabs.user",{
            url:"/user",
            views:{"tabs-user":{
                templateUrl:"views/user/user.html"
            }}
        })
        .state("tabs.shoucang", {
            url: "/shoucang",
            views: { "tabs-topic": {
                    templateUrl: "views/topic/shoucang.html"
                }
            }
        })
        .state("tabs.remen", {
            url: "/remen",
            views: {
                "tabs-topic": {
                    templateUrl: "views/topic/remen.html"
                }
            }
        })
        .state("tabs.tuijian", {
            url: "/topic",
             views: {
                "tabs-topic": {
                    templateUrl: "views/topic/topic.html"
                }
            }
        }) ;

    $urlRouterProvider.otherwise("/tabs/home")
})
.controller("sliderController",function($scope){
     $scope.myActiveSlide=1;

})