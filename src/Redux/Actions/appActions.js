export const ADD_QUEST = 'ADD_QUEST'
export const DELETE_QUEST = 'DELETE_QUEST'
export const EDIT_QUEST = 'EDIT_QUEST'
export const DONE_QUEST = 'DONE_QUEST'

const addQuest = ({id, quest, date, timeStart, timeDone }) =>({
    type: ADD_QUEST,
    payload:{
        id,
        quest,
        date,
        timeStart,
        timeDone,
    }
})

const deleteQuest = ({id }) =>({
    type: DELETE_QUEST,
    payload:{
        id,
    }
})
const editQuest = ({id, quest, date, timeStart, timeDone, done }) =>({
    type: EDIT_QUEST,
    payload:{
        id,
        quest,
        date,
        timeStart,
        timeDone,
        done,
    }
})
const doneQuest = ({id, done }) =>({
    type: DONE_QUEST,
    payload:{
        id,
        done,
    }
})
