"use strict";$(document).ready(function(e){function s(){switch(p.hide(),u.hide(),d.hide(),f.hide(),v.hide(),m.hide(),C.hide(),w.hide(),k.hide(),b.hide(),T.hide(),a){case 1:p.show();break;case 2:u.show();break;case 3:d.show();break;case 4:f.show(),T.hide(),g.show(),e("#formulario :input").val(null);break;case 5:v.show();break;case 6:m.show();break;case 7:C.show();break;case 8:w.show();break;case 9:k.show();break;case 10:b.show()}}e.fn.goTo=function(){return e("html, body").animate({scrollTop:e(this).offset().top+"px"},"fast"),this};var o=e("a.js-rvsOpen"),n=e("a.js-details");o.click(function(){if(a=4,s(),o.addClass("opens"),o.hasClass("opens"))return e("html, body").animate({scrollTop:e(e(this).attr("href")).offset().top},500),e("#dropdownMenu").removeClass("show"),o.removeClass("opens"),!1;o.removeClass("opens")}),n.click(function(){if(a=2,s(),o.addClass("opens"),e("#dropdownMenu").removeClass("show"),o.hasClass("opens"))return e("html, body").animate({scrollTop:e(e(this).attr("href")).offset().top},500),o.removeClass("opens"),!1;o.removeClass("opens"),e("html, body").animate({scrollTop:e(e(this).attr("href")).offset().top},0)});var a=1,t=e("#dropdownMenuLink"),i=e("#dropdownMenu");t.on("click",function(e){e.preventDefault(),t.toggleClass("opening"),i.hasClass("show")?i.removeClass("show"):i.addClass("show")});var l=e("#trigger-overlay"),c=e(".overlay_close"),r=e(".overlay_contentpush");l.on("click",function(e){e.preventDefault(),r.addClass("open")}),c.on("click",function(e){e.preventDefault(),r.removeClass("open")}),e("#btnCollapseOne").on("click",function(){e("#collapseTwo").removeClass("in"),e("#collapseThree").removeClass("in")}),e("#btnCollapseTwo").on("click",function(){e("#collapseOne").removeClass("in"),e("#collapseThree").removeClass("in")}),e("#btnCollapseThree").on("click",function(){e("#collapseTwo").removeClass("in"),e("#collapseOne").removeClass("in")});var h=e(".js-rvsOpen");h.on("click",function(o){o.preventDefault(),a=4,s(),e("#section4").goTo()}),(h=e(".js-details")).on("click",function(o){o.preventDefault(),a=2,s(),e("#section2").goTo()}),e(".closeSection").on("click",function(e){e.preventDefault(),a=1,s()}),e(".closReloat").on("click",function(e){a=1,s()});var p=e("#section1"),u=e("#section2"),d=e("#section3"),f=e("#section4"),v=e("#section5"),m=e("#section6"),C=e("#section7"),w=e("#section8"),k=e("#section9"),b=e("#section10"),g=e("#old"),T=e("#sectionECO");s();var y=e("#firstName"),O=e("#lastName"),D=e("#email"),j=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,N=e('input[name="attending"]'),M=e('input[name="myGuest"]'),S=e("#findMyInvitation"),x=e("#SendEnd"),z=e("#guestName"),E=e("#minisection2"),G=e("#minisection3"),P=e("#inputGuest");S.on("click",function(s){s.preventDefault(),""==y.val()?(e(".firstName + .alert").removeClass("hidden"),y.focus()):""==O.val()?(e(".lastName + .alert").removeClass("hidden"),O.focus()):""===D.val()?(e(".email + .alert").removeClass("hidden"),D.focus()):j.test(D.val())?(z.html(y.val()+" "+O.val()+" "),T.show(),g.hide()):(e(".email + .alert").removeClass("hidden"),D.focus())}),x.on("click",function(o){o.preventDefault(),console.log(e("form").serialize()),e.ajax({type:"POST",url:"phpsave.php",data:e("form").serialize(),success:function(e){a=6,s()}})}),E.hide(),G.hide(),P.hide(),N.on("change",function(o){"option1"===e(this).val()?G.show():(a=7,s(),e.ajax({type:"POST",url:"phpsaveNO.php",data:e("form").serialize(),success:function(e){a=6,s()}}))}),M.on("change",function(s){"option2"===e(this).val()?(P.show(),""===P.find("input").val()&&G.hide()):(P.hide(),P.find("input").val(""),G.show())}),P.on("change keypress","input",function(s){e(this).val().length>3&&G.show()})});
//# sourceMappingURL=custom.js.map
