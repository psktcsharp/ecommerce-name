import SAVE_ITEM_DB from "../actions/types"

export const saveItemDB = newItem => dispatch => {
    dispatch({
        type: SAVE_ITEM_DB,
        payload: newItem
    });
};