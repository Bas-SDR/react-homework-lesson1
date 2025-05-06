function totalBought(listTelevisions) {
    let totalPurchased = 0;
    for (let i = 0; i < listTelevisions.length; i++) {
        totalPurchased = listTelevisions[i].originalStock + totalPurchased;
    }
    return totalPurchased
}

export default totalBought