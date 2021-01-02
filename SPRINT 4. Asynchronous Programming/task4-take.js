function* take(n, iterable) {
    for (let i = 0; i < n; i++) {
        yield* iterable[i];
    }
}

const arr = ["a", "b", "c", "d", "e"];
for (const x of take(2, arr)) {
    console.log(x);
}