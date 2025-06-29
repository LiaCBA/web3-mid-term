//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1

let name1 = "Alice";
let name2: string = "Alice";

// მაგალითი 2

let numbers = [1, 2, 3];
let numbers2: number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a, b) {
  return a * b;
}

function multiply1(a: number, b: number): number {
  return a * b;
}

// მაგალითი 4

const user1 = { id: 1, name: "Alice" };
const user2: { id: number; name: string } = { id: 1, name: "Alice" };

// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest") {}

// პასუხი: თუ greet-ს ვიძახებთ სახელის გარეშე, მაშინ ავტომატურად "Guest" გადაეცემა

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {

type ConfigProps = {
  theme?: string;
  options?: { fontSize: number; layout: null };
  tester?: string;
};

const config1: ConfigProps = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

const config2: ConfigProps = {
  theme: "dark",
};

const config3: ConfigProps = {
  tester: "test",
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =

type MixedArrayProps = (
  | number
  | string
  | { name: string }
  | boolean
  | { isValid: boolean }
)[];

const array1: MixedArrayProps = [42, "hello", { name: "Alice" }];
const array2: MixedArrayProps = ["apple", true, { isValid: false }];
const array3: MixedArrayProps = [];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

type Handler = {
  process?: () => string;
  validate?: (input: string) => boolean;
  log?: () => void;
};

// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type UserProps = {
  id: number;
  username: string;
  isAdmin: boolean;
  profile: { fullName: string; age: number; interests: string[] };
  settings: { theme: string; notifications: { email: boolean; sms: boolean } };
  metadata: undefined;
};

const user: UserProps = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};
