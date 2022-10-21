import rightChoicesImage from "../images/right choice image.png"


export function RightChoices() {

    return (<>
        {/* <!-- RIGHT CHOICES SECTION --> */}
        
            <div className="container right__choices-container">
                <div className="right__choices-left">
                    <img src={rightChoicesImage} alt="right choice" />
                </div>
                <div className="right__choices-right">
                    <h5>Right choices</h5>
                    <h2>
                        Scared about making
                        <span
                        > wrong skincare <br />
                            choices?
                        </span>
                    </h2>
                    <p>
                        Let us match you with the right skincare products <br />so that you
                        can make the best decision.
                    </p>
                </div>
            </div>
        
        {/* <!-- END OF RIGHT CHOICES SECTION --> */}


    </>)
}