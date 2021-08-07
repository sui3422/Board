import {useSelector} from "react-redux";
import {RootState} from "../index";

const BoardBody = () => {

    const items = useSelector((store: RootState) => store.boardReducer)

    type boardData = {
        'id': number,
        'title': string,
        'contents': string
    }

    return (
        <>
            {items.map((i: boardData, idx: number) => (
                <ul>
                    <li>{i.title}</li>
                    <li>{i.contents}</li>
                </ul>
            ))}
        </>
    )
}


export default BoardBody;