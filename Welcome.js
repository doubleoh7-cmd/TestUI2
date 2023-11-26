var today = new Date();
var time = today.getHours();
var greet;

if (time >= 18) {
    greet = 'Good Evening,';
} else if (time >= 12) {
    greet = 'Good Afternoon,';
} else if (time >= 0) {
    greet = 'Good Morning,';
} else {
    greet = 'Hey Welcome,';
}

var show = document.getElementById('message');
show.textContent = greet;