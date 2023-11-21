// Destructuring in object

const band={
    bandname:"led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "Kashmir"
};

const {bandname:vari1,famousSong:vari2,...restProps}=band;
console.log(vari1);
console.log(vari2);
let val1=band.bandname;
let val2=band.famousSong;

console.log(val1);
console.log(val2);

console.log(restProps);
