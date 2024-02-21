"use strict";
function calculateArea(a, b) {
    if (b) {
        const rect = {
            a, b,
            area: a * b
        };
        return rect;
    }
    else {
        const square = {
            side: a,
            area: a * a
        };
        return square;
    }
}
calculateArea(1);
calculateArea(1, 2);
