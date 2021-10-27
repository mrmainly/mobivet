export const stateReducer = (state, action) => {
    switch (action.type) {
        case 'notification':
            return { ...state, noti: action.payload }
        default:
            throw new Error();
    }
}