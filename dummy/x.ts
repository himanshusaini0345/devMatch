// const a: number = 10;
// let b: number = 20;

// const a: number = 10;
// const b: string = "20";
// const c: boolean = true;
// const d: null = null;
// const e: undefined = undefined;
// const f: symbol = Symbol('id')

// const sym: symbol = Symbol('id');
// const sym2: symbol = Symbol('id2');
// const obj = {
//   [sym]: 34,
//   [sym2]: 342,
//   key:"12"
// };

// for(const key of Object.keys(obj)){
//     console.log(`${key}:${obj[key]}`)
// }

// for(const key of Object.entries(obj)){
//     console.log(`${key}`)
// }

// for(const key in Object.keys(obj)){
//     console.log(`${key}:${obj[key]}`)
// }

// for(const key of Object.getOwnPropertySymbols(obj)){
//     console.log(`${String(key)}:${obj[key]}`);
// }

// for(const key in Object.getOwnPropertySymbols(obj)){
//     console.log(`${String(key)}:${obj[key]}`);
// }

const x:unknown = "hello";
console.log((x as string).length);