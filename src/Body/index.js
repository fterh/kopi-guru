// @flow

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

import withStylesApplied from './../style/material-ui';

type Props = {
  classes: {
    [string]: string
  }
};

type State = {
  base: 'coffee',
  ice: boolean,
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
      <Paper className={classes.Paper}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>Base</FormLabel>
              <RadioGroup
                row
                name="base"
                value={this.state.base}
                // onChange={this.handleChange('color')}
              >
                <FormControlLabel
                  value="coffee"
                  control={<Radio />}
                  label="Coffee"
                />
              </RadioGroup>
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
    );
  }
}

export default withStylesApplied(Body);
