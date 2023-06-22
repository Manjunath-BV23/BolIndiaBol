import data from "../data.json"
import { useState } from "react";
import { SinglePage } from "../SinglePage/SinglePage";


export const Planet = () => {
    const [planet, setPlanet] = useState(data.planet);

    return (
        <>
        <SinglePage data={planet} title={"Planet"}/>
        </>
    )
}