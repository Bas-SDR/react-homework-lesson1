import './App.css';
import calculateTotalSold from "./helpers/calculateTotalSold.js";
import calculateTotalBought from "./helpers/calculateTotalBought.js";
import createTelevisionName from "./helpers/createTelevisionName.js";
import createTelevisionPrice from "./helpers/createTelevisionPrice.js";
import calculateTotalStock from "./helpers/calculateTotalStock.js";
import createScreenSize from "./helpers/createScreenSize.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import {bestSellingTv, inventory} from "./constants/inventory.js";


function App() {
    return (
        <>
            <main className="page-setting">
                <h1>Tech it easy dashboard</h1>

                <section>
                    <h3>Verkoopoverzicht</h3>
                    <div className="outer-container">
                        <article className="dashboard-article products-sold">
                            <h3>Aantal verkochte producten</h3>
                            <h2>{calculateTotalSold(inventory)}</h2>
                        </article>

                        <article className="dashboard-article products-bought">
                            <h3>Aantal ingekochte producten </h3>
                            <h2>{calculateTotalBought(inventory)}</h2>
                        </article>

                        <article className="dashboard-article products-stock">
                            <h3>Aantal te verkopen producten </h3>
                            <h2>{calculateTotalStock(inventory)}</h2>
                        </article>
                    </div>
                    <h3>Lijst beschikbare merken</h3>
                    <ul>
                        {inventory.map((tv) => {
                            return <li key={tv.type}>{tv.brand}</li>
                        })}
                    </ul>
                </section>
                <section>
                    <h3>Best verkochte TV</h3>
                    <article className="bestSeller">
                        <img src={bestSellingTv.sourceImg} alt="Bestselling TV image" className="television-image"/>
                        <div className="television-details">
                            <h3>{createTelevisionName(bestSellingTv.brand, bestSellingTv.type, bestSellingTv.name)}</h3>
                            <p className="television-price">{createTelevisionPrice(bestSellingTv.price)}</p>
                            <p className="television-size">{createScreenSize(bestSellingTv.availableSizes)}</p>
                            <ul className="options-list">
                                <li><img src={check} alt="Check icon" className="icon"/>wifi</li>
                                <li><img src={minus} alt="Minus icon" className="icon"/>speech</li>
                                <li><img src={check} alt="Check icon" className="icon"/>hdr</li>
                                <li><img src={check} alt="Check icon" className="icon"/>bluetooth</li>
                                <li><img src={minus} alt="Minus icon" className="icon"/>ambilight</li>
                            </ul>
                        </div>
                    </article>
                </section>
                <section>
                    <h3>Lijst van TVs</h3>
                    {inventory.map((tv) => {
                        return (
                            <article className="regularTv" key={tv.type}>
                                <img src={tv.sourceImg} alt="Regular TV image" className="television-image"/>
                                <div className="television-details">
                                    <h3>{createTelevisionName(tv.brand, tv.type, tv.name)}</h3>
                                    <p className="television-price">{createTelevisionPrice(tv.price)}</p>
                                    <p className="television-size">{createScreenSize(tv.availableSizes)}</p>
                                    <ul className="options-list">
                                        {tv.options.map((option) => {
                                            if (option.applicable === true) {
                                                return (<li key={tv.type}><img src={check} alt="Check icon"
                                                                               className="icon"/>{option.name}</li>)
                                            } else return (<li key={tv.type}><img src={minus} alt="Minus icon"
                                                                                  className="icon"/>{option.name}</li>)
                                        })}
                                    </ul>
                                </div>
                            </article>
                        )
                    })}
                    <article className="regularTelevisions">
                    </article>
                </section>
                <section>
                    <button type="button" onClick={() => console.log("Meest verkocht eerst")}>Meest verkocht eerst
                    </button>
                    <button type="button" onClick={() => console.log("Goedkoop eerst")}>Goedkoop eerst</button>
                    <button type="button" onClick={() => console.log("Meest geschikt voor sport eerst")}>Meest geschikt
                        voor
                        sport eerst
                    </button>
                </section>
            </main>
        </>
    )
}

export default App
