const postMessageToStore = (message) => ({
    type: 'POST_MESSAGE_TO_STORE',
    payload: message
})

const findMessages = (messages) => ({
    type: 'GET_MESSAGES',
    payload: messages
})

export const getAllMessages = ({ id }) => async (dispatch) => {
    console.log(id, 'WAZZZZZUUUUP');
    const response = await fetch(`/api/messages/${id}/`)

    if (!response.ok) {
        const errors = await response.json()
        return { errors }
    }

    const messages = await response.json()
    console.log(messages, 'HIIIIIIIIIIII')

    dispatch(findMessages(messages.messages))
}

export const postMessage = (sender_id, recipient_id, content) => async (dispatch) => {
    // console.log(sender_id, recipient_id, content, 'HIIIYYYAA')
    const response = await fetch('/api/messages/', {
        headers: { 'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({sender_id, recipient_id, content})
    })

    if (!response.ok) {
        const errors = await response.json();
        return { errors }
    }

    const message = await response.json();
    // console.log(message, 'HIIIIIYYYAAA');
    dispatch(postMessageToStore(message));
}

export default function messages(state = {}, action) {
    let newState = { ...state }
    switch(action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                ...action.payload
            }
        case 'POST_MESSAGE_TO_STORE':
           newState[action.payload.id] = action.payload
           return newState
        default:
            return state
    }
}
