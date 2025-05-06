import './App.css';
import totalSold from "./helpers/totalSold.js";
import totalBought from "./helpers/totalBought.js";
import totalStock from "./helpers/totalStock.js";
import createTelevisionName from "./helpers/createTelevisionName.js";
import createTelevisionPrice from "./helpers/createTelevisionPrice.js";
import {bestSellingTv} from "./constants/inventory.js";


function App() {
    return (
        <>
            <h1>Start van app</h1>
            <p className="productsSold">Aantal verkochte producten {totalSold()} </p>

            <p className="productsBought">Aantal ingekochte producten {totalBought()}</p>

            <p className="productsStock">Aantal te verkopen producten {totalStock}</p>

            <p>{createTelevisionName(bestSellingTv.brand, bestSellingTv.type, bestSellingTv.name)}</p>

            <p>{createTelevisionPrice(bestSellingTv.price)}</p>
        </>
    )
}

export default App
