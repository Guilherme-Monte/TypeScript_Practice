let helloWorldTS = "Hello World TS";
;
const user = {
    name: "Hayes",
    id: 1,
};
class UserAccount {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    ;
}
const user3 = new UserAccount("Murphy", 1);
function getAdminUser(name, id) {
    const admin = { name, id };
    return admin;
}
;
getAdminUser("Admin", 2);
function deleteUser(user) {
    return `Deleted user ${user.name}`;
}
;
deleteUser({ name: "Brad", id: 1 });
console.log(user);
