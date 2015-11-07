var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
var tbl = document.createElement('table');
var form = document.getElementById('location-form');

function CookieStand (location, minHourCust, maxHourCust, aveCookieCust) {
  this.location = location;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.aveCookieCust = aveCookieCust;
  this.hourTotals = [];
  this.dailyTotal = 0;

  this.randomCustHour = function() {
    return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust + 1)
      + this.minHourCust);
  };

  this.cookiesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      var cph = Math.floor(this.aveCookieCust * this.randomCustHour());
      console.log('The number of cookies purchased for each hour is ' + cph);
      this.hourTotals.push(cph);
      this.dailyTotal += cph;
      console.log('The sum of these hourly totals is ' + this.dailyTotal);
    }
  };

  this.makeList = function() {
    this.cookiesPerHour();
    console.log('The hourly totals are: ' + this.hourTotals);
    console.log('The daily total is: ' + this.dailyTotal);
    var heading = document.createElement('tr');
    console.log(heading);
    var blank = document.createElement('td');
    blank.textContent = '';

    var headerRow = document.createElement('thead');
    headerRow.appendChild(blank);

    for (i = 0; i < hours.length; i++) {
      var td = document.createElement('td');
      td.innerHTML = hours[i];
      headerRow.appendChild(td);
    }

    tbl.appendChild(headerRow);

    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.location;
    row.appendChild(location);

    for(var i = 0; i < hours.length; i++) {
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourTotals[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
  }
document.body.appendChild(tbl);
};

var pikePlaceMarket = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand("South Center Mall", 11, 38, 1.9);
var bellevueSquare = new CookieStand("Bellevue Square Mall", 20, 48, 3.3);
var alki = new CookieStand("Alki Beach", 3, 24, 2.6);

pikePlaceMarket.makeList();
seaTac.makeList();
southCenter.makeList();
bellevueSquare.makeList();
alki.makeList();



var handleForm = function(event) {
  event.preventDefault();

   if (!event.target.locationname.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcust.value) {
    return alert('Fields cannot be empty!');
   }

var loc = event.target.locationname.value;
var min = parseInt(event.target.mincust.value);
var max = parseInt(event.target.maxcust.value);
var avg = parseInt(event.target.avgcust.value);

event.target.locationname.value = null;
event.target.mincust.value = null;
event.target.maxcust.value = null;
event.target.avgcust.value = null;


var newShop = new CookieStand(loc, min, max, avg);

newShop.makeList();


};


form.addEventListener("submit", handleForm);
