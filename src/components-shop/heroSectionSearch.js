export default function HeroSectionSearch(props) {
    return (

        <div className="container p-4">
            <div className="row p-4">
                <div className="col-12 p-1 p-md-5">
                    <h1 className="display-6 text-center" style={{ fontFamily: "Edu VIC WA NT Beginner", fontWeight: "200" }}>
                        Get the cheapest <span className="text-danger">discount</span> of up to <span className="text-danger">50%</span> by subscribing to the <span className="text-primary text-decoration-underline ahmad-text">Ahmad Adptr</span> shop
                    </h1>
                    <p className="text-center mt-4" style={{fontSize : ".8rem", fontFamily : "cursive"}}>
                        <mark className="py-1 px-3 rounded-pill">Searching : {props.search}</mark>
                    </p>
                </div>
            </div>
        </div>

    )
}