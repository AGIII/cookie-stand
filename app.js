var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']

var pikePlaceMarket = {
  minHourCust: 17,
  maxHourCust: 88,
  aveCookieCust: 5.2,
  hourTotals: [],
  dailyTotal: 0,

  randomCustHour: function() {
    return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust + 1)
      + this.minHourCust);
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cph = Math.floor(this.aveCookieCust * this.randomCustHour());
      console.log('The number of cookies purchased for each hour is ' + cph);
      this.hourTotals.push(cph);
      this.dailyTotal += cph;
      console.log('The sum of these hourly totals is ' + this.dailyTotal);
    }
  },

  makeList: function() {
    this.cookiesPerHour();
    var pike = document.getElementById('pike');

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourTotals[i];
      pike.appendChild(li);
    }

    var li2 = document.createElement('li');
    li2.textContent = 'Daily Total: ' + this.dailyTotal;
    pike.appendChild(li2);

  }
};


var seaTacAir = {
  minHourCust: 6,
  maxHourCust: 44,
  aveCookieCust: 1.2,
  hourTotals: [],
  dailyTotal: 0,
  randomCustHour: function() {
    return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust + 1)
      + this.minHourCust);
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cph = Math.floor(this.aveCookieCust * this.randomCustHour());
      console.log('The number of cookies purchased for each hour is ' + cph);
      this.hourTotals.push(cph);
      this.dailyTotal += cph;
      console.log('The sum of these hourly totals is ' + this.dailyTotal);
    }
  },

  makeList: function() {
    this.cookiesPerHour();
    var seaTac = document.getElementById('seaTac');

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourTotals[i];
      seaTac.appendChild(li);
    }

    var li2 = document.createElement('li');
    li2.textContent = 'Daily Total: ' + this.dailyTotal;
    seaTac.appendChild(li2);

  }
};

var southMall = {
  minHourCust: 11,
  maxHourCust: 38,
  aveCookieCust: 1.9,
  hourTotals: [],
  dailyTotal: 0,
  randomCustHour: function() {
    return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust + 1)
      + this.minHourCust);
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cph = Math.floor(this.aveCookieCust * this.randomCustHour());
      console.log('The number of cookies purchased for each hour is ' + cph);
      this.hourTotals.push(cph);
      this.dailyTotal += cph;
      console.log('The sum of these hourly totals is ' + this.dailyTotal);
    }
  },

  makeList: function() {
    this.cookiesPerHour();
    var south = document.getElementById('south');

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourTotals[i];
      south.appendChild(li);
    }

    var li2 = document.createElement('li');
    li2.textContent = 'Daily Total: ' + this.dailyTotal;
    south.appendChild(li2);

  }
};

var bellevueSquare = {
  minHourCust: 20,
  maxHourCust: 48,
  aveCookieCust: 3.3,
  hourTotals: [],
  dailyTotal: 0,
  randomCustHour: function() {
    return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust + 1)
      + this.minHourCust);
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cph = Math.floor(this.aveCookieCust * this.randomCustHour());
      console.log('The number of cookies purchased for each hour is ' + cph);
      this.hourTotals.push(cph);
      this.dailyTotal += cph;
      console.log('The sum of these hourly totals is ' + this.dailyTotal);
    }
  },

  makeList: function() {
    this.cookiesPerHour();
    var bellevue = document.getElementById('bellevue');

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourTotals[i];
      bellevue.appendChild(li);
    }

    var li2 = document.createElement('li');
    li2.textContent = 'Daily Total: ' + this.dailyTotal;
    bellevue.appendChild(li2);

  }
};

var alki = {
  minHourCust: 3,
  maxHourCust: 24,
  aveCookieCust: 2.6,
  hourTotals: [],
  dailyTotal: 0,
  randomCustHour: function() {
    return Math.floor(Math.random() * (this.maxHourCust - this.minHourCust + 1)
      + this.minHourCust);
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cph = Math.floor(this.aveCookieCust * this.randomCustHour());
      console.log('The number of cookies purchased for each hour is ' + cph);
      this.hourTotals.push(cph);
      this.dailyTotal += cph;
      console.log('The sum of these hourly totals is ' + this.dailyTotal);
    }
  },

  makeList: function() {
    this.cookiesPerHour();
    var alkihtml = document.getElementById('alkihtml');

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourTotals[i];
      alkihtml.appendChild(li);
    }

    var li2 = document.createElement('li');
    li2.textContent = 'Daily Total: ' + this.dailyTotal;
    alkihtml.appendChild(li2);

  }
};

pikePlaceMarket.makeList();
seaTacAir.makeList();
southMall.makeList();
bellevueSquare.makeList();
alki.makeList();
