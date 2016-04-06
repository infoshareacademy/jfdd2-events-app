'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    function getDecimals(n) {
        n = n + '';
        var i = n.indexOf('.');
        return (i == -1) ? 0 : n.length - i - 1;
    }

    function getVF(n, opt_precision) {
        var v = opt_precision;

        if (undefined === v) {
            v = Math.min(getDecimals(n), 3);
        }

        var base = Math.pow(10, v);
        var f = ((n * base) | 0) % base;
        return {v: v, f: f};
    }

    $provide.value("$locale", {
        "DATETIME_FORMATS": {
            "AMPMS": [
                "AM",
                "PM"
            ],
            "DAY": [
                "Niedziela",
                "Poniedzia\u0142ek",
                "Wtorek",
                "\u015aroda",
                "Czwartek",
                "Pi\u0105tek",
                "Sobota"
            ],
            "ERANAMES": [
                "p.n.e.",
                "n.e."
            ],
            "ERAS": [
                "p.n.e.",
                "n.e."
            ],
            "FIRSTDAYOFWEEK": 0,
            "MONTH": [
                "Stycze\u0144",
                "Luty",
                "Marzec",
                "Kwiecie\u0144",
                "Maj",
                "Czerwiec",
                "Lipiec",
                "Sierpie\u0144",
                "Wrze\u015bnia",
                "Pa\u017adziernika",
                "Listopada",
                "Grudzie\u0144"
            ],
            "SHORTDAY": [
                "Niedz.",
                "Pon.",
                "Wt.",
                "\u015ar.",
                "Czw.",
                "Pt.",
                "Sob."
            ],
            "SHORTMONTH": [
                "Sty",
                "Lut",
                "Mar",
                "Kwi",
                "Maj",
                "Cze",
                "Lip",
                "Sie",
                "Wrz",
                "Pa\u017a",
                "Lis",
                "Gru"
            ],
            "STANDALONEMONTH": [
                "Stycze\u0144",
                "Luty",
                "Marzec",
                "Kwiecie\u0144",
                "Maj",
                "Czerwiec",
                "Lipiec",
                "Sierpie\u0144",
                "Wrzesie\u0144",
                "Pa\u017adziernik",
                "Listopad",
                "Grudzie\u0144"
            ],
            "WEEKENDRANGE": [
                5,
                6
            ],
            "fullDate": "EEEE, d MMMM y",
            "longDate": "d MMMM y",
            "medium": "dd.MM.y HH:mm:ss",
            "mediumDate": "dd.MM.y",
            "mediumTime": "HH:mm:ss",
            "short": "dd.MM.y HH:mm",
            "shortDate": "dd.MM.y",
            "shortTime": "HH:mm"
        },
        "NUMBER_FORMATS": {
            "CURRENCY_SYM": "z\u0142",
            "DECIMAL_SEP": ",",
            "GROUP_SEP": "\u00a0",
            "PATTERNS": [
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 3,
                    "minFrac": 0,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "",
                    "posPre": "",
                    "posSuf": ""
                },
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 2,
                    "minFrac": 2,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "\u00a0\u00a4",
                    "posPre": "",
                    "posSuf": "\u00a0\u00a4"
                }
            ]
        },
        "id": "pl",
        "localeID": "pl",
        "pluralCat": function(n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  if (vf.v == 0 && i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 12 || i % 100 > 14)) {    return PLURAL_CATEGORY.FEW;  }  if (vf.v == 0 && i != 1 && i % 10 >= 0 && i % 10 <= 1 || vf.v == 0 && i % 10 >= 5 && i % 10 <= 9 || vf.v == 0 && i % 100 >= 12 && i % 100 <= 14) {    return PLURAL_CATEGORY.MANY;  }  return PLURAL_CATEGORY.OTHER;}
    });
}]);