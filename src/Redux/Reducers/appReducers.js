import {ADD_QUEST, DELETE_QUEST, EDIT_QUEST, DONE_QUEST} from "../Actions/appActions"

export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_QUEST:
            return [ ...state, action.payload];
        case DELETE_QUEST:
            return;
        case EDIT_QUEST:
            return state.map(rate => {
                if (rate.id !== action.payload.id){
                    return state;
                }

                const { id, quest, date, timeStart, timeDone, done} = action.payload
                
                    return ({
                        id,
                        quest,
                        date,
                        timeStart,
                        timeDone,
                        done,
                    });
                
            });
        case DONE_QUEST:
            return state.filter(rate => rate.id !== action.payload.id);

        default:
            console.log('Nie ma takiego typu akcji')
            return state;
    }
}