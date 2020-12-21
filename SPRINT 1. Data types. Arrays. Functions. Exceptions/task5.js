function checkAdult(age) {
    try {
        if (!age) {
            throw new Error("Please, enter your age");
        }

        if (age < 0) {
            throw   new Error("Please, enter positive number");
        }
        if (typeof age !== "number") {
            throw new Error("Please, enter a number");
        }
        if (parseInt(age) !== age) {
            throw new Error("Please, enter Integer number");
        }
        if (age < 18) {
            throw new Error("Access denied - you are too young!");
        }
        if (age >= 18) {
            throw  new Error("Access allowed");
        }
    } catch (error) {
        console.log(error.name, error.message);
    } finally {
        console.log("Age verification complete");
    }
}

checkAdult();