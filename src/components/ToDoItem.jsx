import { useState } from "react";

function ToDoItem(props) {

    const [isClicked, setClick] = useState(false);

    function toggleCross() {
        setClick(initValue => (initValue ? false : true));
        console.log(isClicked);
    }

    return (
        <li
            style={{ textDecoration: isClicked ? "line-through" : "" }}
            onClick={toggleCross}>

            {props.itemValue}
        </li>
    );
}

export default ToDoItem;