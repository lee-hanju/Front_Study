/**
 * Hoisting
 */
console.log("Hello");
console.log("World");
console.log("---------------");

// console.log(name);
// var name = "코드팩토리";
// console.log(name);

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * let, const도 Hoisting이 된다.(중요)
 * let과 const는 Hoisting 방지를 해주기 때문에 사용해야함. var는 방지 불가
 */
// var name;
// console.log(name);
// name = "코드팩토리";
// console.log(name);

console.log(yuJin);
const yuJin = "안유진";
