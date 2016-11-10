var userFeed = new Instafeed({
    get: 'user',
    userId: '2002996708',
    sortBy: 'most-recent',
    limit: '20',
    resolution: 'standard_resolution',
    clientId: '9c7e91d5aaad4669b264dbb944e29100',
    accessToken: '2002996708.1677ed0.ae5bace7b8824ad29f68711a3dd9e6b4',
    template: '<div class="item"><div class="col-xs-4 col-sm-3 col-md-2"><a href="{{link}}" target="_blank"><img src="{{image}}" class="img-responsive" /></a></div></div>',
    after: function() {
        $('#instafeed > div:nth-child(1)').addClass('active');

        // Instantiate the Bootstrap carousel
        $('.multi-item-carousel').carousel({
            // interval: 2000
            interval: false
        });
        $('.carousel-showsixmoveone .item').each(function() {
            var itemToClone = $(this);

            for (var i = 1; i < 6; i++) {
                itemToClone = itemToClone.next();

                // wrap around if at end of item collection
                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }

                // grab item, clone, add marker class, add to collection
                itemToClone.children(':first-child').clone()
                    .addClass("cloneditem-" + (i))
                    .appendTo($(this));
            }
        });
    }
});
userFeed.run();
