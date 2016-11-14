import React from 'react';
import ToggleSwitch from '../src/ToggleSwitch/ToggleSwitch.js';

class ToggleSwitchStory extends React.Component {

    constructor(params) {
        super(params);
        this.state = {checked:false};
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>ToggleSwitch</h2>
                <p>Controlled switch</p>

                <div style={{width:'400px'}} className='ltr'>
                    <ToggleSwitch checked={this.state.checked} onClick={() => this.setState({checked:!this.state.checked})} />
                </div>

                <h3>Attributes</h3>
                <table className={'attributes'}>
                    <tr>
                        <th>Attribute name</th>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>checked</td>
                        <td>boolean</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td>function</td>
                        <td>Callback function when user clicks the component</td>
                    </tr>
                </table>

                <h3>Usage Examples</h3>
                <ToggleSwitch checked={true} />
                <ToggleSwitch checked={false} />
            </div>
        );
    }
}

export default ToggleSwitchStory;
