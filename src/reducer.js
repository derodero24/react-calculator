import * as actionTypes from './actionTypes'

const initState = {
    result: '',
    needReset: false
}

export default function reducer(state = initState, action) {
    if (state.needReset) {
        state.result = '';
        state.needReset = false;
    }

    switch (action.type) {
        case actionTypes.NUMBER:
            return {
                ...state,
                result: state.result + action.number
            };
        case actionTypes.EQUAL:
            return equal(state, action);
        case actionTypes.DELETE:
            return {
                ...state,
                result: state.result.slice(0, -1),
            };
        case actionTypes.DOT:
            return dot(state, action);
        case actionTypes.OPERATOR:
            return operator(state, action);
        default:
            return state;
    }
}

function equal(state, action) {
    var last_char = state.result.slice(-1);

    if ('+-*/'.indexOf(last_char) === -1)
        return {
            ...state,
            result: String(Function('return (' + state.result + ')')()),
            needReset: true
        };
    else
        return state
}

function dot(state, action) {
    var last_number = ('+' + state.result).split(/[+\-*/]/).slice(-1)[0];

    if (!last_number.match(/[0-9]/) || last_number.match(/\./))
        return state;
    else
        return {
            ...state,
            result: state.result + '.'
        };
}

function operator(state, action) {
    var last_char = state.result.slice(-1);

    if ('+-*/.'.indexOf(last_char) === -1)
        return {
            ...state,
            result: state.result + action.operator
        };
    else if (action.operator === '-' && '*/'.indexOf(last_char) !== -1)
        return {
            ...state,
            result: state.result + action.operator
        };
    else
        return state;
}
