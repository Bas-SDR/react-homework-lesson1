// 2.54 cm = 1 inch
// bestSellingTv -> availableSizes


function createScreenSize(listTelevisions) {
    let screenSize = "";
    for (let i = 0; i < listTelevisions.length; i++) {
        const currentScreenSizeInch = listTelevisions[i];
        const currentScreenSizeCm = Math.round(listTelevisions[i] * 2.54);

        screenSize = screenSize + `${currentScreenSizeInch} inch (${currentScreenSizeCm} cm)`

        if (i < listTelevisions.length - 1) {
            screenSize = screenSize + " | ";
        }
    }
    return screenSize;
}

export default createScreenSize;