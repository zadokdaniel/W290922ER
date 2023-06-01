var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**
 * symbol: ...
 * only in new object, array or a function call
 *
 * examples:
 * [...arr1,"sdf", 2, null, ...arr2, {a: 3}]
 * {...obj1, keyname: "hello", ...obj2, myKey: "bye"}
 * fn("arg1", ...arr1, "arg arr1.length+1", ...arr2)
 */
function spread() {
    // array spread
    const arr1 = [1, 2, 4, 5];
    const arr2 = [true, null, { a: 5 }, [3]];
    const arraysSpread = [
        ...arr1,
        // arr1[0]
        // arr1[1]
        // arr1[2]
        // arr1[3]
        "sdf",
        2,
        null,
        ...arr2,
        // arr2[0]
        // arr2[1]
        // arr2[2]
        // arr2[3]
        { a: 3 },
    ];
    console.log(arr1, arr2, arraysSpread);
    // function call spread
    function a() {
        console.log(arguments);
    }
    a("arg1", ...arr1, 
    // arr1[0]
    // arr1[1]
    // arr1[2]
    // arr1[3]
    "arg2", ...arr2
    // arr1[0]
    // arr1[1]
    // arr1[2]
    // arr1[3]
    );
    // object spread
    const obj1 = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    };
    const obj2 = {
        e: 5,
        f: 6,
        g: 7,
        h: 8,
    };
    const objectSpread = Object.assign(Object.assign(Object.assign({ a: 2 }, obj1), { 
        // a: obj1.a,
        // b: obj1.b,
        // c: obj1.c,
        // d: obj1.d
        b: 20, u: 30 }), obj2);
    console.log(objectSpread);
}
/**
 * symbol: ...
 * only in destructure or function creation
 * always will be the last in the list
 */
function rest() {
    function a(a, b, c, ...someName) {
        console.log(a, b, c, someName);
    }
    a(1);
    a(1, 2, 3);
    a(1, 2, 3, 4, 5, 6, 7);
    const values = [1, 2, 3, 4, 5, 6, 7];
    a(...values
    // values[0]
    // values[1]
    // values[2]
    // values[3]
    // values[4]
    // values[5]
    // values[6]
    );
    const obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    };
    const { a, b } = obj, rest = __rest(obj, ["a", "b"]);
    // const a = obj.a
    // const b = obj.b
    // const rest = {c: obj.c, d: obj.d}
    const arr = [1, 2, 3, 4, 5, 6];
    const [i0, i1, , i3, ...restArr] = arr;
    // const i0 = arr[0]
    // const i1 = arr[1]
    // const i3 = arr[3]
    // const restArr = [arr[4], arr[5]]
}
/**
 * rule of thumb!!
 * every time you create a new variable (const, let, parameter) which receives an object or array destructuring can be used
 */
function destructuring() {
    const myObj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        obj: { a: 5, b: 5 },
    };
    const { a /*:a*/, b /*:b*/, d: hello, e = "default e", h: hh = "default h", obj: { a: objA, b: objB }, } = myObj;
    // const a = myObj.a
    // const b = myObj.b
    // const hello = myObj.d
    // const e = myObj.e ? "default e" : myObj.e
    // const hh = myObj.h === undefined ? "default h" : myObj.h
    // const objA = myObj.obj.a
    // const objB = myObj.obj.b
    console.log(a, b, hello, e, hh);
    let {} = myObj;
    function fn({ a /*:a*/, b /*:b*/, d: hello, e = "default e", h: hh = "default h", }) { }
    fn(myObj);
    const arr1 = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        ["a", "b", "c"],
        { hello: 5, bye: 5 },
    ];
    const [a1, b2, c, d, , , g, h, i, [nestedA, nestedB, nestedC], { hello: nestedHello, bye: nestedBye }, j, k = "default value",] = arr1;
    console.log(a1, b2, c, d, g, h, i, j, k);
    console.log(nestedA, nestedB, nestedC);
    console.log(nestedHello, nestedBye);
}
destructuring();
