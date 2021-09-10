let helloWorldTS = "Hello World TS";

interface User {
  name: String;
  id: Number;
};

const user: User = {
  name: "Hayes",
  id: 1,
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

function getAdminUser(name: String, id: Number): User {
  const admin = { name, id };
  return admin;
};

getAdminUser("Admin", 2);

function deleteUser(user: User) {
  return `Deleted user ${user.name}`;
};

deleteUser({ name: "Brad", id: 1 });

console.log(user);
