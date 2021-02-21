import React, { Component } from 'react';
import { NewInfoButton } from '../components/Inputs';
import './FormFieldset.css';
import NewInputs from './NewInputs';

class FormFieldset extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
        };

        this.addNewInfo = this.addNewInfo.bind(this);
    }

    addNewInfo(event) {
        event.preventDefault();

        const inputs = (
            <NewInputs inputs={this.props.inputs} enableAnimation={true} includeDelete={true} />
        );
        const newInfo = [...this.state.info, inputs];
        this.setState({
            info: newInfo,
        });
    }

    render() {
        const { title, description } = this.props.legend;
        // Don't show <NewInfoButton /> on 'Personal Information' fieldset since they're is no
        // reason to add more personal info.
        const isPersonalFieldset = title === 'Personal Information';

        // Initial inputs.
        const inputs = (
            <NewInputs inputs={this.props.inputs} enableAnimation={false} includeDelete={false} />
        );
        const { info } = this.state;

        return (
            <fieldset>
                <legend className="legend">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </legend>
                <div className="input-container">
                    {inputs}
                    {info.length !== 0 && info.map((element) => element)}
                    {!isPersonalFieldset && <NewInfoButton onClick={this.addNewInfo} />}
                </div>
            </fieldset>
        );
    }
}

export default FormFieldset;
