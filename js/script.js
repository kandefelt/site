//--------------- Lines anim ------------

var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}



// ------------Skill cloud----------
var myCloudRadius = 300;
if(window.innerWidth<window.innerHeight)
{
  myCloudRadius = 140;
  document.querySelector("hr").setAttribute('style','font-size:2rem !important;');
  document.querySelector(".home-heading").setAttribute('style','font-size:2.5rem !important;');
}

const mySkills = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'Python',
    'Jira', 'Java', 'PHP',
    'C#', 'Selenium 2', 'Flask',
    'SQL', 'MySQL', 'Unity','Testrail',
];

var tagCloud = TagCloud('.skill-cloud', mySkills,{

  // radius in px
  radius: myCloudRadius,


  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'slow',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true

});



// ------------ Contact form validation



(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }

        if($(input).attr('type') == 'tel' || $(input).attr('name') == 'phone') {
            if($(input).val().trim().match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);
