// show/hide more info
$('#show-info').click(function () {
    $('#more-info').show();
    $('#show-info').hide();
});

$('#hide-info').click(function () {
    $('#more-info').hide();
    $('#show-info').show();
});

// collapse/expand all widgets
//$(".widget .header").click(function () {
//    var widget = $(this).parent();
//    if (widget.hasClass('collapsed')) {
//        widget.removeClass('collapsed');
//    } else {
//        widget.addClass('collapsed');
//    }
//});

// close widget with animation
$(".widget .header").click(function () {
    var widget = $(this).parent();
    widget.find('.content').animate({
        height: "toggle",
        opacity: "toggle"
    }, {
        duration: 400
    });
    widget.toggleClass('x-collapsed');
});

// actions for top links
$("#top-menu a").click(function () {
    $("#breadcrumb").text(this.innerHTML + " : " + this.title);
});

function showContacts(contacts) {

    var contactsHTML = '';

    for(var i=0; i< contacts.length; i++) {
        contactsHTML += '<tr><td>' + contacts[i][0] + '</td><td>' + contacts[i][1] + '</td><td> </td></tr>';
    }
    $('#contacts-list tbody').html(contactsHTML);
}



$.ajax({
    url: 'js/mocks/load-contacts.json'
}).done(function (response) {
    console.debug('address have been loaded:', response);
    showContacts(response);
});
