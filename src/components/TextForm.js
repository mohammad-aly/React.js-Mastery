import React,{useState} from 'react'
//state: is like a variable we can change one variable and everywhere the variable is present it will be changed

export default function TextForm(props) {

    // const [text, setText] = useState('Enter the text here');
    const [text, setText] = useState('');
    // text = "enter the text" //wrong way to write set text
    // setText('enter the text') // correct way to set the text

    const hanldeUpClick = ()=>{
        // console.log("Uppercase clicked:" + text);
        const newText = text.toUpperCase();
        setText(newText);
    }

    const hanldeLoClick = ()=>{
        // console.log("Uppercase clicked:" + text);
        const newText = text.toLowerCase();
        setText(newText);
    }

    const hanldeClearClick = ()=>{
        const newText = '';
        setText(newText);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    //on change should write because the event should listened what u are typing
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={hanldeUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={hanldeLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={hanldeClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>

        <div className="container my-2">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
