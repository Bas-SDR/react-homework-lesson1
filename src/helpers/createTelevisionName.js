import {bestSellingTv} from "../constants/inventory.js";

function createTelevisionName(tvBrand, tvType, tvName) {
    return `${tvBrand} ${tvType} - ${tvName};`
}

export default createTelevisionName