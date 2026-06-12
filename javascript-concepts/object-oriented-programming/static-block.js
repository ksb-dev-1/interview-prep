class DatabaseConnection {
  static connection;

  static {
    console.log(
      "Static block only runs once, can be used to connect to database"
    );
  }
}

const d1 = new DatabaseConnection();
const d2 = new DatabaseConnection();
const d3 = new DatabaseConnection();
const d4 = new DatabaseConnection();
const d5 = new DatabaseConnection();
