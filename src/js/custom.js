$(document).ready(function($){

	$.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: ($(this).offset().top) + 'px'
        }, 'fast');

        return this; // for chaining...
    }

    var btnScrollOpen = $('a.js-rvsOpen');
    var btnScrollOpen2 = $('a.js-details');
    btnScrollOpen.click(function(){
        currentPage = 4;
        changeCurrentPage();
        btnScrollOpen.addClass('opens');
        if (btnScrollOpen.hasClass('opens')){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            $('#dropdownMenu').removeClass('show');
            btnScrollOpen.removeClass('opens');
            return false;

        } else {
            btnScrollOpen.removeClass('opens');
        }
    });
    btnScrollOpen2.click(function(){
        currentPage = 2;
        changeCurrentPage();
        btnScrollOpen.addClass('opens');
        $('#dropdownMenu').removeClass('show');
        if (btnScrollOpen.hasClass('opens')){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);

            btnScrollOpen.removeClass('opens');
            return false;

        } else {
            btnScrollOpen.removeClass('opens');
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 0);
        }
    });

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
            //console.log('Agregar show');
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
    var OpenAction = $('.js-rvsOpen');
    OpenAction.on('click', function (e) {
        e.preventDefault();
        //console.log('Hola Tres')
        currentPage = 4;
        changeCurrentPage();
        $("#section4").goTo();
    });
    //
    var OpenAction = $('.js-details');
    OpenAction.on('click', function (e) {
        e.preventDefault();
        //console.log('Hola Tres')
        currentPage = 2;
        changeCurrentPage();
        $("#section2").goTo();
    });
    //Close Section{}  #closeSection4
    var closeSeption4 = $('.closeSection');
    closeSeption4.on('click', function (e){
        e.preventDefault();
        //console.log('Hola Tres');
        currentPage = 1;
        changeCurrentPage();
    });
    //Close Section{}  #closeSection4
    var closeReloat = $('.closReloat');
    closeReloat.on('click', function (a){
        //console.log('Hola Tres');
        currentPage = 1;
        changeCurrentPage();
    });
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
    var $old = $('#old');
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
                $sectionEco.hide();
                $old.show();
                $("#formulario :input").val(null);
                //$("#formulario :check, #formulario :radio").prop('checked', false);
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
    let validacion_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let $attendingCheckbox = $('input[name="attending"]');
    let $guestCheckbox = $('input[name="myGuest"]');
    let $findMyInvitation = $('#findMyInvitation');
    let $finallRespond = $('#SendEnd');
    let $guestName = $('#guestName');
    let $minisection2 = $('#minisection2');
    let $minisection3 = $('#minisection3');
    let $inputGuestRow = $('#inputGuest');

    $findMyInvitation.on('click', function(e) {
        e.preventDefault();

        if ($firstName.val() == "") {
            $('.firstName + .alert').removeClass('hidden');
            $firstName.focus();
        } else if ($lastName.val() == "") {
            $('.lastName + .alert').removeClass('hidden');
            $lastName.focus();
        } else if ($email.val() === "") {
            $('.email + .alert').removeClass('hidden');
            $email.focus();
        } else if (!validacion_email.test($email.val())) {
            $('.email + .alert').removeClass('hidden');
            $email.focus();
        } else {
            $guestName.html(`${$firstName.val()} ${$lastName.val()} `);
            $sectionEco.show();
            $old.hide();
        }
    });

    $finallRespond.on('click', function (e) {
        e.preventDefault();
        console.log($('form').serialize());
        $.ajax({
            type: 'POST',
            url: 'phpsave.php',
            data: $('form').serialize(),
            success: function (e) {
                currentPage = 6;
                changeCurrentPage();
            }
        });
    });

    $minisection2.hide();
    $minisection3.hide();
    $inputGuestRow.hide();

    $attendingCheckbox.on('change', function (e) {
       let value = $(this).val();

       if (value === 'option1') {
           $minisection3.show();
       } else {
           currentPage = 7;
           changeCurrentPage();
           $.ajax({
               type: 'POST',
               url: 'phpsaveNO.php',
               data: $('form').serialize(),
               success: function (e) {
                   currentPage = 6;
                   changeCurrentPage();
               }
           });
       }
    });

    $guestCheckbox.on('change', function(e) {
        let value = $(this).val();
        if (value === 'option2') {
            $inputGuestRow.show();
            if ($inputGuestRow.find('input').val() === "") {
                $minisection3.hide();
            }
        } else {
            $inputGuestRow.hide();
            $inputGuestRow.find('input').val("");
            $minisection3.show();
        }
    });

    $inputGuestRow.on('change keypress', 'input', function (e) {
        let val = $(this).val();
        if (val.length   > 3) {
            $minisection3.show();
        }
    });



});
