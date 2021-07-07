
const initialState = {appData:[1,2,3,4],messages:["pp","oo","uu","ii"]};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_1" :
            return {...state, appData: state.appData.concat(action.payload)};
        case "ADD_MESSAGE_1":
            return {...state, messages: state.messages.concat(action.payload)};
        default:
            return state;

    }
};

export default reducer;