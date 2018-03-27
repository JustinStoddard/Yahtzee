import { ROLL_DICE, TOGGLE_DICE } from '../actions/currentGame';

const currentGame = (
  state = {
    roll: 0,
    dice: [...new Array(5)],
    keep: [],
  }, 
  action 
) => {
    switch (action.type) {

      case ROLL_DICE:
        return {
          ...state,
          dice: action.dice,  // This is telling what redux state will look like in its next form.
          roll: state.roll + 1 // This increments the state of roll everytime you push "ROLL DICE on the page".
        }

      case TOGGLE_DICE:
        return {
          ...state,
          keep: action.keep  //
        }

      default:
        return state
  }
}