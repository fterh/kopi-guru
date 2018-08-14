import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    Paper: {
      padding: theme.spacing.unit * 2
    }
  };
};

export default withStyles(styles);
