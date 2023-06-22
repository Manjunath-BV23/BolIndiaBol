import { useState } from "react";
import data from "../data.json"
import { SinglePage } from "../SinglePage/SinglePage";


export const Politics = () => {
    const [politics, setPolitics] = useState(data.politics);
    console.log("Data: ", politics)

    return (
        <>
        <SinglePage data={politics} title={"Politics"}/>
        </>
    )
}