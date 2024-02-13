function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === 'number') {
        console.log(msg, 1);
    }
    else {
        console.log(msg, 0);
    }
    console.log(msg, 5);
}
printMsg(4);
var box = document.querySelector('.box');
box === null || box === void 0 ? void 0 : box.addEventListener('click', function () { });
