import {bestSellingTv, inventory} from "../constants/inventory.js";

function totalBought() {
    let totalBought = bestSellingTv.originalStock;
    for (let i = 0; i < inventory.length; i++) {
        totalBought = inventory[i].originalStock + totalBought;
    }
    return totalBought
}

export default totalBought