const initialState = {
    loveItems: [],
    total: 0
}
const loveReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_LOVE":
            console.log(state, payload)
            const { total } = state
            return {
                ...payload,
                total: parseInt(total) + 1
            }
        case "MODIFY_QUANTITY_LOVE":
            return {
                ...payload,
            }
        case "LOAD_LOVE":
            return {
                ...payload,
            }
        case "DELETE_LOVE_ITEM":
            return {
                ...payload,
            }
        default:
            return state
    }

}


export default loveReducer