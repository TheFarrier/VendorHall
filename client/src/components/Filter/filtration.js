import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class CheckboxLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Price: Low - High"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Price: High - Low"
        />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
        <FormControlLabel
          disabled
          control={<Checkbox checked value="checkedE" />}
          label="Ages: 0 - 5"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedF}
              onChange={this.handleChange('checkedF')}
              value="checkedF"
              indeterminate
            />
          }
          label="Ages: 6 - 12"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedG}
              onChange={this.handleChange('checkedG')}
              value="checkedG"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="Ages: 12 - 19"
        />
        <FormControlLabel
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />
          }
          label="Custom icon"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              value="checkedI"
            />
          }
          label="Ages: 21+"
        />
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxLabels);