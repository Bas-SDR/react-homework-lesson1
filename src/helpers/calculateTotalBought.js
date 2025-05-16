function calculateTotalBought(listTelevisions) {
    let totalBought = 0;
    for (let i = 0; i < listTelevisions.length; i++) {
        totalBought = listTelevisions[i].originalStock + totalBought;
    }
    return totalBought
}

export default calculateTotalBought;