/**
 * Loops
 *
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("-----------------");
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("-----------------");
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

// *을 이용해서 6x6의 정사각형을 출력해라
console.log("-----------------");
let square = "";
let side = 6;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);
/**
 * for...in
 */
console.log("-----------------");
const yuJin = {
  name: "안유진",
  year: 2003,
  group: "아이브",
};

for (let key in yuJin) {
  console.log(key);
}

const iveMembersArray = ["안유진", "가을", "레이", "이서", "장원영", "리즈"];
console.log("-----------------");
for (let key in iveMembersArray) {
  console.log(key);
  //   console.log("${key}:${iveMembersArray[key]}"); --> 왜 안되는지 모르겠음;
}

/**
 * for...of (Array에서 사용가능)
 */
console.log("-----------------");
for (let value of iveMembersArray) {
  console.log(value);
}

/**
 * While
 */
let number = 0;
while (number < 10) {
  number++;
}
console.log(number);

/**
 * do..while
 */
console.log("-----------------");
number = 0;
do {
  number++;
} while (number < 10);
console.log(number);
