import React from "react";
import "./Portfolio.css";

import ItemPortfolio from "../itemPortfolio/ItemPortfolio";

import portfolio from "./Portfolio.json"


function Portfolio({ portfolio }) {


    return (
        <main>


           {portfolio.map(
                (item, index) => 
                <ItemPortfolio
                    key={index}
                    link={item.link}
                    image={item.image}
                    title={item.title}
                ></ItemPortfolio>

           )}
    

        </main>


    )


}

export default Portfolio;