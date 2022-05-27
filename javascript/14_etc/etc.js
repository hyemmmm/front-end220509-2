//1. 삼항 연산자
//조건 ? "true"일 경우 : "false일 경우"
//조건이 맞으면 ? 뒤의 값이, 틀리면 : 뒤의 값이 return

// let type = "";
// let num = 2;
// if (num % 2 !== 0) {
//   type = "홀수";
// } else {
//   type = "짝수";
// }

// console.log(type);

let num = 3;
let type = num % 2 === 0 ? "짝수" : "홀수";
console.log(type);

//2. 단축 평가(논리 연산자 사용)
// &&(and) : 앞의 조건이 true일 경우만 뒤의 코드를 실행
// ||(or) : 첫번째값이 falsy한 값이면 뒤의 값을, truty한 값이면 첫번째 값을 return
let obj = {
  name: "h",
};
let result = false && console.log("AAAA");
let result2 = obj.name || "이름없음";
console.log(result);
console.log(result2);

//3. 비구조화 할당
// const {키값, 키값2} = 객체 => 객체에 키값1과 키값2가 있다면 할당
// 변수로 사용 가능

const dog = {
  name: "coco",
  age: 3,
  bark: function () {
    console.log("멍멍");
  },
};

function consoleDog(dog) {
  const { name, age } = dog;
  //let도 가능
  name = "K";
}

//배열도 사용 가능 => 순서로 구분
let arr = ["A", "B"];
let [C, D] = arr;
console.log(D);

//4. spread
// 배열 앞에 ...을 붙이면 값을 모두 나열 => 1,2,3,4,5
let copy = [...arr];
console.log(arr);
console.log(copy);

let numArr = [1, 2, 3, 4];
// console.log(Math.max(numArr)); NaN
console.log(Math.max(...numArr)); //4

//5. rest
// 매개변수를 몇개를 넣던 배열로 다 담아준다.
function getTotal(...num) {
  // 매개변수를 넣은만큼 num 이라는 배열로 담아준다.
  // num은 배열이기 때문에 배열의 고차함수인 reduce를 활용
  // ...num => spread 문법을 통해 다시 num을 나열할 수 있다.
  // rest는 매개변수의 마지막 순서로 와야한다.
  // rest 앞에 매개변수를 선언하면 그 갯수만큼은 rest에 담기지 않음.
  return num.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}
console.log(getTotal(1, 2, 3, 4, 5, 6, 7));

// 6. Promise
//비동기처리 함수 => 비동기 코드를 동기처럼 처리할 수 있다.
//비동기처리가 끝난 다음에 실행결과에 따라 resolve(성공)와 reject(실패)를 실행한다.
//resolve와 reject의 첫번째 매개변수로 결과값을 담으면 promise.then(결과값)으로 꺼내쓸 수 있다.
// catch 함수를 통해서 에러처리 할 수 있음.

// let promise = new Promise(function (resolve, reject) {
//   resolve(1);
// });
// promise.then(function (res) {
//   console.log(res);
// });

//setTimeout => 비동기 => return이 먼저 실행되서 원하는대로 되지 않음
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});

//비동기 처리가 끝난 후에 then()이 실행됨 => 비동기를 동기처럼 처리
promise
  .then(function (res) {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// async, await : Promise의 문법적 설탕
// async : 비동기처리하고 싶은 함수 앞에 붙는 키워드
// return 값을 promise에 result값으로 담아서 promise를 리턴
// await : 비동기처리를 기다려준다.

async function getInfo() {
  let result = await promise;
  return result;
}

console.log(
  getInfo().then(function (res) {
    console.log(res);
  })
);

//promise.all()
//promise.race() 깃허브

let songList = [
  {
    id: 1,
    title: "달라달라",
  },
  {
    id: 2,
    title: "휘파람",
  },
  {
    id: 3,
    title: "loco",
  },
];

function getSong(title) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let [result] = songList.filter((song) => song.title === title);
      resolve(result.id);
    }, 1000);
  });
}

function getSongDetail(id) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let [result] = songList.filter((song) => song.id === id);
      resolve(result);
    }, 2000);
  });
}

getSong("달라달라")
  .then((res) => getSongDetail(res))
  .then((res) => console.log(res));

console.log(getSongDetail(getSong("달라달라")));

async function getData(title) {
  let id = await getSong(title);
  let detail = await getSongDetail(id);
  return detail;
}
// console.log(getData("loco"));// 프로미스 자체를 반환
// then을 써야 결과가 나옴
getData("loco").then(function (result) {
  console.log(result);
});
