export const selectList = (content: any) => {
    return {type: "SELECT_LIST", payload: content}
}

export const createList = (content: any) => {
    return {type: "CREATE_LIST", payload: content}
}