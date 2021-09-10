var helloWorldTS = "Hello World TS";
;
var user = {
    name: "Hayes",
    id: 1,
};
// OOP:
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    ;
    return UserAccount;
}());
var user3 = new UserAccount("Murphy", 1);
function getAdminUser(name, id) {
    var admin = { name: name, id: id };
    return admin;
}
;
getAdminUser("Admin", 2);
function deleteUser(user) {
    return "Deleted user " + user.name;
}
;
deleteUser({ name: "Brad", id: 1 });
console.log(user);
