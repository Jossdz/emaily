import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import FIELDS from './formFields';

class SurveyForm extends Component{

  renderFields(){
    return _.map(FIELDS, ({ label, name })=>{
      return (
        <Field key={name} component={SurveyField} label={label} name={name} type='text'/>
      )
    })
  }

  render(){
    return(
      <div> 
        <br/>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to='/surveys' className='red btn-flat white-text left'>
            Cancel
            <i className='material-icons right'>block</i>
          </Link>
          <button className="teal btn-flat right white-text" type='submit'>
            Next
            <i className='material-icons right'>chevron_right</i>
          </button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '')

  _.each(FIELDS, ({ name }) => {
    if(!values[name]) errors[name] = `you must provide a ${name}`
  })

  return errors
}



export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)