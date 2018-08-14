// @flow

import type State from './../Body';

export default function(state: State) {
  let baseString: string = '';
  let iceString: string = '';
  let milkString: string = '';
  let brewString: string = '';
  let sugarString: string = '';

  switch (state.base) {
    case 'coffee':
      baseString = 'Kopi';
      break;

    default:
      break;
  }

  switch (state.ice) {
    case true:
      iceString = 'peng';
      break;

    case false:
      iceString = '';
      break;

    default:
      break;
  }

  switch (state.milk) {
    case 'none':
      milkString = 'O';
      break;

    case 'condensed':
      milkString = '';
      break;

    case 'evaporated':
      milkString = 'C';
      break;

    default:
      break;
  }

  switch (state.brew) {
    case 'weak':
      brewString = 'po';
      break;

    case 'default':
      brewString = '';
      break;

    case 'strong':
      brewString = 'gao';
      break;

    default:
      break;
  }

  switch (state.sugar) {
    case 'none':
      sugarString = 'kosong';
      break;

    case 'less':
      sugarString = 'siew dai';
      break;

    case 'default':
      sugarString = '';
      break;

    case 'more':
      sugarString = 'gah dai';
      break;

    default:
      break;
  }

  return `${baseString} ${milkString} ${sugarString} ${brewString} ${iceString}`;
}
