"use strict";$(document).ready(function(e){function n(){switch(r.hide(),h.hide(),u.hide(),d.hide(),v.hide(),p.hide(),f.hide(),m.hide(),w.hide(),k.hide(),C.hide(),o){case 1:r.show();break;case 2:h.show();break;case 3:u.show();break;case 4:d.show();break;case 5:v.show();break;case 6:p.show();break;case 7:f.show();break;case 8:m.show();break;case 9:w.show();break;case 10:k.show()}}var o=1,s=e("#dropdownMenuLink"),a=e("#dropdownMenu");s.on("click",function(e){e.preventDefault(),s.toggleClass("opening"),a.hasClass("show")?(console.log("Agregar show"),a.removeClass("show")):a.addClass("show")});var i=e("#trigger-overlay"),t=e(".overlay_close"),l=e(".overlay_contentpush");i.on("click",function(e){e.preventDefault(),l.addClass("open")}),t.on("click",function(e){e.preventDefault(),l.removeClass("open")}),e("#btnCollapseOne").on("click",function(){e("#collapseTwo").removeClass("in"),e("#collapseThree").removeClass("in")}),e("#btnCollapseTwo").on("click",function(){e("#collapseOne").removeClass("in"),e("#collapseThree").removeClass("in")}),e("#btnCollapseThree").on("click",function(){e("#collapseTwo").removeClass("in"),e("#collapseOne").removeClass("in")});var c=e(".js-rvsOpen");c.on("click",function(e){e.preventDefault(),o=4,n()}),(c=e(".js-details")).on("click",function(e){e.preventDefault(),o=2,n()}),e(".closeSection").on("click",function(e){e.preventDefault(),o=1,n()});var r=e("#section1"),h=e("#section2"),u=e("#section3"),d=e("#section4"),v=e("#section5"),p=e("#section6"),f=e("#section7"),m=e("#section8"),w=e("#section9"),k=e("#section10"),C=e("#sectionECO");n();var g=e("#firstName"),b=e("#lastName"),y=e("#email"),D=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/,T=e('input[name="attending"]'),O=e('input[name="myGuest"]'),z=e("#findMyInvitation"),N=e("#SendEnd"),A=e("#guestName"),j=e("#minisection2"),M=e("#minisection3"),S=e("#inputGuest");z.on("click",function(n){n.preventDefault(),""===g.val()?(e(".firstName + .alert").removeClass("hidden"),g.focus()):""===b.val()?(e(".lastName + .alert").removeClass("hidden"),b.focus()):""!==y.val()||D.test(y)?(A.html(g.val()+" "+b.val()+" "),C.show()):(e(".email + .alert").removeClass("hidden"),y.focus())}),N.on("click",function(n){n.preventDefault(),console.log(e("form").serialize()),e.ajax({type:"POST",url:"phpsave.php",data:e("form").serialize(),success:function(e){console.log(e)}})}),j.hide(),M.hide(),S.hide(),T.on("change",function(s){"option1"===e(this).val()?j.show():(o=7,n())}),O.on("change",function(n){"option2"===e(this).val()?(S.show(),""===S.find("input").val()&&M.hide()):(S.hide(),S.find("input").val(""),M.show())}),S.on("change keypress","input",function(n){e(this).val().length>3&&M.show()})});
//# sourceMappingURL=custom.js.map
