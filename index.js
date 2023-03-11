//Take input form keyboard keys 
var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', '^', '(', ')', '.'];
//Dom input element
var d = document.getElementById("d");
//Event listener for keyboard event
document.addEventListener('keydown', function (event) {
    var k = event.key;
    if (k == 'Delete') {
        clear_val();
    }
    if (k == 'Backspace') {
        back();
    }
    if (k == 'Enter' || k == '=') {
        if (d.value)
            equal();
    }
    if (keys.indexOf(k) !== -1) {
        d.value += k;
    }
    validate();
});
// math costum funcation for trigonometry 
Math.log10 = function (x) {
    return Math.log(x) / Math.log(10);
};
Math.sinh = function (x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
};
Math.atanh = function (x) {
    return Math.log((1 + x) / (1 - x)) / 2;
};
Math.cosh = function (x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
};
Math.tanh = function (x) {
    if (x === Infinity) {
        return 1;
    }
    else if (x === -Infinity) {
        return -1;
    }
    else {
        var y = Math.exp(2 * x);
        return (y - 1) / (y + 1);
    }
};
Math.asinh = function (x) {
    return Math.log(x + Math.sqrt(x * x + 1));
};
Math.acosh = function (x) {
    if (x < 1) {
        return NaN;
    }
    return Math.log(x + Math.sqrt(x * x - 1));
};
document.addEventListener("click", function () {
    validate();
});
function elem(val) {
    if (d.value == "invalid input") {
        d.value = val;
    }
    else {
        d.value += val;
    }
}
// equal funation
function equal() {
    if ((d.value).indexOf("^") !== -1) {
        d.value = (d.value).replace("^", "**");
    }
    if ((d.value).indexOf("ylog") !== -1) {
        var z_1 = (d.value).search("ylog");
        var y = Number((d.value).substring(0, z_1));
        var x = Number((d.value).substring(z_1 + 4, (d.value).length));
        d.value = (Math.log(x) / Math.log(y)).toString();
    }
    d.value = eval(d.value);
}
function clear_val() {
    d.value = " ";
}
function back() {
    var val = d.value;
    d.value = val.substr(0, val.length - 1);
}
function getFact(n) {
    var result = 1;
    if (n > 1) {
        for (var i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "num should be positive";
    }
}
function fact() {
    d.value = getFact(Number(d.value)).toString();
}
function validate() {
    if (d.value == "NaN" || d.value == "-Infinity") {
        d.value = "invalid input";
    }
}
function inverseSign() {
    d.value = (-1 * Number(d.value)).toString();
}
function exp_func() {
    d.value = Math.exp(Number(d.value)).toString();
}
function abs_val() {
    d.value = (Math.abs(Number(d.value))).toString();
}
function div_by_one() {
    d.value = (1 / (Number(d.value))).toString();
}
function square() {
    d.value = (Number(d.value) * Number(d.value)).toString();
}
function square_root() {
    d.value = (Math.sqrt(Number(d.value))).toString();
}
function x_pow_y() {
    d.value = d.value + "^";
}
function ten_pow_x() {
    d.value = (Math.pow(10, Number(d.value))).toString();
}
function logarithm(base) {
    if (base == "ten") {
        d.value = (Math.log10(Number(d.value))).toString();
    }
    else {
        d.value = (Math.log(Number(d.value))).toString();
    }
}
function euler_num() {
    d.value = (Math.E).toString();
}
function pi_val() {
    d.value = (Math.PI).toString();
}
var z = 1;
function radian() {
    if (z == 1) {
        document.getElementById('degree').innerHTML = "RAD";
        z = 0;
    }
    else {
        document.getElementById('degree').innerHTML = "DEG";
        z = 1;
    }
}
function trigo(t) {
    switch (t) {
        case "sin":
            if (z == 1) {
                d.value = (Math.sin((Math.PI / 180) * Number(d.value))).toFixed(5);
            }
            else {
                d.value = (Math.sin(Number(d.value))).toFixed(5);
            }
            break;
        case "cos":
            if (z) {
                d.value = (Math.cos(Math.PI / 180 * Number(d.value))).toString();
            }
            else {
                d.value = (Math.cos(Number(d.value))).toString();
            }
            break;
        case "tan":
            if (z) {
                d.value = ((Math.tan(Math.PI / 180 * Number(d.value)))).toString();
            }
            else {
                d.value = (Math.tan(Number(d.value))).toString();
            }
            break;
        case "sec":
            if (z) {
                d.value = ((1 / Math.cos(Math.PI / 180 * Number(d.value)))).toString();
            }
            else {
                d.value = (1 / Math.cos(Number(d.value))).toString();
            }
            break;
        case "csc":
            if (z) {
                d.value = ((1 / Math.sin(Math.PI / 180 * Number(d.value)))).toString();
            }
            else {
                d.value = (1 / Math.sin(Number(d.value))).toString();
            }
            break;
        case "cot":
            if (z) {
                d.value = (1 / (Math.tan(Math.PI / 180 * Number(d.value)))).toString();
            }
            else {
                d.value = (1 / Math.tan(Number(d.value))).toString();
            }
            break;
        case "asin":
            if (z) {
                d.value = ((180 / Math.PI * Math.asin(Number(d.value)))).toString();
            }
            else {
                d.value = (Math.asin(Number(d.value))).toString();
            }
            break;
        case "acos":
            if (z) {
                d.value = ((180 / Math.PI * Math.acos(Number(d.value)))).toString();
            }
            else {
                d.value = (Math.acos(Number(d.value))).toString();
            }
            break;
        case "atan":
            if (z) {
                d.value = ((180 / Math.PI * Math.atan(Number(d.value)))).toString();
            }
            else {
                d.value = (Math.atan(Number(d.value))).toString();
            }
            break;
        case "asec":
            if (z) {
                d.value = ((180 / Math.PI * (Math.acos(1 / Number(d.value))))).toString();
            }
            else {
                d.value = (1 / Math.acos(Number(d.value))).toString();
            }
            break;
        case "acsc":
            if (z) {
                d.value = ((180 / Math.PI * (Math.asin(1 / Number(d.value))))).toString();
            }
            else {
                d.value = (1 / Math.asin(Number(d.value))).toString();
            }
            break;
        case "acot":
            if (z) {
                d.value = ((180 / Math.PI * (Math.atan(1 / Number(d.value))))).toString();
            }
            else {
                d.value = (1 / Math.atan(Number(d.value))).toString();
            }
            break;
        case "sinh":
            d.value = (Math.sinh(Number(d.value))).toString();
            break;
        case "cosh":
            d.value = (Math.cosh(Number(d.value))).toString();
            break;
        case "tanh":
            d.value = (Math.tanh(Number(d.value))).toString();
            break;
        case "sech":
            d.value = (1 / Math.cosh(Number(d.value))).toString();
            break;
        case "csch":
            d.value = (1 / Math.sinh(Number(d.value))).toString();
            break;
        case "coth":
            d.value = (1 / Math.tanh(Number(d.value))).toString();
            break;
        case "asinh":
            d.value = (Math.asinh(Number(d.value))).toString();
            break;
        case "acosh":
            d.value = (Math.acosh(Number(d.value))).toString();
            break;
        case "atanh":
            d.value = (Math.atanh(Number(d.value))).toString();
            break;
        case "asech":
            d.value = (1 / Math.acosh(Number(d.value))).toString();
            break;
        case "acsch":
            d.value = (1 / Math.asinh(Number(d.value))).toString();
            break;
        case "acoth":
            d.value = (1 / Math.atanh(Number(d.value))).toString();
            break;
    }
}
function floor() {
    d.value = (Math.floor(Number(d.value))).toString();
}
function ceil() {
    d.value = (Math.ceil(Number(d.value))).toString();
}
function rand() {
    d.value = (Math.random()).toString();
}
function dms() {
    var dms = Number(d.value);
    var deg = dms;
    var sec = (dms.toFixed(4) - dms.toFixed(2)) * 10000;
    var min = (dms.toFixed(2) - deg) * 100;
    deg = deg + min / 60 + sec / 3600;
    d.value = deg.toFixed(2).toString();
}
function deg() {
    var deg = Number(d.value);
    var minutes = (deg - deg) * 60;
    var seconds = (minutes - minutes) * 60;
    d.value = Number("".concat(deg, ".").concat(minutes).concat(seconds)).toFixed(4).toString();
}
function cube() {
    d.value = (Math.pow(Number(d.value), 3)).toString();
}
function cube_root() {
    d.value = (Math.pow(Number(d.value), 1 / 3)).toString();
}
function x_pow_four() {
    d.value = (Math.pow(Number(d.value), 4)).toString();
}
function two_pow_x() {
    d.value = (Math.pow(2, Number(d.value))).toString();
}
function e_pow_x() {
    d.value = (Math.exp(Number(d.value))).toString();
}
var f = 1;
function change_btn() {
    if (f) {
        for (var _i = 0, _a = document.getElementsByClassName('btn1-show'); _i < _a.length; _i++) {
            var element = _a[_i];
            element.style.display = "none";
        }
        for (var _b = 0, _c = document.getElementsByClassName('btn2-show'); _b < _c.length; _b++) {
            var element = _c[_b];
            element.style.display = "inline-block";
        }
        f = 0;
    }
    else {
        for (var _d = 0, _e = document.getElementsByClassName('btn2-show'); _d < _e.length; _d++) {
            var element = _e[_d];
            element.style.display = "none";
        }
        for (var _f = 0, _g = document.getElementsByClassName('btn1-show'); _f < _g.length; _f++) {
            var element = _g[_f];
            element.style.display = "inline-block";
        }
        f = 1;
    }
}
var k = 1;
function change_btn_color() {
    if (k == 1) {
        document.getElementById("change_btn").style.backgroundColor = "rgb(0, 153, 255)";
        k = 0;
    }
    else {
        document.getElementById("change_btn").style.backgroundColor = "rgb(0, 0, 0)";
        k = 1;
    }
}
var memory = [];
function m_store() {
    enb_btn();
    memory.push(d.value);
    d.value = " ";
}
function enb_btn() {
    document.getElementById('mc').disabled = false;
    document.getElementById('mr').disabled = false;
}
function m_clear() {
    memory = [];
    d.value = " ";
    document.getElementById('mc').disabled = true;
    document.getElementById('mr').disabled = true;
}
function m_read() {
    d.value = memory[memory.length - 1].toString();
}
function m_plus() {
    if (memory.length == 0) {
        memory.push(d.value);
    }
    else {
        memory[memory.length - 1] += Number(d.value);
    }
}
function m_minus() {
    if (memory.length == 0) {
        memory.push((-1 * Number(d.value)).toString());
    }
    else {
        memory[memory.length - 1] = (Number(memory[memory.length - 1]) - Number(d.value)).toString();
    }
}
var c = 1;
function change_color() {
    if (c == 1) {
        document.getElementById("degree").style.backgroundColor = "rgb(0, 153, 255)";
        c = 0;
    }
    else {
        document.getElementById("degree").style.backgroundColor = "rgb(0, 0, 0)";
        c = 1;
    }
}
var w = 1;
function fe_func() {
    if (w) {
        d.value = Number(d.value).toString();
        w = 0;
    }
    else {
        d.value = Number(d.value).toExponential().toString();
        w = 1;
    }
}
