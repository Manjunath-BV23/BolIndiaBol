import DateTimeDisplay from "../Navbar/Time"
import "./SinglePage.css"

export const SinglePage = ({data, title}) => {

    return (
        <div className="people" style={{borderTop: "1px solid black"}}>
            <div style={{display:"flex", justifyContent:"space-between",}}>
                <h1 >{title}</h1><h6 style={{paddingLeft:"20%"}}><DateTimeDisplay/></h6>

            </div>
            {data.map((e) => {
                return (
                    <div className="container"><hr />
                    <a href={e.link} className="atag">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={e.image} width={"100%"} height={220} alt="" />

                            </div>
                            <div className="col-md-3">
                                <h5 className="right-title">{e.title}</h5>
                                <p>{e.author}</p>

                            </div>
                            <div className="col-md-3 ourtext">
                                <p className="desc">{e.discription}</p>
                            </div>
                        </div>
                    </a>
                    </div>
                )
            })}
        </div>
    )
}