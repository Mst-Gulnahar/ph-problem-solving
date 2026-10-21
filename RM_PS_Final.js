var solveMeFirst = function(a, b) {
    return a + b;
};

var multiply = function(a, b) {
    return a * b;
};

var evenOrOdd = function(number) {
    return number % 2 === 0 ? "Even" : "Odd";
};

var makeNegative = function(number) {
    return -Math.abs(number);
};

var opposite = function(number) {
    return -number;
};

var simpleArraySum = function(ar) {
    return ar.reduce((sum, num) => sum + num, 0);
};

var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};

var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};

var sumDouble = function(a, b) {
    return a === b ? 2 * (a + b) : a + b;
};

var diff21 = function(n) {
    var difference = Math.abs(n - 21);
    return n > 21 ? difference * 2 : difference;
};

var parrotTrouble = function(talking, hour) {
    return talking && (hour < 7 || hour > 20);
};

var makes10 = function(a, b) {
    return a === 10 || b === 10 || a + b === 10;
};

var nearHundred = function(n) {
    return Math.abs(n - 100) <= 10 ||
           Math.abs(n - 200) <= 10;
};

var posNeg = function(a, b, negative) {
    if (negative) {
        return a < 0 && b < 0;
    }

    return (a < 0 && b > 0) ||
           (a > 0 && b < 0);
};

var notString = function(str) {
    return str.startsWith("not") ? str : "not " + str;
};

var compareTriplets = function(a, b) {
    var alice = 0;
    var bob = 0;

    for (var i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }

    return [alice, bob];
};

var aVeryBigSum = function(ar) {
    return ar.reduce((sum, num) => sum + num, 0);
};

var staircase = function(n) {
    var result = [];

    for (var i = 1; i <= n; i++) {
        result.push(" ".repeat(n - i) + "#".repeat(i));
    }

    return result.join("\n");
};

var gradingStudents = function(grades) {
    return grades.map(function(grade) {
        if (grade < 38) {
            return grade;
        }

        var next = Math.ceil(grade / 5) * 5;
        return next - grade < 3 ? next : grade;
    });
};

var timeConversion = function(s) {
    var period = s.slice(-2);
    var parts = s.slice(0, -2).split(":");
    var hour = Number(parts[0]);

    if (period === "AM" && hour === 12) {
        hour = 0;
    } else if (period === "PM" && hour !== 12) {
        hour += 12;
    }

    return String(hour).padStart(2, "0") +
           ":" + parts[1] + ":" + parts[2];
};

var repeatStr = function(n, s) {
    return s.repeat(n);
};

var solution = function(str) {
    return str.split("").reverse().join("");
};

var positiveSum = function(arr) {
    return arr.reduce(
        (sum, num) => sum + (num > 0 ? num : 0),
        0
    );
};

var summation = function(num) {
    return num * (num + 1) / 2;
};

var booleanToString = function(b) {
    return String(b);
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        solveMeFirst,
        multiply,
        evenOrOdd,
        makeNegative,
        opposite,
        simpleArraySum,
        sleepIn,
        monkeyTrouble,
        sumDouble,
        diff21,
        parrotTrouble,
        makes10,
        nearHundred,
        posNeg,
        notString,
        compareTriplets,
        aVeryBigSum,
        staircase,
        gradingStudents,
        timeConversion,
        repeatStr,
        solution,
        positiveSum,
        summation,
        booleanToString
    };
}
