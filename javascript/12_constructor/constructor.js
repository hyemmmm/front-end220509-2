// 생성자 함수
// 미리 설계도를 만들어놓고 그 설계도에 맞는 실체(인스턴스)를 만들어낸다.
// 인스턴스는 실제로 메모리를 차지함.
// 인스턴스를 생성할 때는 new 키워드와 함께 생성자 함수를 호출

//생성자 함수 => 제품의 설계도
// new 생성자함수() =>실제제품

const date = new Date();
const arr = new Array(10);
const str = new String("hyemin");

// const arr01 = []; 리터럴 표기법을 이용한 인스턴스 생성

// 인스턴스에서 실행하는 함수와 생성자함수를 직접 실행하는 함수와 속성이 있다.
console.log(Date.now()); // 생성자 함수가 직접 호출하는 함수
console.log(date.getDate()); // 인스턴스가 호출하는 함수

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log("안녕하세요 저는" + this.name);
  };
}
const cat = new Cat("coco", 10);
const cat02 = new Cat("miu", 3);

console.log(cat);
console.log(cat02.name);

//인스턴스가 호출 => 인스턴스의 고유한 정보를 참조할 때 사용 => ex) arr.map(), arr.filter()
Cat.prototype.bye = function () {
  console.log(this.name + "고양이 안녕");
};

//생성자함수가 직접 호출 => ex) Math.floor(), Date.now()
//정적 메서드, 정적 프로퍼티 => 생성자 함수를 통해서 접근
// 프로토타입으로 함수 넣는게 더 효율적
Cat.run = function () {
  console.log("달리기!");
};

cat.bye();
Cat.run();
// cat.run();오류

//
function Product(name, weight, price) {
  this.name = name;
  this.weight = weight;
  this.price = price;
  this.calculate = function (weight) {
    return this.price * (weight / this.weight);
  };
}

const pork = new Product("삼겹살", 100, 1690);

console.log(pork.calculate(200));

//class로 만들기
//클래스에서는 함수 키워드 사용X
//문법적으로 생성자함수를 더 간단하게 한 것.

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // static => 인스턴스가 아닌 클래스에선 사용 가능
  static hello() {
    console.log("정적 메소드");
  }
  //인스턴스가 사용할 함수
  greeting() {
    console.log("hello " + this.name);
  }
}

const human = new Human("hyemin", 29);
console.log(human.name);
Human.hello();
human.greeting();

//

function Rect(width, height) {
  this.width = width;
  this.height = height;
}

Rect.prototype.getArea = function () {
  return this.width * this.height;
};

const rect = new Rect(10, 10);
console.log(rect.getArea());

// class

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // 인스턴스가 사용할 함수 => 일반적인 함수와 다르게 function 키워드를 사용하지 않는다.
  //프로토타입으로 추가됨
  getArea() {
    return this.width * this.height;
  }

  //static : 클래스에서 직접 사용하는 메서드(함수)와 프로퍼티(값). 인스턴스에서는 사용 불가
  static type = "사각형";
  static getType() {
    console.log("사각형입니다");
  }
}
const rectByClass = new Rectangle(20, 20);
console.log(rectByClass, rectByClass.getArea());
Rectangle.getType();
console.log(Rectangle.type);

// 클래스 상속
class Animal {
  constructor(legs, speed) {
    this.legs = legs;
    this.speed = speed;
  }
  move() {
    console.log(`${this.speed}km/h로 움직입니다.`);
  }
}
//Dog 클래스가 Animal 클래스를 상속받음 => extends 상속받을 클래스
class Dog extends Animal {
  //constructor를 생략하면 상위 클래스의 constructor를 실행
  // 프로퍼티를 추가하고 싶으면 constructor 내부에서 super() 실행
  // => constructor에 기존 상위 클래스의 인자 + 서브클래스만의 인자를 받아야 한다.
  // => super(기존 프로퍼티) + this.새로운 프로퍼티 = 서브클래스만의 인자

  constructor(legs, speed, age) {
    super(legs, speed);
    // super : 상위 클래스의 constructor를 실행
    // super가 먼저 실행되어야 한다.
    this.age = age;
  }
  bark() {
    console.log("짖기");
  }
  //오버라이딩 => 기존의 메소드명과 같은 메소드를 작성하면 덮어씌워진다.
  // => Animal클래스의 move()를 덮어씌움
  move() {
    console.log("덮어씌우기");
  }
}

const rabbit = new Animal(4, 20);
const dog = new Dog(4, 30, 3);
console.log(rabbit);
console.log(dog);
dog.move();
dog.bark();
// rabbit.bark(); // 오류

//디자인 패턴 공부
