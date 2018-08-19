// @flow

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

import withStylesApplied from './../style/material-ui';

import Brain from './../Brain';

type Props = {
  classes: {
    [string]: string
  }
};

export type State = {
  base: 'coffee' | 'tea',
  ice: boolean,
  pulled: boolean,
  milk: 'none' | 'condensed' | 'evaporated',
  brew: 'weak' | 'default' | 'strong',
  sugar: 'none' | 'less' | 'default' | 'more'
};

class Body extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      base: 'coffee',
      ice: false,
      pulled: false,
      milk: 'condensed',
      brew: 'default',
      sugar: 'default'
    };
  }

  handleChange = (key) => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={`${classes.Paper} ${classes.centered}`}>
          <Typography className={classes.inline} variant="title">
            Your order:{' '}
          </Typography>
          <Typography className={classes.inline} variant="headline">
            {Brain(this.state)}
          </Typography>
        </Paper>
        <Paper className={classes.Paper}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel>Base</FormLabel>
                <RadioGroup
                  row
                  name="base"
                  value={this.state.base}
                  onChange={(event, value) => {
                    this.handleChange('base')(event, value);
                    if (value === 'coffee') {
                      this.handleChange('pulled')(null, false);
                    }
                  }}
                >
                  <FormControlLabel
                    value="coffee"
                    control={<Radio />}
                    label="Coffee"
                  />
                  <FormControlLabel
                    value="tea"
                    control={<Radio />}
                    label="Tea"
                  />
                </RadioGroup>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.ice}
                        onChange={this.handleChange('ice')}
                        value="ice"
                      />
                    }
                    label="Ice"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.pulled}
                        disabled={this.state.base !== 'tea'}
                        onChange={this.handleChange('pulled')}
                        value="pulled"
                      />
                    }
                    label="Pulled"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel>Milk</FormLabel>
                <RadioGroup
                  row
                  name="milk"
                  value={this.state.milk}
                  onChange={this.handleChange('milk')}
                >
                  <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="No milk"
                  />
                  <FormControlLabel
                    value="condensed"
                    control={<Radio />}
                    label="Condensed milk"
                  />
                  <FormControlLabel
                    value="evaporated"
                    control={<Radio />}
                    label="Evaporated milk"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel>Brew</FormLabel>
                <RadioGroup
                  row
                  name="brew"
                  value={this.state.brew}
                  onChange={this.handleChange('brew')}
                >
                  <FormControlLabel
                    value="weak"
                    control={<Radio />}
                    label="Weaker"
                  />
                  <FormControlLabel
                    value="default"
                    control={<Radio />}
                    label="Default"
                  />
                  <FormControlLabel
                    value="strong"
                    control={<Radio />}
                    label="Stronger"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel>Sugar</FormLabel>
                <RadioGroup
                  row
                  name="sugar"
                  value={this.state.sugar}
                  onChange={this.handleChange('sugar')}
                >
                  <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                  />
                  <FormControlLabel
                    value="less"
                    control={<Radio />}
                    label="Less"
                  />
                  <FormControlLabel
                    value="default"
                    control={<Radio />}
                    label="Default"
                  />
                  <FormControlLabel
                    value="more"
                    control={<Radio />}
                    label="More"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStylesApplied(Body);
