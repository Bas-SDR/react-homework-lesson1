function calculateSoldProducts(listTelevisions) {
    let totalSold = 0;
    for (let i = 0; i < listTelevisions.length; i++) {
        totalSold =  listTelevisions[i].sold + totalSold
    }
    return totalSold;
}

export default calculateSoldProducts;