/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $( ".datePicker" ).datepicker({
        minDate: '-80Y',
        maxDate: '-18Y',
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true
    });
});
