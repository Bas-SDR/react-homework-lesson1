import totalBought from "./totalBought.js";
import totalSold from "./totalSold.js";

function totalStock() {
    return totalBought() - totalSold()}

export default totalStock()