import React, { Component } from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';
import { gooseFacts } from '7g-constants';

class GooseFacts extends Component {
    static propTypes = {
        render: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            fact: this.randomGooseFact,
        };
    }
    get randomGooseFact() {
        return gooseFacts[random(0, gooseFacts.length - 1)];
    }
    render() {
        return this.props.render(this.state);
    }
}

const SomeComponent = () => {
    return (
        <section className="cool-section">
            <h1 className="cool-section__heading">
                You're up to date! Have a GooseFact!
            </h1>
            <GooseFacts
                render={({ fact }) => (
                    <div className="cool-section__goose-fact">
                        <img src="bruce.svg" />
                        <span>
                            {fact}
                        </span>
                    </div>
                )}
            />
        </section>
    )
}

export const SomeComponent;
