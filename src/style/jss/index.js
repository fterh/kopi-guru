import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
  app: {
    fontFamily: 'Roboto, sans-serif',
    padding: '0 20px'
  },
  header: {
    textAlign: 'center'
  }
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;
