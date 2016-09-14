$(document).ready(function () {

    /*----------------------------------------_clear_input_after_no_---------------------------------------*/


    var clearInputAfterNo  = function() {

        var inputNo = $('input[value=f]');

        inputNo.on('change', function () {
            var toClear = $(this).parent().next().children('input');
            toClear.val('');
        });

        $('#pet-no').on('change',function(){
            $('.pet-yes').find('span').removeClass('checked');
        });
        $('#movies-no').on('change',function(){
            $('.movies-yes').find('span').removeClass('checked');
        });
        $('#children-no').on('change',function(){
            $('.child-age-val').attr('checked',false);
        });


    };

    clearInputAfterNo();

  /*-------------------------------_change_input_color_when_checked_--------------------------------------------*/

    $(".box input").change(function () {
        if ($(this).is(':checked')) {
            $(this).siblings('span').addClass('checked');
        } else {
            $(this).siblings('span').removeClass('checked');

        }
    });


    /*----------------------------------------_student_question_SHOW/HIDE---------------------------------------*/
    $("#birth_year").change(function () {
        var data = new Date();
        var currentYear = data.getFullYear();
        var student = $(".student");
        var job =  $(".job");

        if (($(this).val()) < (currentYear - 18) && ($(this).val()) > (currentYear - 31)) {
            student.show();
        } else {
            student.hide();
        }

        if (currentYear - ($(this).val()) > 16) {
         job.show();
         } else {
         job.hide();
         }
    });

});

/*-------------------------------------------------------------------------------*/
/*
    var regForm = $('#reg'),
        regFormExpand = $('#register-expand');

    $("fieldset.register-question input[type=radio]").change(function (e) {

        var fieldset;

        if(!(fieldset = document.getElementById(this.name)))
            return;

        //alert(fieldset.id);

        var answers;

        if (answers = fieldset.getElementsByClassName('answer')) {
            for (var i = 0; i < answers.length; i++)
                answers[i].style.display = 'none';


            var elemToShow = fieldset.getElementsByClassName(this.id);

            for (var i = 0; i < elemToShow.length; i++)
                elemToShow[i].style.display = 'block';

        }
    });






   regForm.on('submit', function (e) {
        $_this = $(this);
        e.preventDefault();

        $.post(
            baseUrl + 'register/store',
            $_this.serialize()
        ).done(function(data){
            window.location.href = baseUrl + 'main'
        }).fail(function(jsonData) {
            var errorsArr = jsonData.responseJSON.errors;
            correctForm(errorsArr);
        });

        });

    regFormExpand.on('click', function (e) {
        var that = $(this)
        $('#second-step', regForm).toggle(1000, function () {
            if($(this).is(':visible')) {
                that.text('Hide more')
            } else {
                that.text('More')
            }
        });

    })

});



var correctForm = function (inputs) {

    formClearErr();

    for (var i in inputs) {

        if (i == 'birth_day' || i == 'birth_month' || i == 'birth_year')
            $("#reg select[name=" + i + "]").addClass('err-form');
        if (i == 'job' || i == 'student' || i == 'has_pet' || i == 'has_moto' || i == 'is_football_fan' || i == 'is_single' || i == 'gender') { // for inputs type radio

            // only h2 will be red with bg (question)
            //$("label[for*=" + i +"]").addClass('err-form-radio');

            var er = document.createElement('span');
            er.className = 'err-form-span';

            $("fieldset#" + i + " h3").prepend(er).css('color', '#c33726');

        } else
            $("#reg input[name=" + i + "]").addClass('err-form');
    }

    if($.scrollTo(".err-form", 300) | $.scrollTo(".err-form-span", 300));
};

var formClearErr = function () {
    $("#reg input").removeClass('err-form');
    $("#reg select").removeClass('err-form');
    //$("label").removeClass('err-form-radio');
    $("#reg .err-form-span").remove();
    $("fieldset h3").css('color', '#2774ae')
};

*/