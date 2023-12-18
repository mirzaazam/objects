
const first = { a: 2, b: 3, c: 6, d: 4 };
const second = { a: 2, b: 3, c: 6 };

// compare object

const compareObject = () => {
    const firstkeys = Object.keys(first);
    const secondkeys = Object.keys(second);
    // console.log(firstkeys);
    if (firstkeys.length === secondkeys.length) {
        for (const key of firstkeys) {
            console.log(firstkeys[key])
            if (firstkeys[key] !== secondkeys[key]) {
                // console.log(false);
            }
        }
        // console.log(true);
    }
    else{
        // console.log(false)
    }
}
compareObject();