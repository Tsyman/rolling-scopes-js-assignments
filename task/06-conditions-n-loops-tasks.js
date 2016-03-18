'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {string}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    let result = "";

    if (num % 3 == 0)
        result += "Fizz";

    if (num % 5 == 0)
        result += "Buzz";

    if (result === "")
        result = num;

    return result;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++)
        result *= i;

    return result;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    return (n1 + n2) * (n2 - n1 + 1) / 2;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
    let max = Math.max(a, b, c),
        sum = a + b + c - max;

    return max < sum;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {boolean}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
    if (rect1.top > rect2.top || rect1.left > rect2.left) {
        let tmp = rect1;
        rect1 = rect2;
        rect2 = tmp;
    }

    return (rect1.top <= rect2.top)
        && (rect1.top + rect1.width >= rect2.top)
        && (rect1.left <= rect2.left)
        && (rect1.left + rect1.height >= rect2.left);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {boolean}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
    let radius = Math.hypot((circle.center.x - point.x), (circle.center.y - point.y));

    return radius < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {any}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    let map = new Map;

    for (let i = 0; i < str.length; i++) {
        let c = str[i],
            dist = map.get(c) || str.indexOf(c, i + 1);

        if (dist == -1)
            return c;

        map.set(c, dist);
    }

    return null;
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    if (b < a) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    let before = (isStartIncluded ? "[" : "("),
        after = (isEndIncluded ? "]" : ")");

    return `${before}${a}, ${b}${after}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {String} str
 * @return {String}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    return parseInt(String(num).split('').reverse().join(''), 10);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {String} ccn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 *
 */
function isCreditCardNumber(ccn) {
    let digits = String(ccn).split(''),
        sum = 0,
        even = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let dig = parseInt(digits[i], 10),
            doubled = dig * 2;

        if (doubled > 9)
            doubled -= 9;

        sum += (even) ? doubled : dig;
        even = !even;
    }

    return sum % 10 == 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let sum = (dig) => {
        let arr = String(dig).split(''),
            result = 0;

        for (let i = 0; i < arr.length; i++)
            result += parseInt(arr[i], 10);

        return result;
    };

    while (num > 10)
        num = sum(num);

    return num;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let c = str[i];

        if (['[', '{', '(', '<'].indexOf(c) != -1) {
            stack.push(c);
            continue;
        }

        let s = stack.pop();

        if (( s == '[' && c == ']') ||
            ( s == '(' && c == ')') ||
            ( s == '{' && c == '}') ||
            ( s == '<' && c == '>')) {
        } else {
            return false;
        }
    }


    return stack.length == 0;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let round = (time) => {
        let dig = parseInt(time, 10),
            ceil = time - dig;

        if (ceil > 0.5)
            dig++;

        return dig;
    };
    let diff = endDate - startDate;

    if (diff <= 45000)
        return "a few seconds ago";
    if (diff <= 90000)
        return "a minute ago";
    if (diff <= 45 * 60 * 1000)
        return `${round(diff / (60 * 1000))} minutes ago`;
    if (diff <= 90 * 60 * 1000)
        return "an hour ago";
    if (diff <= 22 * 60 * 60 * 1000)
        return `${round(diff / (60 * 60 * 1000))} hours ago`;
    if (diff <= 36 * 60 * 60 * 1000)
        return "a day ago";
    if (diff <= 25 * 24 * 60 * 60 * 1000)
        return `${round(diff / (24 * 60 * 60 * 1000))} days ago`;
    if (diff <= 45 * 24 * 60 * 60 * 1000)
        return "a month ago";
    if (diff <= 345 * 24 * 60 * 60 * 1000)
        return `${round(diff / (30 * 24 * 60 * 60 * 1000))} months ago`;
    if (diff <= 545 * 24 * 60 * 60 * 1000)
        return "a year ago";

    return `${round(diff / (365 * 24 * 60 * 60 * 1000))} years ago`;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    return parseInt(num, 10).toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {Array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    let size = 0,
        result = "";

    pathes.forEach((item, index) => {
        item = item.split('/');
        pathes[index] = item;

        size = index == 0 ? item.length : Math.min(size, item.length);
    });

    for (let i = 0; i < size; i++) {
        let setObj = new Set;

        for (let j = 0; j < pathes.length; j++)
            setObj.add(pathes[j][i]);

        if (setObj.size == 1)
            result += pathes[0][i] + "/";

    }

    return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {Array} m1
 * @param {Array} m2
 * @return {Array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    let result = new Array(m1.length);
    result.fill([]);

    result.forEach((item, index) => {
        result[index] = new Array(m2[0].length);
    });

    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m2[0].length; j++) {
            let sum = 0;

            for (let f = 0; f < m1[0].length; f++)
                sum += m1[i][f] * m2[f][j];

            result[i][j] = sum;
        }
    }

    return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {Array} position
 * @return {any}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    let result = [];

    for (let i = 0; i < 3; i++) {
        var winX = true, winY = true;

        for (let j = 0; j < 3; j++) {
            if (position[j][i] != position[0][i])
                winX = false;

            if (position[i][j] != position[i][0])
                winY = false;
        }

        if (winX && position[0][i] != undefined)
            result.push(position[0][i]);

        if (winY && position[i][0] != undefined)
            result.push(position[i][0]);
    }

    if (position[0][0] == position[1][1] && position[0][0] == position[2][2] && position[1][1] != undefined)
        result.push(position[1][1]);

    if (position[0][2] == position[1][1] && position[0][2] == position[2][0] && position[1][1] != undefined)
        result.push(position[1][1]);


    return result.length != 1 ? undefined : result[0];
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString: getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString: timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition: evaluateTicTacToePosition
};
