$(document).ready(function(){
        var featuredList = $('#featured > div[data-container="collection"] > div[data-content="posts"] > ul'),
            slideState = 1;

        function slideRight() {
            if (slideState == 3){
                slideState -= (slideState - 1);
                var active = $('li.is-active'),
                    activeTitle = $('li.is-active span'),
                    next = $('li.is-active + li'),
                    slideList = -100 * slideState + 100;

                next.toggleClass("is-active");
                active.toggleClass("is-active");

                featuredList.css({'left': ''+ slideList +'%'});
                
            } else {
                var active = $('li.is-active'),
                    activeTitle = $('li.is-active span'),
                    next = $('li.is-active + li'),
                    slideList = -100 * slideState;

                next.toggleClass("is-active");
                active.toggleClass("is-active");

                featuredList.css({'left': ''+ slideList +'%'});

                slideState += 1;
            }
        }
        
        setInterval(slideRight, 5000);
    });