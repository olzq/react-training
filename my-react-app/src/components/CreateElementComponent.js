import React from 'react'

function CreateElementCompnent() {
    return React.createElement(
        'div', {},
        React.createElement('h1', {}, 'Create Element')
    );
}
export default CreateElementCompnent;