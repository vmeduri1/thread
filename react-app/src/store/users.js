import { responsiveFontSizes } from "@material-ui/core"

const findUsers = (users) => ({
    type: 'FETCH_USERS',
    payload: users
})

const updateUsers = (user) => ({
    type: 'UPDATE_USER',
    payload: user
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

export const getOneUserById = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return { errors }
    }

    const user = await response.json()

    dispatch(findUsers(user))

    return user;
}

export const updateUser = ({ id, f_name, username, l_name, email, profile_pic, phone_number }) => async (dispatch) => {
    console.log('We hit this!')
    const response = await fetch(`/api/users/`, {
                                                method: 'PUT',
                                                headers: {'Content-Type': 'application/json'},
                                                body: JSON.stringify({ id, f_name, username, l_name, email, profile_pic, phone_number })
                                            })
    if (!response.ok) {
        const errors = await response.json()
        console.log(errors)
        return { errors }
    }
    const user = await response.json()

    dispatch(updateUsers(user))

    return user;

}


export default function userReducer(state = {}, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'UPDATE_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}
