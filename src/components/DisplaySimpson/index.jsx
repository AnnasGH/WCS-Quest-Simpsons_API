import './index.css';

function DisplaySimpson ({simpson}) {

    return (
        simpson && (
            <div className="DisplaySimpson">
                <div id="Title">"The Simpsons"</div>
                <div className="Simpson">
                    <div id="ImgContainer">
                    <img 
                    src={simpson.image} 
                    alt={simpson.character} 
                    style={simpson.characterDirection === "Right" ? {transform: "rotateY(0.5turn"} : null}
                    />
                    </div>
                    <div id="TextContainer">
                        <div id='SimpsonQuote'>"{simpson.quote}"</div>
                        <div id='SimpsonName'>{simpson.character}</div>
                    </div>
                </div>
            </div>
        )
    );
}

export default DisplaySimpson;