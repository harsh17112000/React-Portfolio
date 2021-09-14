import React, { useState } from 'react'
import "./work.scss";

const Works = () => {

    const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "assest/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assest/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assest/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];


    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1:2) :// aano means
        setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {
                    data.map((d) => {
                        return (
                            <>
                                <div className="container">
                                    <div className="item">
                                        <div className="left">
                                            <div className="leftContainer">
                                                <div className="imgContainer">
                                                    <img src={d.icon} alt="imgport" />
                                                </div>
                                                <h2>{d.title}</h2>
                                                <p>{d.desc}</p>
                                                <span>Projects</span>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <img src={d.img} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
            <img src="assest/arrow.png" className="arrow left" alt="arrow" onClick={()=>handleClick("left")} />
            <img src="assest/arrow.png" className="arrow right" alt="arrow" onClick={()=>handleClick()} />
        </div>
    )
}

export default Works



// way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1:2) :// a
//         setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1 : 0)

// first line means 
// jo way = left hoy to chek krse curent slide jo e 0 thi greater hse to tene decrese kre 6 
// and jo 0 pr hse means left side koi data j nathi to 2 means array ni left 0 to 2 atle
// 2 thi start thse reverse 
// jo last pos 2 na khbr hoy to array.length -1 pn lakhi skay
// ex setCurrentSlide(currentSlide > 0 ? currentSlide-1:array.length-1)

// second line means
// eight pr click krsu to check krse jo 0 prj hoisu 
// 0<2 true atle increase thse then
// 1<2 true
// 2<2 false to 0 set kryu means first thi start thse