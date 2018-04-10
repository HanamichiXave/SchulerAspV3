        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#empImg').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#empChoose").change(function(){
            readURL(this);
        });

         var start = 1900;
         var end = new Date().getFullYear();
         var options = "<option></option>";
         for(var year = start ; year <=end; year++){
          options += "<option>"+ year +"</option>";
         }
         document.getElementById("expYearStart1").innerHTML = options;
         document.getElementById("expYearEnd1").innerHTML = options;
         document.getElementById("professionalYearStarted1").innerHTML = options;
         document.getElementById("professionalYearEnded1").innerHTML = options;
         $('.form_date').datetimepicker({
           weekStart: 1,
           todayBtn:  1,
           autoclose: 1,
           todayHighlight: 1,
           startView: 2,
           minView: 2
           });
         
         $('.year').datetimepicker({
           weekStart: 1,
           todayBtn:  1,
           autoclose: 1,
           todayHighlight: 1,
           startView: 4,
           minView: 4
           });
         $('.form_date2').datetimepicker({
           weekStart: 1,
           todayBtn:  1,
           autoclose: 1,
           todayHighlight: 1,
           startView: 2,
           minView: 2,
           forceParse: 0
           })
           .on('changeDate', function(e) {
         
               $('#toogleValidationEmployee').formValidation('revalidateField', 'dateHired');
           });
         
         $("#expYearEnd1").change(function(ev) {
                       var $start =  Date.parse($("#expYearStart1").val());
                               var $end = Date.parse($(this).val());
                               if(isNaN($start)) {
                                           sweetAlert({
                                                 title:"ERROR!!!",
                                                 text: "The start date must not be empty!",
                                                 type:"error"
                                           },function(isConfirm){
                                                 $("#expYearEnd1").val("");
                                           });
                               } else {
                                   if($start > $end)
                                       {
                                           sweetAlert({
                                                 title:"ERROR!!!",
                                                 text: "The end date can not be less than the start date",
                                                 type:"error"
                                           },function(isConfirm){
                                                 $("#expYearEnd1").val("");
                                           });
                                       }
                               }
                   });
                   $("#expYearStart1").change(function() {
                       var $start =  Date.parse($(this).val());
                               var $end = Date.parse($("#expYearEnd1").val());
                               if(!isNaN($start)) {
                                 if($start > $end)
                                       {
                                           sweetAlert({
                                                 title:"ERROR!!!",
                                                 text: "The end date can not be less than the start date",
                                                 type:"error"
                                           },function(isConfirm){
                                                 $("#expYearEnd1").val("");
                                           });
                                       }
                               }
                   });
         //hs
            $('#datetimepicker1').on('changeYear', function(ev){
               var $hs_start =  Date.parse($('#yearStarted').val());
               var $hs_end = Date.parse(ev.date.getFullYear());
               if(isNaN($hs_start)) {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The start date must not be empty!',
                                 type:'error'
                           },function(isConfirm){
                                 $('#yearEnded').val("");
                           });
               } else {
                   if($hs_start > $hs_end)
                       {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The end date can not be less than the start date',
                                 type:'error'
                           },function(isConfirm){
                                 $('#yearEnded').val("");
                           });
                       }
               }
           });
            $('#yearStartedEV').on('changeYear', function(ev){
                 var $hs_end = Date.parse($('#yearEnded').val());
                 var $hs_start =  Date.parse(ev.date.getFullYear());
                 if(!isNaN($hs_end)) {
                   if($hs_start > $hs_end) {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The end date can not be less than the start date',
                                 type:'error'
                           },function(isConfirm){
                                 $('#yearEnded').val("");
                           });
                       }
                 }
             });
            //col
            $('#collegeYearEnded1').on('changeYear', function(ev){
               var $cl_start =  Date.parse($('#collegeYearStarted').val());
               var $cl_end = Date.parse(ev.date.getFullYear());
               if(isNaN($cl_start)) {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The start date must not be empty!',
                                 type:'error'
                           },function(isConfirm){
                                 $('#collegeYearEnded').val("");
                           });
               } else {
                   if($cl_start > $cl_end)
                       {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The end date can not be less than the start date',
                                 type:'error'
                           },function(isConfirm){
                                 $('#collegeYearEnded').val("");
                           });
                       }
               }
           });
          $('#collegeYearStarted1').on('changeYear', function(ev){
                 var $cl_end = Date.parse($('#collegeYearEnded').val());
                 var $cl_start =  Date.parse(ev.date.getFullYear());
                 if(!isNaN($cl_end)) {
                   if($hs_start > $hs_end) {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The end date can not be less than the start date',
                                 type:'error'
                           },function(isConfirm){
                                 $('#collegeYearEnded').val("");
                           });
                       }
                 }
           });
          //pro
           $("#professionalYearEnded1").change(function(ev) {
               var $start =  Date.parse($("#professionalYearStarted1").val());
               var $end = Date.parse($(this).val());
               if(isNaN($start)) {
                   sweetAlert({
                   title:"ERROR!!!",
                   text: "The start date must not be empty!",
                   type:"error"
                   },function(isConfirm){
                   $("#professionalYearEnded1").val("");
                   });
               } else {
                   if($start > $end)
                   {
                       sweetAlert({
                           title:"ERROR!!!",
                           text: "The end date can not be less than the start date",
                           type:"error"
                       },function(isConfirm){
                           $("#professionalYearEnded1").val("");
                       });
                   }
               }
           });
           $("#professionalYearStarted1").change(function() {
               var $start =  Date.parse($(this).val());
               var $end = Date.parse($("#professionalYearEnded1").val());
               if(!isNaN($start)) {
                   if($start > $end)
                   {
                       sweetAlert({
                           title:"ERROR!!!",
                           text: "The end date can not be less than the start date",
                           type:"error"
                       },function(isConfirm){
                           $("#professionalYearEnded1").val("");
                       });
                   }
               }
           });
          //topic
          $('#topicDateStarted1').on('changeDate', function(ev){
                 var $tp_end = Date.parse($('#topicDateEnded').val());
                 var $tp_start =  Date.parse(ev.date);
                 if(!isNaN($tp_end)) {
                   if($tp_start > $tp_end) {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The end date can not be less than the start date',
                                 type:'error'
                           },function(isConfirm){
                                 $('#topicDateEnded').val("");
                           });
                       }
                 }
           });
          $('#topicDateEnded1').on('changeDate', function(ev){
               var $tp_start =  Date.parse($('#topicDateStarted').val());
               var $tp_end = Date.parse(ev.date);
               if(!isNaN($tp_start)) {
                   if($tp_start > $tp_end)
                       {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The end date can not be less than the start date',
                                 type:'error'
                           },function(isConfirm){
                                 $('#topicDateEnded').val("");
                           });
                       }
               } else {
                           sweetAlert({
                                 title:'ERROR!!!',
                                 text: 'The start date must not be empty!',
                                 type:'error'
                           },function(isConfirm){
                                 $('#topicDateEnded').val("");
                           });
               }
           });
         //end datepicker validation

         $(document).ready(function() {
          //print data start (louie)
          function printInfo() {
             var empInfo=document.getElementById("info-page");
             // var styles = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
             // var style = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">';
             newWin= window.open("");
             // newWin.document.write(styles.outerHTML);
             newWin.document.write(empInfo.outerHTML);
             newWin.print();
             newWin.close();
          }
            $('#printData').on('click',function(){
            printInfo();
            });
            //print data end (louie)
            //checkbox (option if permanent address is same as present)
            $('#sameAdd').click(function(){
                  if($(this).prop("checked") == true){
                    if($('#employeeUnitNumber').val() && $('#employeeHouseNumber').val() && $('#employeeStreetName').val() && $('#employeeBrgyName').val() && $('#employeeCity').val()){
                      // console.log($('#permanentAddress').val($('#presentAddress').val()));
                      // var val = $.trim($("textarea#permanentAddress").val($('textarea#presentAddress').val()));
                      $('#employeeUnitNumber1').val($('#employeeUnitNumber').val());
                      $('#employeeHouseNumber1').val($('#employeeHouseNumber').val());
                      $('#employeeStreetName1').val($('#employeeStreetName').val());
                      $('#employeeBrgyName1').val($('#employeeBrgyName').val());
                      $('#employeeCity1').val($('#employeeCity').val());
                      $('#employeePostalCode1').val($('#employeePostalCode').val());
                      $('#permanentLandLine').val($('#landLineNo').val());
         
                      $('#employeeUnitNumber1').prop('readonly',true);
                      $('#employeeHouseNumber1').prop('readonly',true);
                      $('#employeeStreetName1').prop('readonly',true);
                      $('#employeeBrgyName1').prop('readonly',true);
                      $('#employeeCity1').prop('readonly',true);
                      $('#employeePostalCode1').prop('readonly',true);
                      $('#permanentLandLine').prop('readonly',true);
         
                      $('#employeeUnitNumber').prop('readonly',true);
                      $('#employeeHouseNumber').prop('readonly',true);
                      $('#employeeStreetName').prop('readonly',true);
                      $('#employeeBrgyName').prop('readonly',true);
                      $('#employeeCity').prop('readonly',true);
                      $('#employeePostalCode').prop('readonly',true);
                      $('#landLineNo').prop('readonly',true);
         
                      // $('#permanentAddress').trigger('click');
                      
                      $('#presentAddress2').html($('#employeeUnitNumber').val()+' '+$('#employeeHouseNumber').val()+' '+$('#employeeStreetName').val()+' '+$('#employeeBrgyName').val()+' '+$('#employeeCity').val());
                      $('#zipCode2').val($('#employeePostalCode').val());
                      $('#permanentAddress2').html($('#employeeUnitNumber1').val()+' '+$('#employeeHouseNumber1').val()+' '+$('#employeeStreetName1').val()+' '+$('#employeeBrgyName1').val()+' '+$('#employeeCity1').val());
                      $('#permanentZipCode2').val($('#employeePostalCode1').val());
                      $(this).prop("checked", true);
                      }
                    else{
                      swal("ERROR!!!", "Present address must not be empty!", "error");
                      $(this).prop("checked", false);
                    }
                     $('#toogleValidationEmployee').formValidation('revalidateField', 'employeeUnitNumber1');
                     $('#toogleValidationEmployee').formValidation('revalidateField', 'employeeHouseNumber1');
                     $('#toogleValidationEmployee').formValidation('revalidateField', 'employeeStreetName1');
                     $('#toogleValidationEmployee').formValidation('revalidateField', 'employeeBrgyName1');
                     $('#toogleValidationEmployee').formValidation('revalidateField', 'employeeCity1');
                     $('#toogleValidationEmployee').formValidation('revalidateField', 'employeePostalCode1');
                  }
                  else if($(this).prop("checked") == false){
                      $('#employeeUnitNumber1').val("");
                      $('#employeeHouseNumber1').val("");
                      $('#employeeStreetName1').val("");
                      $('#employeeBrgyName1').val("");
                      $('#employeeCity1').val("");
                      $('#employeePostalCode1').val("");
                      $('#permanentLandLine').val("");
         
                      $('#employeeUnitNumber1').prop('readonly',false);
                      $('#employeeHouseNumber1').prop('readonly',false);
                      $('#employeeStreetName1').prop('readonly',false);
                      $('#employeeBrgyName1').prop('readonly',false);
                      $('#employeeCity1').prop('readonly',false);
                      $('#employeePostalCode1').prop('readonly',false);
                      $('#permanentLandLine').prop('readonly',false);
         
                      $('#employeeUnitNumber').prop('readonly',false);
                      $('#employeeHouseNumber').prop('readonly',false);
                      $('#employeeStreetName').prop('readonly',false);
                      $('#employeeBrgyName').prop('readonly',false);
                      $('#employeeCity').prop('readonly',false);
                      $('#employeePostalCode').prop('readonly',false);
                      $('#landLineNo').prop('readonly',false);
                    }
                  
              });
            //end checkbox condition
            $('#dateHired').on('changeDate',function(){
              alert('sad')
            });
            //skip create account
            $('#skip').click(function(){
              if($(this).prop("checked") == true){
                $('#user_name').prop('disabled',true);
                $('#user_name').val('');
                $('#password').prop('disabled',true);
                $('#password').val('');
                $('#empEmail').prop('disabled',true);
                $('#empEmail').val('');
              }
              else if($(this).prop("checked") == false){
                $('#user_name').prop('disabled',false);
                $('#password').prop('disabled',false);
                $('#empEmail').prop('disabled',false);
              }
            });
            //end skip create account
         
            var max_field      = 5;
            var prof           = $(".add_profession");
            var button         = $(".add-prof");
            var professiona     = $('#professionalClass').clone(true);
            
            var x = 1;
            $(button).click(function(e){
                e.preventDefault();
                  if(x < max_field){ 
                    x++;
                    //professiona.find('#professionalClass').removeAttr('id');
                    professiona.find('#professionalYearStarted1').attr('id', 'professionalYearStarted'+x);
                    professiona.find('#professionalYearEnded1').attr('id', 'professionalYearEnded'+x);
                    $(prof).append('<div id="ah'+x+'"></div>');
                    $('#ah'+x).append(professiona);
                    $('#ah'+x).find('#professionalClass').removeAttr('id');
                    $('#ah'+x).append('<button class="btn btn-danger btn-md waves-effect waves-light m-b-5 m-l-15 remove">Remove</button>');
                    $('#ah'+x).append('<script type="text/javascript">'
                      +'\n$("#professionalYearEnded'+x+'").change(function(ev) {'
                          +'\nvar $start =  Date.parse($("#professionalYearStarted'+x+'").val());'
                                  +'\nvar $end = Date.parse($("#professionalYearEnded'+x+'").val());'
                                  +'\nif(isNaN($start)) {'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The start date must not be empty!",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#professionalYearEnded'+x+'").val("");'
                                              +'\n});'
                                  +'\n} else {'
                                      +'\nif($start > $end)'
                                          +'\n{'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The end date can not be less than the start date",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#professionalYearEnded'+x+'").val("");'
                                              +'\n});'
                                          +'\n}'
                                  +'\n}'
                      +'\n});'
                      +'\n$("#professionalYearStarted'+x+'").change(function() {'
                          +'\nvar $start =  Date.parse($("#professionalYearStarted'+x+'").val());'
                                  +'\nvar $end = Date.parse($("#professionalYearEnded'+x+'").val());'
                                  +'\nif(!isNaN($start)) {'
                                    +'\nif($start > $end)'
                                          +'\n{'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The end date can not be less than the start date",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#professionalYearEnded'+x+'").val("");'
                                              +'\n});'
                                          +'\n}'
                                  +'\n}'
                      +'\n});'
                    +'\n<'+'/'+'script>');
                    professiona     = $('#professionalClass').clone(true);
                }
            });
         
             $(prof).on("click",".remove", function(e){ 
              e.preventDefault(); $(this).parent('div').remove(); x--;
            })
         
            var max_fields      =10;
            var seminar         = $(".add_seminar");
            var addbutton       = $(".add-seminar");
            var training        = $('#seminar').clone(true);
            
            var y = 1;
            $(addbutton).click(function(e){
                e.preventDefault();
                  if(y < max_fields){ 
                    y++;
                    training.find('#seminar').attr('id', 'seminar'+y);
                    training.find('#topicDateStarted').attr('id', 'topicDateStarted'+y);
                    training.find('#topicDateEnded').attr('id', 'topicDateEnded'+y);
                    $(seminar).append('<div id="topicseminar'+y+'"></div>');
                    $('#topicseminar'+y).append(training);
                    $('#topicseminar'+y).append('<script type="text/javascript">'
                      +'\n$("#topicDateEnded'+y+'").change(function(ev) {'
                          +'\nvar $start =  Date.parse($("#topicDateStarted'+y+'").val());'
                                  +'\nvar $end = Date.parse($(this).val());'
                                  +'\nif(isNaN($start)) {'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The start date must not be empty!",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#topicDateStarted'+y+'").val("");'
                                              +'\n});'
                                  +'\n} else {'
                                      +'\nif($start > $end)'
                                          +'\n{'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The end date can not be less than the start date",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#topicDateStarted'+y+'").val("");'
                                              +'\n});'
                                          +'\n}'
                                  +'\n}'
                      +'\n});'
                      +'\n$("#topicDateStarted'+y+'").change(function() {'
                          +'\nvar $start =  Date.parse($(this).val());'
                                  +'\nvar $end = Date.parse($("#topicDateStarted'+y+'").val());'
                                  +'\nif(!isNaN($start)) {'
                                    +'\nif($start > $end)'
                                          +'\n{'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The end date can not be less than the start date",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#topicDateStarted'+y+'").val("");'
                                              +'\n});'
                                          +'\n}'
                                  +'\n}'
                      +'\n});'
                    +'\n<'+'/'+'script>');
                    $('#topicseminar'+y).append('<button class="btn btn-danger btn-md waves-effect waves-light m-b-30 delete">Remove</button>');
                }
                training        = $('#seminar').clone();
          });
         
            $(seminar).on("click",".delete", function(e){ 
              e.preventDefault(); $(this).parent('div').remove(); y--;
            })
         
            var max            =5;
            var details        = $(".work_details"); //Fields wrapper
            var add            = $(".add-inputs"); //Add button ID
            var work           = $(".workdetails").clone(true);
            
            var z = 1; //initlal text box count
            $(add).click(function(e){ //on add input button click
                e.preventDefault();
                  if(z < max_fields){ 
                    z++; //text box increment
                    work.find('#expYearStart1').attr('id', 'expYearStart'+z);
                    work.find('#expYearEnd1').attr('id', 'expYearEnd'+z);
                    $(details).append('<div name="work" id="work'+(z-1)+'"></div>');
                    $("#work"+(z-1)).append(work);
                    $("#work"+(z-1)).append('<script type="text/javascript">'
                      +'\n$("#expYearEnd'+z+'").change(function(ev) {'
                          +'\nvar $start =  Date.parse($("#expYearStart'+z+'").val());'
                                  +'\nvar $end = Date.parse($(this).val());'
                                  +'\nif(isNaN($start)) {'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The start date must not be empty!",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#expYearEnd'+z+'").val("");'
                                              +'\n});'
                                  +'\n} else {'
                                      +'\nif($start > $end)'
                                          +'\n{'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The end date can not be less than the start date",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#expYearEnd'+z+'").val("");'
                                              +'\n});'
                                          +'\n}'
                                  +'\n}'
                      +'\n});'
                      +'\n$("#expYearStart'+z+'").change(function() {'
                          +'\nvar $start =  Date.parse($(this).val());'
                                  +'\nvar $end = Date.parse($("#expYearEnd'+z+'").val());'
                                  +'\nif(!isNaN($start)) {'
                                    +'\nif($start > $end)'
                                          +'\n{'
                                              +'\nsweetAlert({'
                                                    +'\ntitle:"ERROR!!!",'
                                                    +'\ntext: "The end date can not be less than the start date",'
                                                    +'\ntype:"error"'
                                              +'\n},function(isConfirm){'
                                                    +'\n$("#expYearEnd'+z+'").val("");'
                                              +'\n});'
                                          +'\n}'
                                  +'\n}'
                      +'\n});'
                    +'\n<'+'/'+'script>');
                    $("#work"+(z-1)).append('<button class="btn btn-danger btn-md waves-effect waves-light m-b-30 del">Remove</button>');
                }
                work           = $(".workdetails").clone(true);
          });
         
            $(details).on("click",".del", function(e){ 
              e.preventDefault(); $(this).parent('div').remove(); z--;
            });
         
            var maxx            =4;
            var input        = $(".input-dependent"); //Fields wrapper
            var add_dependent            = $(".add-dependent"); //Add button ID
            var dependent           = $('.dependent').html();
            
            var d = 1; //initlal text box count
         
            $(add_dependent).click(function(e){ //on add input button click
                e.preventDefault();
                  if(d < maxx){ 
                    d++; //text box increment
                    $(input).append('<div>'
         
                      +'\n<div class="row">'
                        +'\n<div class="col-xs-12">'
                          +'\n<div class="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 clearfix">'
                          +'\n<label class="col-xs-12 control-label" for="mothersHighEduc">Dependent Name</label>'
                            +'\n<div class="col-xs-12">'
                              +'\n<input class="required form-control displayValue" id="dependentName'+d+'" name="dependentName[]" type="text">'
                            +'\n</div>'
                          +'\n</div>'
                          +'\n<div class="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 clearfix">'
                            +'\n<label class="col-xs-12 control-label" for="birthDay">Dependent Birthday</label>'
                            +'\n<div class="col-xs-12">'
                                  +'\n<input class="form-control" size="16" type="date" value="" id="dependentDOB'+d+'" name="dependentDOB[]">'
                            +'\n</div>'
                          +'\n</div>'
                        +'\n</div> '
                      +'\n</div>'
         
                      +'\n<button class="btn btn-danger btn-md waves-effect waves-light  m-b-5 m-l-15 rem">Remove</button></div>'
                      );
         
                    }
                    if(d==maxx)
                    {
                      add_dependent.prop('disabled', true);
                    }
         
               var dName1 = document.getElementById('dependentName2');
               dName1.addEventListener('blur', function(event) {
                  if(/^\s/g.test(dName1.value)) {
                    dName1.value = dName1.value.replace(/^\s+/,'');   
                  }
               });
               var dName2 = document.getElementById('dependentName3');
               dName2.addEventListener('blur', function(event) {
                  if(/^\s/g.test(dName2.value)) {
                    dName2.value = dName2.value.replace(/^\s+/,'');   
                  }
               });
               var dName3 = document.getElementById('dependentName4');
               dName3.addEventListener('blur', function(event) {
                  if(/^\s/g.test(dName3.value)) {
                    dName3.value = dName3.value.replace(/^\s+/,'');   
                  }
               });
          });
            
          // nospaces in dependent
            var dName = document.getElementById('dependentName');
            dName.addEventListener('blur', function(event) {
               if(/^\s/g.test(dName.value)) {
                 dName.value = dName.value.replace(/^\s+/,'');   
               }
            });
            // $(document).on('click', '.add-dependent', function(){
            //    var dName1 = document.getElementById('dependentName2');
            //    dName1.addEventListener('keyup', function(event) {
            //       if(/^\s/g.test(dName1.value)) {
            //         dName1.value = dName1.value.replace(/^\s+/,'');   
            //       }
            //    });
            //    var dName2 = document.getElementById('dependentName3');
            //    dName2.addEventListener('keyup', function(event) {
            //       if(/^\s/g.test(dName2.value)) {
            //         dName2.value = dName2.value.replace(/^\s+/,'');   
            //       }
            //    });
            //    var dName3 = document.getElementById('dependentName4');
            //    dName3.addEventListener('keyup', function(event) {
            //       if(/^\s/g.test(dName3.value)) {
            //         dName3.value = dName3.value.replace(/^\s+/,'');   
            //       }
            //    });
            // });
            
         
         
         
         
         
            $(input).on("click",".rem", function(e){ 
              e.preventDefault(); $(this).parent('div').remove(); d--;
              if(d < maxx){
                add_dependent.prop('disabled', false);
              }
            })
         });
         
            function readURL(input) {
              if (input.files && input.files[0]) {
                var reader = new FileReader();
                  
                reader.onload = function (e) {
                    $('#blah').attr('src', e.target.result)
                    .width(230)
                    .height(230);
                }
                
                reader.readAsDataURL(input.files[0]);
              }
            }
            function readURL1(input) {
              if (input.files && input.files[0]) {
                var reader = new FileReader();
                  
                reader.onload = function (e) {
                    $('#blah1').attr('src', e.target.result)
                    .width(230)
                    .height(230);
                }
                
                reader.readAsDataURL(input.files[0]);
              }
            }
            function readURL2(input) {
              if (input.files && input.files[0]) {
                var reader = new FileReader();
                  
                reader.onload = function (e) {
                    $('#blah2').attr('src', e.target.result)
                    .width(230)
                    .height(230);
                }
                
                reader.readAsDataURL(input.files[0]);
              }
            }
          
          $("#file").change(function(){
              readURL(this);
          });
          $("#imgInp1").change(function(){
              readURL1(this);
          });
          $("#imgInp2").change(function(){
              readURL2(this);
          });
         
          // $(function () {
          //     $('#datetimepicker1').datetimepicker();
          //     $('#datetimepicker2').datetimepicker({
          //         useCurrent: false //Important! See issue #1075
          //     });
          //     $("#datetimepicker1").on("dp.change", function (e) {
          //         $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
          //     });
          //     $("#datetimepicker2").on("dp.change", function (e) {
          //         $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
          //     });
          //   });
         
          // var stat = document.getElementById("btnSubmitForm").value;
         
          // if(document.getElementById('btnSubmitForm').style.display='none';){
          //   document.getElementById('tabcj').style.pointerEvents='auto';
          // }else{
          //   document.getElementById('tabcj').style.pointerEvents='auto';
          // }
         
          //
          function status() {
              var status = document.getElementById("maritalStatus").value;
              switch(status){
                case "Single":
                document.getElementById('spouseInfo').style.display='none';
                $('#spouseName').prop('hidden', true);
              //$('#childsName').prop('hidden', true);
                $('#spouseName').val('');
             // $('#childsName').val('NONE');
                break;
                case "Married":
                document.getElementById('spouseInfo').style.display='block';
                $('#spouseName').prop('hidden', false);
             // $('#childsName').prop('hidden', false);
                break;
                case "Separated":
                document.getElementById('spouseInfo').style.display='block';
                $('#spouseName').prop('hidden', false);
              //$('#childsName').prop('hidden', false);
                break;
                case "Divorced":
                document.getElementById('spouseInfo').style.display='none';
                $('#spouseName').prop('hidden', true);
              //$('#childsName').prop('hidden', true);
                $('#spouseName').val('');
              //$('#childsName').val('NONE');
                break;
                case "Widowed":
                document.getElementById('spouseInfo').style.display='block';
                $('#spouseName').prop('hidden', true);
              //$('#childsName').prop('hidden', true);
                break;
              }
          }
          
         
          //mirror
          //Personal Info
          $('#employeeNo').keyup(function() {
            $('#employeeNo2').html($(this).val());
          });
          $('#staffDepartment').change(function() {
            $('#staffDepartment2').html($(this).val());
          });
          $('#tab8').click(function() {
            $('#staffRole2').html($('#role').val());
          });
          $('#license').change(function() {
            $('#license2').html($(this).val());
          });
          $('#empPayRate').keyup(function() {
            $('#empPayRate2').html($(this).val());
            // console.log($('#empPayRate2').html($(this).val()))
          });
          $('#tab8').click(function() {
            $('#license').html($('#license').val());
            $('#empPayRate2').html($('#empPayRate').val());
            $('#permanentZipCode2').html($('#permanentZipCode').val());
            $('#permanentLandLine2').html($('#permanentLandLine').val());
          });
          $('#btnNext').click(function() {
            $('#license').html($('#license').val());
            $('#empPayRate2').html($('#empPayRate').val());
            $('#permanentZipCode2').html($('#permanentZipCode').val());
            $('#permanentLandLine2').html($('#permanentLandLine').val());
            $('#staffRole2').html($('#role').val());
            $('#empNationality2').html($('#empNationality').val());
            $('#religion2').html($('#religion').val());
          });
          
          $('#tab8').click(function() {
            $('#empPayRate2').html($('#empPayRate').val());
          });
          $('#empLastName').keyup(function() {
            $('#empLastName2').html($(this).val());
          });
          $('#empFirstName').keyup(function() {
            $('#empFirstName2').html($(this).val());
          });
          $('#empMiddleName').keyup(function() {
            $('#empMiddleName2').html($(this).val());
          });
           $('#tab8').click(function() {
            $('#religion2').html($('#religion').val());
          });
          $('#tab8').click(function() {
            $('#empNationality2').html($('#empNationality').val());
          });
          $('#tab8').click(function() {
            $('#employeeBirthDay2').html($('#employeeBirthDay').val());
          });
          $('#btnNext').click(function(){
            $('#employeeBirthDay2').html($('#employeeBirthDay').val());
          });
          $('#empHeight').keyup(function() {
            $('#empHeight2').html($(this).val());
          });
          $('#empWeight').keyup(function() {
            $('#empWeight2').html($(this).val());
          });
          $('#bloodType').change(function() {
            $('#bloodType2').html($(this).val());
          });
          $('#maritalStatus').change(function() {
            $('#maritalStatus2').html($(this).val());
          });
          $('#empAllergies').keyup(function() {
            $('#empAllergies2').html($(this).val());
          });
          $('#tab8').click(function() {
            $('#gender2').html($('input[name=gender]:checked').val());
          });
          $('#btnNext').click(function() {
            $('#gender2').html($('input[name=gender]:checked').val());
          });
          $('#empEmail').keyup(function() {
            $('#empEmail2').html($(this).val());
          });
          $('#empMobile').keyup(function() {
            $('#empMobile2').html($(this).val());
          });
          $('#remarks').keyup(function() {
            $('#remarks2').html($(this).val());
          });
          //Address Info
          $('#presentAddress').keyup(function() {
            $('#presentAddress2').html($(this).val());
          });
          $('#zipCode').keyup(function() {
            $('#zipCode2').html($(this).val());
          });
          $('#landLineNo').keyup(function() {
            $('#landLineNo2').html($(this).val());
          });
          $('#permanentAddress').keyup(function() {
            $('#permanentAddress2').html($(this).val());
          });
          $('#permanentZipCode').keyup(function() {
            $('#permanentZipCode2').html($('this').val());
          });
          $('#permanentLandLine').keyup(function() {
            $('#permanentLandLine2').html($(this).val());
          });
          //Family Info
          $('#fathersName').keyup(function() {
            $('#fathersName2').html($(this).val());
          });
          $('#fathersOccupation').keyup(function() {
            $('#fathersOccupation2').html($(this).val());
          });
          $('#fathersHighEduc').keyup(function() {
            $('#fathersHighEduc2').html($(this).val());
          });
          $('#mothersName').keyup(function() {
            $('#mothersName2').html($(this).val());
          });
          $('#mothersOccupation').keyup(function() {
            $('#mothersOccupation2').html($(this).val());
          });
          $('#mothersHighEduc').keyup(function() {
            $('#mothersHighEduc2').html($(this).val());
          });
          $('#spouseName').keyup(function() {
            $('#spouseName2').html($(this).val());
          });
          $('#tab8').click(function() {
            $('#birthDay2').html($('#birthDay').val());
          });
          $('#btnNext').click(function() {
            $('#birthDay2').html($('#birthDay').val());
          });
          $('#spouseOccupation').keyup(function() {
            $('#spouseOccupation2').html($(this).val());
          });
          $('#childsName').keyup(function() {
            $('#childsName2').html($(this).val());
          });
          //Educ Info
              //high school
          // $('#btnNext').click(function() {
          //   $('#nameOfSchool2').html( $('#nameOfSchool').val()+' ' +'('+$('#yearStarted').val()+' - '+$('#yearEnded').val()+')');
          // });
          // $('#tab8').click(function() {
          //    $('#nameOfSchool2').html( $('#nameOfSchool').val()+' ' +'('+$('#yearStarted').val()+' - '+$('#yearEnded').val()+')');
          // });
          // $('#hsAddress').keyup(function() {
          //   $('#hsAddress2').html($(this).val());
          // });
              //college
          $('#btnNext').click(function() {
            $('#collegeNameOfSchool2').html( $('#collegeNameOfSchool').val()+' ' +'('+$('#collegeYearStarted').val()+' - '+$('#collegeYearEnded').val()+')');
          });
          $('#tab8').click(function() {
          $('#collegeNameOfSchool2').html( $('#collegeNameOfSchool').val()+' ' +'('+$('#collegeYearStarted').val()+' - '+$('#collegeYearEnded').val()+')');
          });
          $('#collegeEducationalAttainment').keyup(function() {
            $('#collegeEducationalAttainment2').html($(this).val());
          });
          $('#collegeAddress').keyup(function() {
            $('#collegeAddress2').html($(this).val());
          });
            //professional
          // $('#btnNext').click(function() {
          //   $('#professionalNameOfSchool2').val( $('#professionalNameOfSchool').val()+' ' +'('+$('#professionalYearStarted').val()+' - '+$('#professionalYearEnded').val()+')');
          // });
          $('.add-prof').click(function(){
          console.log($('input#professionalNameOfSchool').val());  
          })
           var count = $('input#professionalNameOfSchool').val();
          $('#tab8').click(function() {
            if($('input#professionalNameOfSchool').length > 1)
                {
                  for($i=0;$i<$('input#professionalNameOfSchool').length;$i++)
                  {
                     $('#professionalNameOfSchool2').html( $('#professionalNameOfSchool').val()+' ' +'('+$('#professionalYearStarted').val()+' - '+$('#professionalYearEnded').val()+')');
                    $('.prof-last').after('<tr><td>Name of School</td><td><input type="text" id="professionalNameOfSchool2" style="border: none; width: 100%; background-color: transparent;" name="professionalNameOfSchool2" value="'+ count[$i]+'" readonly></td></tr>');
         
                  }
               }
           else
           {
             $('#professionalNameOfSchool2').html( $('#professionalNameOfSchool').val()+' '+'('+$('#professionalYearStarted1').val()+' - '+$('#professionalYearEnded1').val()+')');
              // });
              // $('#professionalEducAttainment').keyup(function() {
                $('#professionalEducAttainment2').html($('#professionalEducAttainment').val());
              // });
              // $('#professionalAddress').keyup(function() {
                $('#professionalAddress2').html($('#professionalAddress').val());
           }
          });
              //traning/seminar detail
          $('#btnNext').click(function() {
            $('#topicName2').html( $('#topicName').val()+' ' +'('+$('#topicDateStarted').val()+' - '+$('#topicDateEnded').val()+')');
          });
          $('#tab8').click(function() {
            $('#topicName2').html( $('#topicName').val()+' ' +'('+$('#topicDateStarted').val()+' - '+$('#topicDateEnded').val()+')');
          });
          $('#topicAddress').keyup(function() {
            $('#topicAddress2').html($(this).val());
          });
          //Work Experience
          $('#btnNext').click(function() {
            $('#expNameOfCompany2').html( $('#expNameOfCompany').val()+' ' +'('+$('#expYearStart1').val()+' - '+$('#expYearEnd1').val()+')');
          });
          $('#tab8').click(function() {
            $('#expNameOfCompany2').html( $('#expNameOfCompany').val()+' ' +'('+$('#expYearStart1').val()+' - '+$('#expYearEnd1').val()+')');
          });
          $('#expOldSupervisor').keyup(function() {
            $('#expOldSupervisor2').html($(this).val());
          });
          $('#expAddress').keyup(function() {
            $('#expAddress2').html($(this).val());
          });
          $('#expReasonOfLeaving').keyup(function() {
            $('#expReasonOfLeaving2').html($(this).val());
          });
          $('#expSkills').keyup(function() {
            $('#expSkills2').html($(this).val());
          });
          $('#refOneName').keyup(function() {
            $('#refOneName2').html($(this).val());
          });
          $('#refYearAcquainted').keyup(function() {
            $('#refYearAcquainted2').html($(this).val());
          });
          $('#refContactNo').keyup(function() {
            $('#refContactNo2').html($(this).val());
          });
          $('#refEmailAddress').keyup(function() {
            $('#refEmailAddress2').html($(this).val());
          });
          $('#refOccupation').keyup(function() {
            $('#refOccupation2').html($(this).val());
          }); 
          $('#refCompanyName').keyup(function() {
            $('#refCompanyName2').html($(this).val());
          });
          $('#refAddress').keyup(function() {
            $('#refAddress2').html($(this).val());
          });
          $('#refTwoName').keyup(function() {
            $('#refTwoName2').html($(this).val());
          });
          $('#refTwoYearAcquainted').keyup(function() {
            $('#refTwoYearAcquainted2').html($(this).val());
          });
          $('#refTwoContactNo').keyup(function() {
            $('#refTwoContactNo2').html($(this).val());
          });
          $('#refTwoEmailAddress').keyup(function() {
            $('#refTwoEmailAddress2').html($(this).val());
          });
          $('#refTwoOccupation').keyup(function() {
            $('#refTwoOccupation2').html($(this).val());
          }); 
          $('#refTwoCompanyName').keyup(function() {
            $('#refTwoCompanyName2').html($(this).val());
          });
          $('#refTwoAddress').keyup(function() {
            $('#refTwoAddress2').html($(this).val());
          });
          



         $('input[name=gender]').click(function() {
           $('#employment').show();
         });
         
         $('#regular').click(function() {
           $('#mat_leave, #vac_leave, #sick_leave').show();
           if ($('input[name=gender]:checked').val() == 'Male'){
             $('#mat_leave').hide();
             $('#maternalLeave').val('');
               $('.male').click(function() {
                 $('#maternalLeave').val('');
                 $('#mat_leave').hide();
                 
               });
               $('.female').click(function() {
                 $('#mat_leave').show();
               });
           }else{
             $('#mat_leave').show();
           }
         });
         $('#not_regular').click(function() {
           $('#mat_leave, #vac_leave, #sick_leave').hide();
           $('#maternalLeave, #vacLeave, #sickLeave').val('');
         }); 

         $(document).ready(function(){
             if($('#staffDepartment').val() == ''){
                $("#staffRole").attr('disabled',true)
             }
           });
             $selectRole = $('#staffRole'),
             $optionsRole = $selectRole.find('option');
           
           $('#staffDepartment').change(function(){
               $selectRole.html($optionsRole.filter('[value="' + this.value + '"]'));
               $("#role").val($('#staffRole option:selected').text());
               $("#staffRole").attr('disabled',false)
               
               disabled();
               $('#toogleValidationEmployee').formValidation('revalidateField', 'license');
            })
           
           $('#staffRole').change(function(){
              $("#role").val($('#staffRole option:selected').text());
           
              disabled();
              $('#toogleValidationEmployee').formValidation('revalidateField', 'license');
           
           })
           
           function disabled(){
             var role = $('#role').val();
           
                if(role == "Secretary" || role == "Registrar" || role == "Guidance Assistant" || role == "Director of Finance" || role == "Librarian" || role == "Assistant Librarian" || role == "Conductor" || role == "Auditor" || role == "Janitor" || role == "Helper" || role == "Gardener"){
                    $("#license").attr("readonly", true); 
                    $("#license").val("N/A");
                }
           
                else{ 
                    $("#license").attr("readonly", false); 
                    $("#license").val(""); 
                }
           }

         $(document).ready(function(){
           $('#staffMajordiv').hide();
         });
         $('#staffDepartment').change(function(){
           var dept = $(this).val();
           if (dept == 'Teacher'){
             // alert('me');
             $('#staffMajordiv').show();
           }else{
             $('#staffMajordiv').hide();
           }
         })

         $(document).ready(function(){
           $('.others').hide();
             var maxx         =  5;
             var input        = $(".input-others"); //Fields wrapper
             var add_other   = $("#addOther"); //Add button ID
             var other       = $('.others').html();
             
              var d = 0; //initlal text box count
              $(add_other).click(function(e){ //on add input button click
                  e.preventDefault();
                    if(d < maxx){ 
                      d++; //text box increment
                      $(input).append('<div class="form-group">'+other+'<button class="btn btn-danger btn-md waves-effect waves-light rem pull-right" style="margin-right: 60px;">Remove</button></div>');
                  }
               });
         
              $(input).on("click",".rem", function(e){ 
                e.preventDefault(); $(this).parent('div').remove(); d--;
              })
         });

         function printDiv() 
         {
           var divToPrint=document.getElementById('AppForm');
           var newWin=window.open('','Print-Window');
           newWin.document.open();
           newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
           newWin.document.close();
           setTimeout(function(){newWin.close();},10);
         }
