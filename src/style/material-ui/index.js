import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    // Component styling
    Paper: {
      marginBottom: theme.spacing.unit * 2,
      padding: theme.spacing.unit * 2
    },
    // Common classes styling
    centered: {
      textAlign: 'center'
    },
    inline: {
      display: 'inline'
    }
  };
};

export default withStyles(styles);
