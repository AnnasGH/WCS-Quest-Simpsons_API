import './index.css';

function DisplaySimpson ({simpson}) {
    return (
        simpson && (
            <div className="DisplaySimpson">
                <div id="Title">"The Simpsons"</div>
                <div className="Simpson">
                    <div id="ImgContainer">
                    <img src={simpson.image} alt={simpson.character}/>
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