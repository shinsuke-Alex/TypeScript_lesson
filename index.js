//https://www.youtube.com/watch?v=F9vzRz6jyRk&t=5020s
/*
Linterとしての側面を利用できる。
実行する前に（JSにコンパイルする際に）エラーがわかる。
ES5へのコンパイラできる。
*/
var hello = 'hello';
console.log(hello);
//ドキュメントとしての役割がある。
function add(a, b) {
    return a + b;
}
;
//VScodeが型を教えてくれる（マウスホバー）
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var person = {
    name: 'Jack',
    age: 30
};
console.log(person.age);
var fruits = ['apple', 'banana', 'Grape'];
var fruits2 = ['apple', 'banana', 'Grape', '12'];
console.log(fruits);
//tuple
var book = ['business', 1500, false];
//enum 型を自分で作れる。特定のまとまりを扱える。
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["short"] = "short";
    CoffeeSize["tall"] = "tall";
    CoffeeSize["grande"] = "grande";
    CoffeeSize["venti"] = "venti";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.grande
};
//Union型.　数字や文字列などなんでも入れたい。
var unionType = 10;
var unionTypes = [21, 'hello'];
unionType = 'hello';
// Literal型を使って特定の値のみを取り扱う。
var apple = 'apple';
var clothSize = 'large';
//関数に型を適応させる方法
function add2(num1, num2) {
    return num1 + num2;
}
//関数の戻り値にvoid型を使う方法
function sayHello() {
    console.log('Hello!');
}
//関数型を使って、特定の関数のみを代入できる変数を作る
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
//アロー関数
var doubleNumber = function (number) { return number * 2; };
//callback関数の型はこう書く
function doubleAndHndle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHndle(20, function (doubleNum) {
    return doubleNum;
});
//unknown型を使って、柔軟でanyよりも厳しい型を定義する方法
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
//never型を使って、起こり得ない値の型を使用する方法.何も返さない。
function error(massage) {
    throw new Error(massage);
}
console.log(error('This is an error'));
