// Завдання 1
const car = {
  manufacturer: "Toyota",
  model: "Corolla",
  year: 2020,
  speed: 80,
  showInfo: function () {
    document.getElementById("carOutput").innerText =
      `Виробник: ${this.manufacturer}, Модель: ${this.model}, Рік: ${this.year}, Середня швидкість: ${this.speed} км/год`;
  },
  travelTime: function (distance) {
    let hours = distance / this.speed;
    let breaks = Math.floor(hours / 4);
    return hours + breaks;
  }
};

function calculateTravelTime() {
  const dist = parseFloat(document.getElementById("distance").value);
  if (isNaN(dist) || dist <= 0) {
    document.getElementById("carOutput").innerText = "Введіть коректну відстань!";
    return;
  }
  const time = car.travelTime(dist);
  document.getElementById("carOutput").innerText = `Час у дорозі: ${time.toFixed(2)} годин (з урахуванням перерв)`;
}

// Завдання 2
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function reduce(fraction) {
  let divisor = gcd(fraction.numerator, fraction.denominator);
  return {
    numerator: fraction.numerator / divisor,
    denominator: fraction.denominator / divisor
  };
}

function fractionsOperations() {
  let f1 = { numerator: 1, denominator: 2 };
  let f2 = { numerator: 2, denominator: 3 };

  function add(a, b) {
    let num = a.numerator * b.denominator + b.numerator * a.denominator;
    let den = a.denominator * b.denominator;
    return reduce({ numerator: num, denominator: den });
  }

  function subtract(a, b) {
    let num = a.numerator * b.denominator - b.numerator * a.denominator;
    let den = a.denominator * b.denominator;
    return reduce({ numerator: num, denominator: den });
  }

  function multiply(a, b) {
    return reduce({ numerator: a.numerator * b.numerator, denominator: a.denominator * b.denominator });
  }

  function divide(a, b) {
    return reduce({ numerator: a.numerator * b.denominator, denominator: a.denominator * b.numerator });
  }

  let output = `
    Додавання: ${add(f1, f2).numerator}/${add(f1, f2).denominator}<br>
    Віднімання: ${subtract(f1, f2).numerator}/${subtract(f1, f2).denominator}<br>
    Множення: ${multiply(f1, f2).numerator}/${multiply(f1, f2).denominator}<br>
    Ділення: ${divide(f1, f2).numerator}/${divide(f1, f2).denominator}<br>
  `;

  document.getElementById("fractionOutput").innerHTML = output;
}

// Завдання 3
let time = {
  hours: 20,
  minutes: 30,
  seconds: 45,

  show: function () {
    document.getElementById("timeOutput").innerText =
      `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
  },

  addSeconds: function (sec) {
    this.seconds += sec;
    this.minutes += Math.floor(this.seconds / 60);
    this.seconds %= 60;
    this.normalizeTime();
    this.show();
  },

  addMinutes: function (min) {
    this.minutes += min;
    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;
    this.normalizeTime();
    this.show();
  },

  addHours: function (hr) {
    this.hours += hr;
    this.normalizeTime();
    this.show();
  },

  normalizeTime: function () {
    this.hours %= 24;
  }
};
