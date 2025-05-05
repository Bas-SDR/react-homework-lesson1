import './App.css';
import soldTelevisions from "./helpers/totalSold.js";
import boughtTelevisions from "./helpers/totalBought.js";
import totalStock from "./helpers/totalStock.js";


function App() {
    return (
        <>
            <h1>Start van app</h1>
            <p className="productsSold">Aantal verkochte producten {soldTelevisions()} </p>

            <p className="productsBought">Aantal ingekochte producten {boughtTelevisions()}</p>

            <p className="productsStock">Aantal te verkopen producten {totalStock}</p>
        </>
    )
}

export default App
