function getPromise(delay, message) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(message), delay);
    });
};
getPromise(2000, "hello");