
const initialState = {appData:[5,6,7,8],messages:["ll","tt","vv","kk"],locations:[]};

const reducer2 = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_2" :
            return {...state, appData: state.appData.concat(action.payload)};
            case "ADD_LOCATION" :
                return {...state, locations: state.locations.concat(action.payload)};
            case "ADD_MESSAGE_2":
            return {...state, messages: state.messages.concat(action.payload)};
        default:
            return state;

    }
};


export default reducer2;