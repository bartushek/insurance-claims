import React from 'react';
import { CLAIM_FORM } from '../formsIndex';
import { Field, reduxForm } from 'redux-form';
import { firebaseConnect } from 'react-redux-firebase';
import TextField from '../../components/textField';
import Button from 'material-ui/Button';
import Select from '../../components/select';

@firebaseConnect()
@reduxForm({
  form: CLAIM_FORM,
})
class ClaimForm extends React.Component {
  handleFormSubmit = (values) => {
    return this.props.firebase.push('/claims', values);
  }
  render() {
    const {anyTouched, error, handleSubmit, submitSucceeded} = this.props;
    if (submitSucceeded) {
      return <span>Thank you!</span>
    }
    return (
      <div>
        <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
          {anyTouched &&
          error &&
          <span>
          {error}
        </span>}
          <div>
            <Field label="Name" margin="normal" name="name" id="name" component={TextField} type="text" />
            <Field label="Email" margin="normal" name="email" id="email" component={TextField} type="email" />
            <Field label="Policy ID" margin="normal" name="policyID" id="policyID" component={TextField} type="text" />
            <Field
              native
              id="claimType"
              name="claimType"
              label="Claim type"
              component={Select}
            >
              <option value="" />
              <option value={'lost-baggage'}>Lost Baggage</option>
              <option value={'theft'}>Theft</option>
              <option value={'missed-flight'}>Missed Flight</option>
              <option value={'illness'}>Illness</option>
              <option value={'accident'}>Accident</option>
            </Field>
            <Field label="Claim amount" margin="normal" name="claimAmount" id="claimAmount" component={TextField} type="number" />
            <Field id="dateOccured" name="dateOccured" label="Date occured" type="date" InputLabelProps={{shrink: true}} component={TextField} />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ClaimForm;
