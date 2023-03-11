//Take input form keyboard keys 
let keys: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', '^', '(', ')', '.'];
//Dom input element
let d: HTMLInputElement = document.getElementById("d") as HTMLInputElement


//Event listener for keyboard event
document.addEventListener('keydown', (event: KeyboardEvent): void => {
    let k: string = event.key;
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
    validate()
});



// interface for math custom funcations
interface Math {
    log10(x: number): number;
    sinh(x: number): number;
    atanh(x: number): number;
    cosh(x: number): number;
    tanh(x: number): number;
    asinh(x: number): number;
    acosh(x: number): number;
}

// math costum funcation for trigonometry 
Math.log10 = function (x: number) {
    return Math.log(x) / Math.log(10);
}

Math.sinh = function (x: number): number {
    return (Math.exp(x) - Math.exp(-x)) / 2;
};
Math.atanh = function (x: number): number {
    return Math.log((1 + x) / (1 - x)) / 2;
}

Math.cosh = function (x: number): number {
    return (Math.exp(x) + Math.exp(-x)) / 2;
}

Math.tanh = function (x: number): number {
    if (x === Infinity) {
        return 1;
    } else if (x === -Infinity) {
        return -1;
    } else {
        const y = Math.exp(2 * x);
        return (y - 1) / (y + 1);
    }
}

Math.asinh = function (x: number): number {
    return Math.log(x + Math.sqrt(x * x + 1));
}

Math.acosh = function (x: number): number {
    if (x < 1) {
        return NaN;
    }
    return Math.log(x + Math.sqrt(x * x - 1));
}

document.addEventListener("click", (): void => {
    validate()
})

function elem(val: string): void {
    if (d.value == "invalid input") {
        d.value = val
    }
    else {
        d.value += val;
    }
}


// equal funation
function equal(): void {
    if ((d.value).indexOf("^") !== -1) {
        d.value = (d.value).replace("^", "**")
    }
    if ((d.value).indexOf("ylog") !== -1) {
        let z: number = (d.value).search("ylog");
        let y: number = Number((d.value).substring(0, z));
        let x: number = Number((d.value).substring(z + 4, (d.value).length));
        d.value = (Math.log(x) / Math.log(y)).toString();

    }
    d.value = eval(d.value)
}

function clear_val(): void {
    d.value = " ";
}

function back(): void {
    const val : string = d.value;
    d.value = val.substr(0, val.length - 1);
}

function getFact(n: number): string | number {
    let result: number = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "num should be positive";
    }
}

function fact(): void {
    d.value = getFact(Number(d.value)).toString();
}

function validate(): void {
    if (d.value == "NaN" || d.value == "-Infinity") {
        d.value = "invalid input"
    }
}

function inverseSign() : void {
    d.value = (-1 * Number(d.value)).toString();
}

function exp_func() : void {
    d.value = Math.exp(Number(d.value)).toString();
}

function abs_val() : void {
    d.value = (Math.abs(Number(d.value))).toString()
}
function div_by_one() : void {
    d.value = (1 / (Number(d.value))).toString();
}

function square() : void {
    d.value = (Number(d.value) * Number(d.value)).toString();
}

function square_root() : void {
    d.value = (Math.sqrt(Number(d.value))).toString();
}

function x_pow_y() : void {
    d.value = d.value + "^";
}

function ten_pow_x() : void {
    d.value = (Math.pow(10, Number(d.value))).toString()
}

function logarithm(base:string) : void {
    if (base == "ten") {
        d.value = (Math.log10(Number(d.value))).toString()
    }
    else {
        d.value = (Math.log(Number(d.value))).toString()
    }

}

function euler_num() : void {
    d.value = (Math.E).toString()
}

function pi_val() : void {
    d.value = (Math.PI).toString()
}

let z:number = 1;
function radian() : void{
    if (z == 1) {
        (document.getElementById('degree') as HTMLButtonElement).innerHTML = "RAD";
        z = 0;
    }
    else {
        (document.getElementById('degree') as HTMLButtonElement).innerHTML = "DEG";
        z = 1;
    }
}

