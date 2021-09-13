let helloWorldTS = "Hello World TS";

interface User {
  name: string;
  id: number;
};

const user: User = {
  name: "Hayes",
  id: 1,
};

// OOP:

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  };
}

const user3: User = new UserAccount("Murphy", 1);

// O : User após o parêntesis especifíca o valor retornado
function getAdminUser(name: string, id: number): User {
  const admin = { name, id };
  return admin;
};

getAdminUser("Admin", 2);

function deleteUser(user: User) {
  return `Deleted user ${user.name}`;
};

deleteUser({ name: "Brad", id: 1 });

console.log(user);
