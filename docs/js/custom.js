"use strict";$(document).ready(function(e){function n(){switch(c.hide(),h.hide(),r.hide(),u.hide(),d.hide(),v.hide(),p.hide(),f.hide(),m.hide(),w.hide(),k.hide(),o){case 1:c.show();break;case 2:h.show();break;case 3:r.show();break;case 4:u.show();break;case 5:d.show();break;case 6:v.show();break;case 7:p.show();break;case 8:f.show();break;case 9:m.show();break;case 10:w.show()}}var o=1,s=e("#dropdownMenuLink"),a=e("#dropdownMenu");s.on("click",function(e){e.preventDefault(),s.toggleClass("opening"),a.hasClass("show")?(console.log("Agregar show"),a.removeClass("show")):a.addClass("show")});var i=e("#trigger-overlay"),l=e(".overlay_close"),t=e(".overlay_contentpush");i.on("click",function(e){e.preventDefault(),t.addClass("open")}),l.on("click",function(e){e.preventDefault(),t.removeClass("open")}),e("#btnCollapseOne").on("click",function(){e("#collapseTwo").removeClass("in"),e("#collapseThree").removeClass("in")}),e("#btnCollapseTwo").on("click",function(){e("#collapseOne").removeClass("in"),e("#collapseThree").removeClass("in")}),e("#btnCollapseThree").on("click",function(){e("#collapseTwo").removeClass("in"),e("#collapseOne").removeClass("in")}),e("#rvsopen").on("click",function(e){e.preventDefault(),o=4,n()});var c=e("#section1"),h=e("#section2"),r=e("#section3"),u=e("#section4"),d=e("#section5"),v=e("#section6"),p=e("#section7"),f=e("#section8"),m=e("#section9"),w=e("#section10"),k=e("#sectionECO");n();var C=e("#firstName"),g=e("#lastName"),b=e("#email"),y=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/,T=e('input[name="attending"]'),D=e('input[name="myGuest"]'),z=e("#findMyInvitation"),N=e("#SendEnd"),O=e("#guestName"),A=e("#minisection2"),M=e("#minisection3"),Z=e("#inputGuest");z.on("click",function(n){n.preventDefault(),""===C.val()?(e(".firstName + .alert").removeClass("hidden"),C.focus()):""===g.val()?(e(".lastName + .alert").removeClass("hidden"),g.focus()):""!==b.val()||y.test(b.val())?(O.html(C.val()+" "+g.val()+" "),k.show()):(e(".email + .alert").removeClass("hidden"),b.focus())}),N.on("click",function(n){n.preventDefault(),console.log(e("form").serialize()),e.ajax({type:"POST",url:"phpsave.php",data:e("form").serialize(),success:function(e){console.log(e)}})}),A.hide(),M.hide(),Z.hide(),T.on("change",function(s){"option1"===e(this).val()?A.show():(o=6,n(),e("#finallRespond").html("Thank you."))}),D.on("change",function(n){"option2"===e(this).val()?(Z.show(),""===Z.find("input").val()&&M.hide()):(Z.hide(),Z.find("input").val(""),M.show())}),Z.on("change keypress","input",function(n){e(this).val().length>5&&M.show()})});
//# sourceMappingURL=custom.js.map
