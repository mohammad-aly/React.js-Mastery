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
        // props.showAlert("Converted to UpperCase", "success");
        text.length > 0 ? props.showAlert("Converted to UpperCase", "success") : props.showAlert("Enter some text to Convert", "danger");
    }

    const hanldeLoClick = ()=>{
        // console.log("Uppercase clicked:" + text);
        const newText = text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to LowerCase", "success");
        text.length > 0 ? props.showAlert("Converted to LowerCase", "success") : props.showAlert("Enter some text to Convert", "danger");

    }

    const hanldeClearClick = ()=>{
        const newText = '';
        setText(newText);
        props.showAlert("Text is Cleared", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied to Clipboard", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")); 
        text.length > 0 ? props.showAlert("Extra Space has been removed", "success") : props.showAlert("Enter some text to remove extra Space", "danger");

    }

    //on change should write because the event should listened what u are typing
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    
    return (
        <>
        <div className="container" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black'} } id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={hanldeUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={hanldeLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={hanldeClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>

        <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter some text to preview here"}</p>
        </div>
        </>
    )
}
