import { responsiveFontSizes } from "@material-ui/core"

const findUsers = (users) => ({
    type: 'FETCH_USERS',
    payload: users
})

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch(`/api/users/`)

    if (!response.ok) {
        const errors = await response.json()
        return { errors }
    }

    const users = await response.json()

    dispatch(findUsers(users))

    return users
}

export const getOneUserById = () => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return { errors }
    }

    const user = await response.json()

    dispatch(findUsers(user))

    return user;
}


export default function userReducer(state = {}, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}
