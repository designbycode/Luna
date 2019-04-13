
(function(){
    'use stric';

    $(document).Luna({
        spyscroll: {
            trigger: ".scrollspy",
            offset: 0,
            activeClass: "list__item--active"
        },
        skewScroll: {
            force: 0.3,
            maxSkew: 5
        }
    });

})();

