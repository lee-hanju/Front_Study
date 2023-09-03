/**
 * Array Function
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);

//push() -> array에 새로운 값을 맨 끝에 element를 추가 하고, 반환값을 추가한 다음에 길이를 반환을 해준다.
console.log("-------------------");
console.log(iveMembers.push("코드팩토리")); // 배열을 변경했다.
console.log(iveMembers);

//pop() -> 마지막 element를 삭제하는데 사용, 삭제한 그 값을 반환해주는게 pop의 기능
console.log("-------------------");
console.log(iveMembers.pop());
console.log(iveMembers);

//shift() -> 첫 번째 element를 삭제하는데 사용, 삭제한 값을 반환
console.log("-------------------");
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() -> array에 새로운 값을 첫 번째에 element를 추가하고, 새로 생겨난 길이를 반환해줌
console.log("-------------------");
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);

//splice() -> 2개의 파라미터 사용. 첫 번째 파라미터는 몇 번 인덱스부터 두 번째 파라미터는 몇 개를 삭제할 것인가
console.log("-------------------");
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

console.log("-------------------");
iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
// concat() -> 새로운 array를 만들어서 반환을 해준다.
// 원래 array는 변경되지 않는다.
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers);

// slice() -> 첫 번째 파라미터는 몇 번째 인덱스부터 두 번째 파라미터는 몇 번째 인덱스까지 잘라올 건가?
// 잘라오고 싶은 인덱스에서 +1을 해줘야한다.
// 원래 array는 변경되지 않는다.
console.log("-------------------");
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

//spread operator -> spread operator로 값을 펼쳐놓으면 완전히 새로운 array가 탄생, 메모리 공간이 다르다.
console.log("---------------------------------------------");
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

// ...를 해주지 않으면 리스트 안에 리스트가 들어가게 된다.
console.log("---------------------------------------------");
let iveMembers3 = [iveMembers];
console.log(iveMembers3);

console.log("---------------------------------------------");
let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([...iveMembers] === iveMembers);

// join() -> ,를 기준으로 모든 값을 합칠 수 있다.
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

// sort() -> 오름차순 정렬(원래 array가 변경된다.)
iveMembers.sort();
console.log(iveMembers);
// reverse() -> 내림차순
console.log(iveMembers.reverse());
console.log("---------------------------------------------");
let numbers = [1, 9, 7, 5, 3];
console.log(numbers);
// a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면(뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

// map() -> 원래의 array를 변형하지 않음
console.log("---------------------------------------------");
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => "아이브: ${x}"));

console.log(
  iveMembers.map((x) => {
    if (x == "안유진") {
      return "아이브: ${x}";
    } else {
      return x;
    }
  })
);
console.log("---------------------------------------------");
console.log(iveMembers);

// filter() -> 해당되는 모든 값
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));

// find() -> 가장 첫 번째로 해당이 된 값만 즉시 반환환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() -> 첫 번째로 해당된 값의 Index를 반환한다.
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
