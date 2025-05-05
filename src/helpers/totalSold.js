import {bestSellingTv, inventory} from "../constants/inventory.js";

function soldTelevisions() {
    let totalSold = bestSellingTv.sold;
    for (let i = 0; i < inventory.length; i++) {
        totalSold = inventory[i].sold + totalSold;
    }
    return totalSold;
}

export default soldTelevisions