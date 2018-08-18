// SurveyForm shows a form for a use to add input
import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form'; //enables communication wtih redux store 
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

// -- the name is used as key in the redux store
// -- component="input" HTML component
class SurveyForm extends Component{
    renderFields(){
        return _.map(formFields, ({ label, name }) =>{
            return (
            <Field key={name} component={SurveyField} type="text" label={label} name={name} />
            );
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(()=> this.props.onSurveySubmit())}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button className="teal btn-flat right white-text" type="submit">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    };
}

function validate(values){
    // values looks like the submitted object of the form
    const errors={}; // if errors exist, process is stopped.  Errors in values object is added to erros object

    errors.recipients = validateEmails(values.recipients || '');
    _.each(formFields, ({name})=>{
        if(!values[name]){
            errors[name]= `You must provide a ${name}`
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);