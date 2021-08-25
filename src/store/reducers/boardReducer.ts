const INITIAL_STATE = [
    {
        "id": 1,
        "title": "제목1",
        "contents": "내용1",
    },
    {
        "id": 2,
        "title": "제목2",
        "contents": "내용2",
    }
]

const boardReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "SELECT_LIST":
            return state;

        case "CREATE_LIST":
            return [...state, action.payload];

        case "DELETE_LIST":
            return [...action.payload]
        default:
            return state;
    }

}

export default boardReducer;