function trigo(t:string) : void {
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
            d.value = (Math.sinh(Number(d.value))).toString()
            break;
        case "cosh":
            d.value = (Math.cosh(Number(d.value))).toString()
            break;
        case "tanh":
            d.value = (Math.tanh(Number(d.value))).toString()
            break;
        case "sech":
            d.value = (1 / Math.cosh(Number(d.value))).toString()
            break;
        case "csch":
            d.value = (1 / Math.sinh(Number(d.value))).toString()
            break;
        case "coth":
            d.value = (1 / Math.tanh(Number(d.value))).toString()
            break;
        case "asinh":
            d.value = (Math.asinh(Number(d.value))).toString();
            break;
        case "acosh":
            d.value = (Math.acosh(Number(d.value))).toString()
            break;
        case "atanh":
            d.value = (Math.atanh(Number(d.value))).toString()
            break;
        case "asech":
            d.value = (1 / Math.acosh(Number(d.value))).toString()
            break;
        case "acsch":
            d.value = (1 / Math.asinh(Number(d.value))).toString()
            break;
        case "acoth":
            d.value = (1 / Math.atanh(Number(d.value))).toString()
            break;
    }
}

function floor() : void {
    d.value = (Math.floor(Number(d.value))).toString();
}

function ceil() : void {
    d.value = (Math.ceil(Number(d.value))).toString();
}

function rand() : void {
    d.value = (Math.random()).toString();
}

function dms() : void {
    let dms: number = Number(d.value);
    let deg: number = dms;
    let sec : number = ((dms as any).toFixed(4) - (dms as any).toFixed(2)) * 10000;
    let min : number = ((dms as any).toFixed(2) - deg) * 100;
    deg = deg + min / 60 + sec / 3600;
    d.value = deg.toFixed(2).toString();
}

function deg() : void {
    let deg: number = Number(d.value);
    let minutes: number = (deg - deg) * 60;
    let seconds: number = (minutes - minutes) * 60;
    d.value = Number(`${deg}.${minutes}${seconds}`).toFixed(4).toString();
}

function cube() : void {
    d.value = (Math.pow(Number(d.value), 3)).toString();
}

function cube_root() : void {
    d.value = (Math.pow(Number(d.value), 1 / 3)).toString();
}

function x_pow_four() : void {
    d.value = (Math.pow(Number(d.value), 4)).toString();
}

function two_pow_x() : void {
    d.value = (Math.pow(2, Number(d.value))).toString();
}

function e_pow_x() : void {
    d.value = (Math.exp(Number(d.value))).toString();
}

let f : number = 1;
function change_btn() : void {
    if (f) {
        for (let element of <any> document.getElementsByClassName('btn1-show')) {
            (element as HTMLButtonElement).style.display = "none";
        }
        for (let element of <any> document.getElementsByClassName('btn2-show')) {
            (element as HTMLButtonElement).style.display = "inline-block";
        }
        f = 0;
    }
    else {
        for (let element of <any> document.getElementsByClassName('btn2-show')) {
            (element as HTMLButtonElement).style.display = "none";
        }
        for (let element of <any> document.getElementsByClassName('btn1-show')) {
            (element as HTMLButtonElement).style.display = "inline-block";
        }
        f = 1;
    }
}

let k : number = 1;
function change_btn_color() : void {
    if (k == 1) {
        document.getElementById("change_btn")!.style.backgroundColor = "rgb(0, 153, 255)"
        k = 0;
    }
    else {
        document.getElementById("change_btn")!.style.backgroundColor = "rgb(0, 0, 0)";
        k = 1;
    }
}

let memory: string[] = [];
function m_store() : void {
    enb_btn();
    memory.push(d.value);
    d.value = " ";
}

function enb_btn() : void {
    (document.getElementById('mc') as HTMLButtonElement).disabled = false;
    (document.getElementById('mr') as HTMLButtonElement).disabled = false;
}

function m_clear() : void {
    memory = [];
    d.value = " ";
    (document.getElementById('mc') as HTMLButtonElement).disabled = true;
    (document.getElementById('mr') as HTMLButtonElement).disabled = true;
}

function m_read() : void {
    d.value = memory[memory.length - 1].toString();
}

function m_plus() : void {
    if (memory.length == 0) {
        memory.push(d.value);
    }
    else {
        memory[memory.length - 1] += Number(d.value);
    }

}

function m_minus() : void {
    if (memory.length == 0) {
        memory.push((-1 * Number(d.value)).toString());
    }
    else {
        memory[memory.length - 1] = (Number(memory[memory.length - 1]) - Number(d.value)).toString();
    }
}

let c : number = 1;
function change_color() : void {
    if (c == 1) {
        document.getElementById("degree")!.style.backgroundColor = "rgb(0, 153, 255)"
        c = 0;
    }
    else {
        document.getElementById("degree")!.style.backgroundColor = "rgb(0, 0, 0)";
        c = 1;
    }
}

let w : number = 1
function fe_func() : void {
    if (w) {
        d.value = Number(d.value).toString();
        w = 0;
    }
    else {
        d.value = Number(d.value).toExponential().toString();
        w = 1;
    }
}
