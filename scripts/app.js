jQuery(document).ready(function() {
    jQuery('.servicesWrap').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('.latestWorkWrap').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 300
    });

    jQuery('.footerWrap').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated lightSpeedIn',
        offset: 300
    });
});