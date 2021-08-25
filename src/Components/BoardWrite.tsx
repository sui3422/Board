import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import {useHistory} from "react-router-dom";
import {RootState} from "../index";
import {createList} from "../store/actions";

const BoardWrite = () => {


        const history = useHistory();

        const items = useSelector((store: RootState) => store.boardReducer)

        const [text, setText] = useState({
            id: items.length + 1,
            title: "",
            contents: "",
        })

        const handleTextArea = (e: ChangeEvent<HTMLInputElement>) => {
            const {value, name} = e.target;
            setText({
                ...text,
                [name]: value,
            });
        };

        const dispatch = useDispatch()

        const onSumit = () => {
            dispatch(createList(text))
            history.push('/')
        };


        return (
            <form>
                <input type="text" name="title" value={text.title} onChange={handleTextArea}/>
                <input type="text" name="contents" value={text.contents} onChange={handleTextArea}/>
                <button onClick={onSumit}>등록</button>
            </form>
        );
    }

;

export default BoardWrite;