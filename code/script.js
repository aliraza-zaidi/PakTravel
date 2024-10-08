function redirectHome(){
    window.location.href='#home';
}
function showSubmittedInfo() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var tour = document.getElementById("tour").value;
    var date = document.getElementById("date").value;
    var number = document.getElementById("number").value;

    if (name && email && phone && tour && date && number) {
        var info = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nTour:" + tour + "\nDate:" + date + "\nNumber of Bookings:" + number + "\nThank You for Submitting Information!";
        alert(info);
        redirectHome();
    } else {
        confirm("Please complete all the fields before submitting.");
    }
}