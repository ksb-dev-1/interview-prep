// 1️⃣ customCall --------------------------------------------------

/*

Function.prototype.customCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  context = context == null ? globalThis : Object(context);

  const uniqueKey = Symbol("fn");

  context[uniqueKey] = this;

  const result = context[uniqueKey](...args);

  delete context[uniqueKey];

  return result;
};

const user = {
  name: "John",
};

function printUserInfo(role, company) {
  console.log(`${this.name} is a ${role} who works at ${company}`);
}

const arr = [1, 2, 3, 4];

const obj = {};

// printUserInfo.customCall(user, "Developer", "Google");
// printUserInfo.customCall(2, "Developer", "Google");
// arr.customCall(null);

// printUserInfo.call(user, "Developer", "Google");
// printUserInfo.call(2, "Developer", "Google");
// arr.call(null);

*/

// 2️⃣ customApply --------------------------------------------------

/*

Function.prototype.customApply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  context = context == null ? globalThis : Object(context);

  const uniqueKey = Symbol("fn");
  context[uniqueKey] = this;

  let result;

  if (args == null) {
    result = context[uniqueKey]();
  } else {
    if (typeof args !== "object" || typeof args.length !== "number") {
      throw new Error("CreateListFromArrayLike called on non-object");
    }

    result = context[uniqueKey](...args);
  }

  delete context[uniqueKey];

  return result;
};

const user = {
  name: "John",
};

function printUserInfo(role, company) {
  console.log(`${this.name} is a ${role} who works at ${company}`);
}

const arr = [1, 2, 3, 4];

const obj = {};

printUserInfo.customApply(user, ["Developer", "Google"]);
printUserInfo.customApply(2, ["Developer", "Google"]);
// arr.customApply(null);
// printUserInfo.customApply(2, 4);

// printUserInfo.apply(user, ["Developer", "Google"]);
// printUserInfo.apply(2, ["Developer", "Google"]);
// arr.call(null);
// printUserInfo.apply(2, 4);

*/

// 3️⃣ customBind --------------------------------------------------

Function.prototype.customBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function!");
  }

  let fn = this;

  const boundFunction = function (...newArgs) {
    if (this instanceof boundFunction) {
      return fn.apply(this, [...args, ...newArgs]);
    }
    return fn.apply(context, [...args, ...newArgs]);
  };

  if (fn.prototype) {
    boundFunction.prototype = Object.create(fn.prototype);
  }

  return boundFunction;
};

const user = {
  name: "John",
};

function printUserInfo(role, company) {
  console.log(`${this.name} is a ${role} who works at ${company}`);
}

const arr = [1, 2, 3, 4];

const obj = {};

// printUserInfo.customBind(user, "Developer", "Google")();
// printUserInfo.customBind(2, "Developer", "Google")();
// arr.customBind(null)();
// printUserInfo.customBind(2, 4)(6);

// printUserInfo.bind(user, "Developer", "Google")();
// printUserInfo.bind(2, "Developer", "Google")();
// arr.bind(null)();
// printUserInfo.bind(2, 4)(6);
