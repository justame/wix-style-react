import React from 'react';
import {ToggleSwitch} from '../src/index.js';

class ToggleSwitchStory extends React.Component {

    constructor(params) {
        super(params);
        this.state = {checked:false};
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>ToggleSwitch <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix-private/wix-style-react/blob/master/stories/ToggleSwitch.js'>source</a></small></h2>
                <p>Controlled switch</p>

                <div style={{width:'400px'}} className='ltr'>
                    <ToggleSwitch checked={this.state.checked} onChange={() => this.setState({checked:!this.state.checked})} />
                </div>

                <h3>Attributes</h3>
                <table className={'attributes'}>
                    <tbody>
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
                            <td>onChange</td>
                            <td>function</td>
                            <td>Callback function when user changes the value of the component</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Usage Examples</h3>
                <ToggleSwitch checked={true} />
                <ToggleSwitch checked={false} />
            </div>
        );
    }
}

export default ToggleSwitchStory;
