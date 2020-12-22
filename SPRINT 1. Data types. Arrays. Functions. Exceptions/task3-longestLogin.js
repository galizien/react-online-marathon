function longestLogin(loginList) {
    return loginList.reduce((c, v) => c.length > v.length ? c : v);
}

longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]); 