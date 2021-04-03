
var currentDate = moment().format("dddd, MMMM Do YYYY");
var textArea = document.querySelectorAll("textarea");
//displays current date 
$("#currentDay").text(currentDate)


//local storage to save user information
$(".saveBtn").on("click", function () {
    console.log(this)
    var id = $(this).siblings("textarea").attr("id")
    var valueText = $(this).siblings("textarea").val()
    console.log(id, valueText)
    localStorage.setItem(id, valueText)

})
//retrieves information from local storage 
$("#hour9").val(localStorage.getItem('hour9'))
$("#hour10").val(localStorage.getItem('hour10'))
$("#hour11").val(localStorage.getItem('hour11'))
$("#hour12").val(localStorage.getItem('hour12'))
$("#hour1").val(localStorage.getItem('hour1'))
$("#hour2").val(localStorage.getItem('hour2'))
$("#hour3").val(localStorage.getItem('hour3'))
$("#hour4").val(localStorage.getItem('hour4'))
$("#hour5").val(localStorage.getItem('hour5'))
//still cna get it to work but should make it change colors
function colorChange() {
    var time = moment().hour()
    console.log(time)
    var group = document.querySelectorAll(".input-group");
    for (var i = 0; i < group.length; i++) {
        var span = group[i].children[0].children[0].textContent
        span = parseInt(span.split(":")[0])
        if (span >= 1 && span <= 5) {
            span += 12
        }
        console.log(span)
        if(span < time ){
           $("textarea").addClass("past");
        }else if (span === time){
            $("textarea").addClass("present");
        } else {
            $("textarea").addClass("future");
        }
    }
}
colorChange();