import React,{useState} from 'react'
//state: is like a variable we can change one variable and everywhere the variable is present it will be changed

export default function TextForm(props) {

    const hanldeUpClick = ()=>{
        console.log("Uppercase clicked" + text);
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('Enter the text here');
    // text = "enter the text" //wrong way to write set text
    // setText('enter the text') // correct way to set the text
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={hanldeUpClick}>Convert to upperCase</button>
        </div>
    )
}
