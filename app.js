var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'

var pikePlaceMarket = {
  minHourCust: 17,
  minHourCust: 88,
  aveCookieCust 5.2,
  hourTotals: [],
  dailyTotal: 0,

  randomCustHour: function() {
    return Math.floor(Math.random() * (this.minHourCust - this.minHourCust + 1)
      + this.minHourCust);
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hours.length, i++) {
    var cookiesPerHour = Math.floor(this.aveCookieCust * this.randomCustHour());
    console.log('The number of cookies purchased for each hour is ' + cookiesPerHour);
    this.hourTotals.push(cookiesPerHour);
    this.dailyTotal += cookiesPerHour;
    console.log('The sum of these hourly totals is ' + this.dailyTotal);
  },

  makeList: function() {
    this.cookiesPerHour();

    for (var i = 0; i < hours.length; i++) {
      var list = document.createElement('list');
      list.textContent = hours[i] + ': ' + this.hourTotals[i];
      pikeUl.appendChild(list);
    }
    var list = document.createElement('list');
    list.textContent = 'Daily Total: ' + this.dailyTotal;
    pikeUl.appendChild(list);

  }
};

var seaTacAir = {
  minHourCust: 6,
  minHourCust: 44,
  aveCookieCust 1.2,
  hourTotals: [],
  dailyTotal: 0,

};

var southMall = {
  minHourCust: 11,
  minHourCust: 38,
  aveCookieCust 1.9,
  hourTotals: [],
  dailyTotal: 0,

};

var bellevueSquare = {
  minHourCust: 20,
  minHourCust: 48,
  aveCookieCust 3.3,
  hourTotals: [],
  dailyTotal: 0,

};

var alki = {
  minHourCust: 3,
  minHourCust: 24,
  aveCookieCust 2.6,
  hourTotals: [],
  dailyTotal: 0,

};

var pikeUl = getElementById('pike')
var seaTacUl = getElementById('seaTac')
var southCenterUl = getElementById('southCenter')
var bellevueSquareUl = getElementById('bellevueSquare')
var alkiUL = getElementById('alki')

pikePlaceMarket.makeList()
seaTacAir.makeList()
southMall.makeList()
bellevueSquare.makeList()
alki.makeList()
