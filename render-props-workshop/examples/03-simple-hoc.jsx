import React, { Component } from 'react';
import DotLoader from '7g-components/dot-loader/dot-loader.jsx';

//  HOC takes a component, returns a stateless functional component
const withLoaderDots = (WrappedComponent) => (props) => {
    return props.isLoading ? <DotLoader /> : <WrappedComponent {...props} />;
};

const SomeText = ({ text }) => (
    <div>{text}</div>
);

const SomeTextWithLoaderDots = withLoaderDots(SomeText);
export default SomeTextWithLoaderDots;
