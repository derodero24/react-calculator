import * as actionTypes from './actionTypes'

export const ClickNumber = (number) => ({ type: actionTypes.NUMBER, number });
export const ClickEqual = () => ({ type: actionTypes.EQUAL });
export const ClickDelete = () => ({ type: actionTypes.DELETE });
export const ClickDot = () => ({ type: actionTypes.DOT });
export const ClickOperator = (operator) => ({ type: actionTypes.OPERATOR, operator });
