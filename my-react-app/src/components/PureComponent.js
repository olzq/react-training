import React from 'react'

class PureComponent extends React.PureComponent {
    render() {
        const {text} = this.props;
        return (
            <div>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default PureComponent;