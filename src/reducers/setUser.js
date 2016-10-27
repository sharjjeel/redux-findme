/**
 * Created by sharjjeel on 10/26/16.
 */
const setUser = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                "username" : action.username,
                "description" : action.description
            }
        case 'LOG_OUT':
            window.alert(action.type);
            return {}
        default:
            return state
    }
}

export default setUser
