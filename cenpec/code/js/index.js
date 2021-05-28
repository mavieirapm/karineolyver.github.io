var timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1000,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
        var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
        768: {
            direction: 'horizontal',
        }
    }
});


function highlight_map_states() {
    if ($(".states_section").length > 0) {
        $(".states_section .list_states .item .link").hover(function () {
            var a = "#state_" + $(this).text().toLowerCase();
            $(a).attr("class", "state hover")
        }, function () {
            var a = "#state_" + $(this).text().toLowerCase();
            $(a).attr("class", "state")
        })
    }
};



/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function () {

    //window and animation items
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //iterate through elements to see if its in view
        $.each(animation_elements, function () {

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('in-view');
            } else {
                element.removeClass('in-view');
            }
        });

    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view()
    })
    //trigger our scroll event on initial load
    $(window).trigger('scroll');

});


jQuery(function () {
    jQuery('#showall').click(function () {
        jQuery('.targetDiv').show();
    });
    jQuery('.showSingle').click(function () {
        jQuery('.targetDiv').hide();
        jQuery('#div' + $(this).attr('target')).show();
    });
});
