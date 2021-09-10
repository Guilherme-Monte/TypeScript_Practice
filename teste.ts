let helloWorldTS = "Hello World TS";

interface User {
  name: String;
  id: Number;
};

const user: User = {
  name: "Hayes",
  id: 1,
};

const user2: User = {
  userName: "Hayes",
  userId: 1,
};

// OOP:

class UserAccount {
  name: String;
  id: Number;

  constructor(name: String, id: Number) {
    this.name = name;
    this.id = id;
  };
}

const user3: User = new UserAccount("Murphy", 1);
const user4: User = new UserAccount("Error", "1");