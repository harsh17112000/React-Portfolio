import React, { useEffect, useState } from 'react'
import Portfoliolist from '../portfoliolist/Portfoliolist';
import "./Portfolio.scss"
import { list } from './portfoliodata';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../../data';

const Portfolio = () => {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]) // jyare selected change thase tyare data change karsu

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    list.map((item) => {
                        return (
                            <>
                                <Portfoliolist title={item.title}
                                    active={selected === item.id}
                                    setSelected={setSelected}
                                    id={item.id}
                                />
                            </>
                        )
                    })
                }

            </ul>
            <div className="container">
                {
                    data.map((d) => {
                        return (
                            <>

                                <div className="item">
                                    <img src={d.img}
                                        alt="port" />
                                    <h3>{d.title}</h3>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio
