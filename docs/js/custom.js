"use strict";$(document).ready(function(e){function o(){switch(p.hide(),d.hide(),u.hide(),f.hide(),v.hide(),m.hide(),w.hide(),C.hide(),k.hide(),b.hide(),T.hide(),a){case 1:p.show();break;case 2:d.show();break;case 3:u.show();break;case 4:f.show(),T.hide(),g.show(),e("#formulario :input").val(null);break;case 5:v.show();break;case 6:m.show();break;case 7:w.show();break;case 8:C.show();break;case 9:k.show();break;case 10:b.show()}}e.fn.goTo=function(){return e("html, body").animate({scrollTop:e(this).offset().top+"px"},"fast"),this};var s=e("a.js-rvsOpen"),n=e("a.js-details");s.click(function(){if(a=4,o(),s.addClass("opens"),s.hasClass("opens"))return e("html, body").animate({scrollTop:e(e(this).attr("href")).offset().top},500),e("#dropdownMenu").removeClass("show"),s.removeClass("opens"),!1;s.removeClass("opens")}),n.click(function(){if(a=2,o(),s.addClass("opens"),e("#dropdownMenu").removeClass("show"),s.hasClass("opens"))return e("html, body").animate({scrollTop:e(e(this).attr("href")).offset().top},500),s.removeClass("opens"),!1;s.removeClass("opens"),e("html, body").animate({scrollTop:e(e(this).attr("href")).offset().top},0)});var a=1,t=e("#dropdownMenuLink"),i=e("#dropdownMenu");t.on("click",function(e){e.preventDefault(),t.toggleClass("opening"),i.hasClass("show")?i.removeClass("show"):i.addClass("show")});var l=e("#trigger-overlay"),c=e(".overlay_close"),r=e(".overlay_contentpush");l.on("click",function(e){e.preventDefault(),r.addClass("open")}),c.on("click",function(e){e.preventDefault(),r.removeClass("open")}),e("#btnCollapseOne").on("click",function(){e("#collapseTwo").removeClass("in"),e("#collapseThree").removeClass("in")}),e("#btnCollapseTwo").on("click",function(){e("#collapseOne").removeClass("in"),e("#collapseThree").removeClass("in")}),e("#btnCollapseThree").on("click",function(){e("#collapseTwo").removeClass("in"),e("#collapseOne").removeClass("in")});var h=e(".js-rvsOpen");h.on("click",function(s){s.preventDefault(),a=4,o(),e("#section4").goTo()}),(h=e(".js-details")).on("click",function(s){s.preventDefault(),a=2,o(),e("#section2").goTo()}),e(".closeSection").on("click",function(e){e.preventDefault(),a=1,o()}),e(".closReloat").on("click",function(e){a=1,o()});var p=e("#section1"),d=e("#section2"),u=e("#section3"),f=e("#section4"),v=e("#section5"),m=e("#section6"),w=e("#section7"),C=e("#section8"),k=e("#section9"),b=e("#section10"),g=e("#old"),T=e("#sectionECO");o();var y=e("#firstName"),D=e("#lastName"),O=e("#email"),j=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/,z=e('input[name="attending"]'),M=e('input[name="myGuest"]'),N=e("#findMyInvitation"),A=e("#SendEnd"),S=e("#guestName"),Z=e("#minisection2"),_=e("#minisection3"),x=e("#inputGuest");N.on("click",function(o){o.preventDefault(),""===y.val()?(e(".firstName + .alert").removeClass("hidden"),y.focus()):""===D.val()?(e(".lastName + .alert").removeClass("hidden"),D.focus()):""!==O.val()||j.test(O)?(S.html(y.val()+" "+D.val()+" "),T.show(),g.hide()):(e(".email + .alert").removeClass("hidden"),O.focus())}),A.on("click",function(s){s.preventDefault(),console.log(e("form").serialize()),e.ajax({type:"POST",url:"phpsave.php",data:e("form").serialize(),success:function(e){a=6,o()}})}),Z.hide(),_.hide(),x.hide(),z.on("change",function(s){"option1"===e(this).val()?_.show():(a=7,o())}),M.on("change",function(o){"option2"===e(this).val()?(x.show(),""===x.find("input").val()&&_.hide()):(x.hide(),x.find("input").val(""),_.show())}),x.on("change keypress","input",function(o){e(this).val().length>3&&_.show()})});
//# sourceMappingURL=custom.js.map
