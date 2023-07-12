
export const appReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case "INCREMENT":
            return {
                ...state,
                todoListLen: payload.todoListLen
            }
        case "DECREMENT":
            return {
                ...state,
                todoListLen: payload.todoListLen
            }
    
        default:
            break;
    }
}