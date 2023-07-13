
export const appReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case "INCREMENT":
            return {
                ...state,
                counter: payload.counter
            }
        case "DECREMENT":
            return {
                ...state,
                counter: payload.counter
            }
        case "RESET_COUNTER":
            return {
                ...state,
                counter: 0
            }

        case "ADD_TO_LIST":
            return {
                ...state,
                todoLists: payload.notes
            }
        case "FILTER_LIST":
            return {
                ...state,
                todoLists: payload.notes
            }
        case "DELETE_LIST":
            return {
                ...state,
                todoLists: []
            }
            
        default:
            throw Error("method does not exist in appReducer")
    }
}