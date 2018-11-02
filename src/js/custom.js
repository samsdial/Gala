$(document).ready(function($){
    var currentPage = 1;
    //menu OPen
    var btnOpenDrop = $('#dropdownMenuLink');
    var dropmenu    = $('#dropdownMenu');
    btnOpenDrop.on("click", opening);
    //-- menu open
    var btnOpen = $('#trigger-overlay');
    var btnClose = $('.overlay_close');
    var menu = $('.overlay_contentpush');
    function opening(e) {
        e.preventDefault();
        btnOpenDrop.toggleClass('opening');
        if (dropmenu.hasClass('show')){
            console.log('Agregar show');
            dropmenu.removeClass('show');
        } else {
            dropmenu.addClass('show');
        }
    }

    // OLD
    btnOpen.on('click', function (e) {
        e.preventDefault();
        menu.addClass('open');
    });
    btnClose.on('click', function (e) {
        e.preventDefault();
        menu.removeClass('open');
    });
    $('#btnCollapseOne').on('click', function () {
        //console.log('Hola uno')
        $('#collapseTwo').removeClass('in');
        //$('#collapseTwo').addClass('collapsing');
        $('#collapseThree').removeClass('in');
        //$('#collapseThree').addClass('collapsing');
    });
    $('#btnCollapseTwo').on('click', function () {
        //console.log('Hola Dos')
        $('#collapseOne').removeClass('in');
        $('#collapseThree').removeClass('in');
    });
    $('#btnCollapseThree').on('click', function () {
        //console.log('Hola Tres')
        $('#collapseTwo').removeClass('in');
        $('#collapseOne').removeClass('in');
    });
    //Acctio Form
    var OpenAction = $('#rvsopen');
    OpenAction.on('click', function (e) {
        e.preventDefault();
        //console.log('Hola Tres')
        currentPage = 4;
        changeCurrentPage();
    });
    //

    var $section1 = $('#section1');
    var $section2 = $('#section2');
    var $section3 = $('#section3');
    var $section4 = $('#section4');
    var $section5 = $('#section5');
    var $section6 = $('#section6');
    var $section7 = $('#section7');
    var $section8 = $('#section8');
    var $section9 = $('#section9');
    var $section10 = $('#section10');
    let $sectionEco = $('#sectionECO');

    changeCurrentPage();
    function changeCurrentPage()
    {
        //console.log('entro');
        $section1.hide();
        $section2.hide();
        $section3.hide();
        $section4.hide();
        $section5.hide();
        $section6.hide();
        $section7.hide();
        $section8.hide();
        $section9.hide();
        $section10.hide();
        $sectionEco.hide();
        switch (currentPage) {
            case 1:
                $section1.show();
                break;
            case 2:
                $section2.show();
                break;
            case 3:
                $section3.show();
                break;
            case 4:
                $section4.show();
                break;
            case 5:
                $section5.show();
                break;
            case 6:
                $section6.show();
                break;
            case 7:
                $section7.show();
                break;
            case 8:
                $section8.show();
                break;
            case 9:
                $section9.show();
                break;
            case 10:
                $section10.show();
                break;
        }
    }

    let $firstName = $('#firstName');
    let $lastName = $('#lastName');
    let $email = $('#email');
    let $validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    let $attendingCheckbox = $('input[name="attending"]');
    let $guestCheckbox = $('input[name="myGuest"]');
    let $findMyInvitation = $('#findMyInvitation');
    let $guestName = $('#guestName');
    let $minisection2 = $('#minisection2');
    let $minisection3 = $('#minisection3');

    $minisection2.hide();
    $minisection3.hide();

    $attendingCheckbox.on('change', function (e) {
       let value = $(this).val();

       if (value === 'option1') {
           $minisection2.show();
       } else {
           currentPage = 6;
           changeCurrentPage();
           $('#finallRespond').html('Thank you.');
       }
    });

    $guestCheckbox.on('change', function(e) {
        let value = $(this).val();
        console.log(value);
        if (value === 'option2') {
            $minisection3.show();
        } else {

        }
    })

    $findMyInvitation.on('click', function(e) {
        e.preventDefault();
        console.log($validacion_email.test($email.val()));
        if ($firstName.val() === "") {
            $('.firstName + .alert').removeClass('hidden');
            $firstName.focus();
        } else if ($lastName.val() === "") {
            $('.lastName + .alert').removeClass('hidden');
            $lastName.focus();
        } else if ($email.val() === "" && !$validacion_email.test($email.val())) {
            $('.email + .alert').removeClass('hidden');
            $email.focus();
        } else {
            $guestName.html(`${$firstName.val()} ${$lastName.val()} `);
            $sectionEco.show();
        }
    });

});
