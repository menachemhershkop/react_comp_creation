import '../css/Button.css';

function Button(props){
    let color;
    if (props.type == 'Friend') {
        color = 'green'
    }
    if (props.type == 'Teacher') {
        color = 'blue'
    }
    if (props.type == 'Student') {
        color = 'Purple'
    }
    return (<button id='button' className="" style={{background: color}} >{props.type}</button>
)}

export default Button;