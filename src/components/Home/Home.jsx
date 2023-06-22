import "./Home.css"
import data from "../data.json"
import DateTimeDisplay from "../Navbar/Time.jsx"
import { useState } from "react"


export const Home = () => {
    const [planet, setPlanet] = useState(data.planet);
    const [people, setPeople] = useState(data.people);
    const [politics, setPolitics] = useState(data.politics);


    return (
        <>
            <div className="container" >
            <span><DateTimeDisplay/></span> <span><marquee>Bol India Bol - News In Shorts - Planet | People | Politics</marquee> </span>
                <h1 className="title">Planet</h1>
                <br />
                <div className="row pd-bt-30">
                    <div className="col-md-8 ">
                        <a target="_blank" href={planet[0].link}>
                        <hr />
                        <img src={planet[0].image} width={"100%"} alt="" />
                        <br />
                        <br />
                        <h2>{planet[0].title}</h2>
                        </a>
                    </div>
                    <div className="col-md-4 ">
                        <hr />
                        <a target="_blank" href={planet[1].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={planet[1].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{planet[1].title}</p>
                                </div>
                            </div>
                        </a>
                        <br />
                        <hr />
                        <a target="_blank" href={planet[2].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={planet[2].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{planet[2].title}</p>
                                </div>
                            </div>
                        </a>
                        <br />
                        <hr />
                        <a target="_blank" href={planet[3].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={planet[3].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{planet[3].title}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <br />
            </div>
            <div className="container" >
    
                <h1 className="title">People</h1>
                <br />
                <div className="row pd-bt-30">
                    <div className="col-md-8 ">
                        <a target="_blank" href={people[0].link}>
                        <hr />
                        <img src={people[0].image} width={"100%"} alt="" />
                        <br />
                        <br />
                        <h2 >{people[0].title}</h2>
                        </a>
                    </div>
                    <div className="col-md-4 ">
                        <hr />
                        <a target="_blank" href={people[1].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={people[1].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{people[1].title}</p>
                                </div>
                            </div>
                        </a>
                        <br />
                        <hr />
                        <a target="_blank" href={people[2].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={people[2].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{people[2].title}</p>
                                </div>
                            </div>
                        </a>
                        <br />
                        <hr />
                        <a target="_blank" href={people[3].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={people[3].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{people[3].title}</p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
                <br />
            </div>
            <div className="container" >
                <h1 className="title">Politics</h1>
                <br />
                <div className="row pd-bt-30">
                    <div className="col-md-8 ">
                        <a target="_blank" href={politics[0].link}>
                        <hr />
                        <img src={politics[0].image} width={"100%"} alt="" />
                        <br />
                        <br />
                        <h2>{politics[0].title}</h2>
                        </a>
                    </div>
                    <div className="col-md-4 ">
                        <hr />
                        <a target="_blank" href={politics[1].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={politics[1].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{politics[1].title}</p>
                                </div>
                            </div>
                        </a>
                        <br />
                        <hr />
                        <a target="_blank" href={politics[2].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={politics[2].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{politics[2].title}</p>
                                </div>
                            </div>
                        </a>
                        <br />
                        <hr />
                        <a target="_blank" href={politics[3].link}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={politics[3].image} width={"100%"} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <p className="right-title">{politics[3].title}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}