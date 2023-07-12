
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
            
        default:
            throw Error("method does not exist in appReducer")
    }
}