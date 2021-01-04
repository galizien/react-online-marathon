const localStorage = require("./localStorage.js");
const user = {
    name: "Tom",
    age: 25
}
localStorage.setItem("user", JSON.stringify(user));
