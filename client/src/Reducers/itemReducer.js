import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELET_ITEM } from '../actions/type';

const initialState = {
    items: [
        {id:uuid(), name: 'Yoghurt'},
        {id:uuid(), name: 'Coffee'},
        {id:uuid(), name: 'Tea'},
        {id:uuid(), name: 'Wine'}
    ]
}


export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
            default: 
            return state
    }
}