import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
// @ts-ignore
import {useHistory} from "react-router-dom";
import {deleteList} from "../store/actions";


const BoardBody = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const items = useSelector((store: RootState) => store.boardReducer)

    type boardData = {
        'id': number,
        'title': string,
        'contents': string,
    }
    console.log(items)
    const deleteBoardList = (contentId: number) => {
        // @ts-ignore
        dispatch(deleteList(items.filter((_, idx) => {
            console.log(contentId, 'contentId');
            console.log(idx + 1);
            return contentId !== idx + 1;
        })))
    }


    return (
        <ul>
            {items.map((i: boardData, idx: number) => (
                <li key={idx}>
                    <p>{i.title}</p>
                    <p>{i.contents}</p>
                    <button onClick={() => deleteBoardList(i.id)}>삭제</button>
                </li>
            ))}

            <button onClick={() => history.push('/w')}>게시물 쓰기</button>
        </ul>
    )
}


export default BoardBody;