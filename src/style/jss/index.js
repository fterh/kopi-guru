import jss from 'jss';
import preset from 'jss-preset-default';

import constants from './../constants';

jss.setup(preset());

const styles = {
  app: {
    fontFamily: 'Roboto, sans-serif',
    padding: '0 20px'
  },
  header: {
    textAlign: 'center'
  },
  footer: {
    color: constants.brown,
    fontSize: '0.9em',
    textAlign: 'center',
    lineHeight: '0.5em',
    '& a': {
      color: constants.brown,
      '&:hover': {
        color: constants.lightBrown
      }
    }
  }
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;
