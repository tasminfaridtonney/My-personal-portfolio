$(document).ready(function() {
    $("#news-slider").owlCarousel({
        navigation: true,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [550, 1],
        pagination: false,
        navigationText: false
    });
});