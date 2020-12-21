// Implement the longestLogin(loginList) function, which takes an array of user logins loginList  and returns the longest login.
// If the logins of the same length are the longest in the array, the login element with the largest index is returned.
// Tip: You can use the reduce() method to solve the task.
// Function examples:
// longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);   //  Prokopenko
// longestLogin(["user1", "user2", "333", "user4", "aa"]);   //  user4


function longestLogin(loginList) {
    let loginList1 = ["serg22", "tester_2", "Prokopenko", "guest"];
    let loginList2 = ["user1", "user2", "333", "user4", "aa"];
    let longest1 = loginList1.reduce((a, b) => a.length > b.length ? a : b, '');
    let longest2 = loginList2.reduce((a, b) => a.length > b.length ? a : b, '');
    console.log(longest1, longest2);
}
