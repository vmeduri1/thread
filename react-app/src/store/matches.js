const findMatches = (matches) => ({
    type: 'FETCH_MATCHES',
    payload: matches
})

export const getAllMatches = () => async (dispatch) => {
    const response = await fetch(`/api/matches/`)

    if (!response.ok) {
        const errors = await response.json()
        return { errors }
    }

    const matches = await response.json()

    dispatch(findMatches(matches.matches))

    // return matches
}

export const addingSwipe = (id) => async (dispatch) => {
    const response = await fetch(`/api/matches/`, { headers: {'Content-Type': 'application/json'},
                                                    method : 'POST',
                                                    body: JSON.stringify({id})})

    if (!response.ok) {
        const errors = await response.json()
        return { errors }
    }

    const matches = await response.json()
}

export default function matchReducer(state = {}, action) {
    switch(action.type) {
        case 'FETCH_MATCHES':
            return {
                ...state,
                matches: action.payload
            }
        default:
            return state
    }
}
