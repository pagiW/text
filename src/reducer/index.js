const reducer = (state, action) => {
    switch (action.type) {
        case 'Create':
            if (action.payload) {
                return {
                    ...state,
                    txt: [action.payload, ...state.txt],
                    number: state.number + 1
                }
            } else {
                return state;
            }
        case 'Delet':
            return {
                ...state,
                txt: state.txt.filter(text => text.id !== action.payload)
            }
        case 'Make':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default reducer;