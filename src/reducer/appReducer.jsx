
export const appReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case "ADD_TO_LIST":
            return {
                ...state,
                todoList: payload.notes
            }
        case "FILTER_LIST":
            return {
                ...state,
                todoList: payload.notes
            }
        case "DELETE_LIST":
            return {
                ...state,
                todoList: []
            }
        case "SET_NOTES":
            return {
                ...state,
                todoList: payload.notes
            }
            
        default:
            throw Error("method does not exist in appReducer")
    }
}