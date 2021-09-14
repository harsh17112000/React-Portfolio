import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

const ListComp = (props) => {
    const [line, setLine] = useState(false);

    const dlt = () => {   
        setLine(true)
        console.log("harsh");
    };



    return (
        <>
            <div className="todo_style">
                <span onClick={dlt} className="dlticon">
                    <DeleteIcon />
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }} >
                    {props.text}
                </li>
                    <p>{props.time}</p>
            </div>
            
        </>
    )
};

export default ListComp;