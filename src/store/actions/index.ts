export const selectList = (content: boardData) => {
    return {type: "SELECT_LIST", payload: content}
}

export const createList = (content: boardData) => {
    return {type: "CREATE_LIST", payload: content}
}

export const deleteList = (content: any) => {
    return {type: "DELETE_LIST", payload: content}
}

type boardData = {
    'id': number,
    'title': string,
    'contents': string,
}