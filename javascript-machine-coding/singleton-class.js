class Singleton {
  constructor() {
    if (Singleton._instance) {
      return Singleton._instance; // Return existing instance if already created
    }
    // If no instance, set this as the instance
    Singleton._instance = this;
  }

  // Static method to access the singleton instance
  static getInstance() {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }

  // Required method
  message() {
    return "Hello Singleton!";
  }
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b); // ✅ true (same instance)
console.log(a.message()); // ✅ "Hello Singleton!"
