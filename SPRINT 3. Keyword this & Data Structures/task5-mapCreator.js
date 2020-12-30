function mapCreator(keys, values) {
    const map = new Map();
    for (let i of keys) {
        if (typeof values[i - 1] === "string")
            map.set(i, values[i - 1]);
    }
    return map;
}
const map = mapCreator([1, 2, 3, 4, 5, 6, 7], ["Lviv", "Iv-Fr", "Rivne", "Dnipro", 23, true, "Kyiv"]);
map.size;
map.get(2);
console.log(map.size);
console.log(map.get(1));
console.log(map);