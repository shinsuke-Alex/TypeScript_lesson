//https://www.youtube.com/watch?v=F9vzRz6jyRk&t=5020s

/*
Linterとしての側面を利用できる。
実行する前に（JSにコンパイルする際に）エラーがわかる。
ES5へのコンパイラできる。
*/

let hello: string = 'hello';
console.log(hello);

//ドキュメントとしての役割がある。
function add(a: number, b: number): number {
    return a + b;
};

//VScodeが型を教えてくれる（マウスホバー）
let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';

const person: {
  name: string;
  age: number,
} = {
  name: 'Jack',
  age:30
}
console.log(person.age);

const fruits: string[] = ['apple', 'banana', 'Grape']
const fruits2: any[] = ['apple', 'banana', 'Grape', '12']

console.log(fruits);

//tuple
const book: [string, number, boolean] = ['business', 1500, false];

//enum 型を自分で作れる。特定のまとまりを扱える。
enum CoffeeSize {
  short = 'short',
  tall = 'tall',
  grande = 'grande',
  venti = 'venti'
}

const coffee = {
  hot: true,
  size: CoffeeSize.grande
}

//Union型.　数字や文字列などなんでも入れたい。
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello']
unionType = 'hello'

// Literal型を使って特定の値のみを取り扱う。
const apple: 'apple' = 'apple'

let clothSize: 'small' | 'medium' | 'large' = 'large';

//typeエイリアスを使って複雑な型を変数のように扱う.
type clothSize = 'small' | 'medium' | 'large'



//関数に型を適応させる方法
function add2(num1: number, num2: number): number {
  return num1 + num2
}

//関数の戻り値にvoid型を使う方法
function sayHello(): void {
  console.log('Hello!');
}

//関数型を使って、特定の関数のみを代入できる変数を作る
const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
  return num1 + num2
};

//アロー関数
const doubleNumber = (number: number): number => number * 2;

//callback関数の型はこう書く
function doubleAndHndle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHndle(20, doubleNum => {
  return doubleNum 
});


//unknown型を使って、柔軟でanyよりも厳しい型を定義する方法
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

//never型を使って、起こり得ない値の型を使用する方法.何も返さない。
function error(massage: string): never {
    throw new Error(massage);
}
console.log(error('This is an error'));


/*watchモードで自動的にコンパイルされる
tsc index.ts -w
tsc index.ts --watch
*/

