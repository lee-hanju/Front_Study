/**
 * 타입 변환
 * Type Conversion
 *
 * 1)명시적
 * 2)암묵적
 */
let age = 24;
// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
//암묵적
let test = age + ""; // number에 string을 더하면 string으로 타입이 변환된다.
console.log(typeof test, test);
// 기능적으로는 가능하되, 절대 이렇게 사용해서는 안된다.
// 타입이 같은 것 끼리 오퍼레이터를 사용하자.
console.log("98" + 2); // 2가 string으로 변환
console.log("98" * 2); // string에는 *,- 가 없으니 98이 number로 변환
console.log("98" - 2);

console.log("--------------------");
/**
 * 명시적 변호나 몇 가지 더 배우기
 */
console.log(typeof (99).toString());
console.log(typeof true.toString());
console.log(typeof Infinity.toString());

//숫자 타입으로 변환할 때
console.log(typeof parseInt("0"), parseInt("0")); // 정수 변환
console.log(typeof parseFloat("0.99"), parseFloat("0.99")); // 실수 변환
console.log(typeof +"1", +"1");

console.log("--------------------");
/**
 * Boolean 타입으로의 변환
 */
console.log(!!"x"); // string값 안에 값이 들어 있으면 boolean 기준으로 봤을 때 true다.

console.log(!!"");

console.log(!!0);
console.log(!!"false");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
// 값이 없을 때 또는 0일 때 false, 값이 존재하면 true를 반환하게 된다.

console.log(!!{}); // 오브젝트는 boolean으로 변환했을 때 무조건 true
console.log(!![]); // array도 무조건 true
