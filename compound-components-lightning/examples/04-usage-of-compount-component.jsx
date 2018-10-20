import React from 'react';
import Collapsible from '7g-components/collapsible/collapsible.jsx';


const MyComponent = () => (
    <div>
        <Collapsible toggleText="Some kind of heading text">
            <Collapsible.Content>
                👌 👌 👌 👌 👌 👌 👌 👌 👌 👌
            </Collapsible.Content>
            <Collapsible.Toggle />
        </Collapsible>
    </div>
);

export default MyComponent;
