import calculateTotalBought from "./calculateTotalBought.js";
import calculateTotalSold from "./calculateTotalSold.js";

function calculateTotalStock(listTelevisions) {
    const totalSoldTV = calculateTotalSold(listTelevisions);
    const totalBoughtTV = calculateTotalBought(listTelevisions);
    return totalBoughtTV - totalSoldTV
}

export default calculateTotalStock;