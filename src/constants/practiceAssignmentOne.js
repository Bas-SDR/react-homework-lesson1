import {inventory} from "./inventory.js";

//1a
console.log("Opdracht 1a")
const televisionType = inventory.map((tvName) => {
    return tvName.type;

});

console.log(televisionType);

//1b
console.log("Opdracht 1b")
const soldOutTelevision = inventory.filter((soldOut) => {
    return soldOut.originalStock === soldOut.sold;
});

console.log(soldOutTelevision);

//1c
console.log("Opdracht 1c")
const findTv = inventory.find((tv) => {
    return tv.type === 'NH3216SMART';
})

console.log(findTv);

//1d
console.log("Opdracht 1d")
const highRefresh = inventory.map((sportTv) => {
    if (sportTv.refreshRate >= 100) {
        return sportTv.brand + " " + sportTv.name + ", suitable: true"
    } else return sportTv.brand + " " + sportTv.name + ", suitable: false"
})

console.log(highRefresh)

//1e
console.log("Opdracht 1e")
const bigSizeTv = inventory.filter((bigTv) => {
    const biggerSixtyFive = bigTv.availableSizes.find((size) => {
        return size >= 65;
    })
    return biggerSixtyFive;
})

console.log(bigSizeTv);
//1f
console.log("Opdracht 1e")

const ambiLightTv = inventory.filter((tv) => {
    const ambilightOption = tv.options.find((ambilightOption) => {
        return ambilightOption.name === "ambiLight";
    })
    if (ambilightOption.applicable === true) {
        return true
    }
})

console.log(ambiLightTv);
