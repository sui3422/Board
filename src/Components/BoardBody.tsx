import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../index";

const BoardBody = () => {

    const items = useSelector((store: RootState) => store.boardReducer)

    const [boardState, setBoardState] = useState<boardData>()

    type boardData = {
        'id': number,
        'title': string,
        'contents': string
    }
    console.log(items)

    return (
        <div>123</div>
    );
}


export default BoardBody;