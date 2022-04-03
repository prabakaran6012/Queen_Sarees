import toast from "react-hot-toast"

export const addToLove = (item) => async (dispatch) => {
    const loveItems = JSON.parse(localStorage.getItem('love')) || []
    console.log(loveItems)
    console.log(loveItems.includes(item))
    if (!loveItems.find(i => i._id === item._id)) {
        loveItems.push({ ...item, quantity: 1 })
        localStorage.setItem("love", JSON.stringify(loveItems))
        toast.success(`${item.name} added to love`)
        dispatch({
            type: "ADD_TO_LOVE",
            payload: { loveItems }
        })
    } else {
        toast.error(`${item.name} is already in your love`)
    }
}

export const modifyQuantity = (item, quantity) => async (dispatch) => {
    const loveItems = JSON.parse(localStorage.getItem('love')) || []
    const newArr = loveItems.map(i => {
        if (i._id === item._id) {
            return {
                ...i,
                quantity: parseInt(quantity)
            }
        } else {
            return { ...i }
        }
    })
    // !just add the values
    let total = 0
    localStorage.setItem('love', JSON.stringify(newArr))
    newArr.forEach(i => {
        total += i.quantity ? parseInt(i.quantity) : 1
    })
    dispatch(
        {
            type: "MODIFY_QUANTITY_LOVE",
            payload: { loveItems: newArr, total }
        }
    )
}

export const deleteItem = (item) => async (dispatch) => {
    const loveItems = JSON.parse(localStorage.getItem('love')) || []
    const newArr = loveItems.filter(i => i._id !== item._id)
    let total = 0
    localStorage.setItem('love', JSON.stringify(newArr))
    //! just subtract the value
    newArr.forEach(i => {
        total += i.quantity ? parseInt(i.quantity) : 1
    })
    dispatch(
        {
            type: "DELETE_LOVE_ITEM",
            payload: { loveItems: newArr, total }
        }
    )
}

export const loadLove = () => async (dispatch) => {
    const loveItems = JSON.parse(localStorage.getItem('love')) || []
    let total = 0
    loveItems.forEach(i => {
        total += i.quantity
    })
    dispatch({
        type: "LOAD_LOVE",
        payload: { loveItems, total }
    })
}