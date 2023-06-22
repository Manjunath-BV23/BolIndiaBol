import data from "../data.json"
import { useState } from "react";
import { SinglePage } from "../SinglePage/SinglePage";


export const People = () => {
    const [people, setPeople] = useState(data.people);

    return (
        <>
        <SinglePage data={people} title={"People"}/>
        </>
    )
}