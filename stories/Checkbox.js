import React from 'react';
import {Checkbox} from '../src/index.js';

class CheckboxStory extends React.Component {

    constructor(params) {
        super(params);
        this.state = {checked:false};
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>Checkbox</h2>
                <p>Controlled checkbox</p>

                <div style={{width:'400px'}} className='ltr'>
                    <Checkbox 
                        checked={this.state.checked} 
                        onChange={() => this.setState({checked:!this.state.checked})}
                        >

                        <div>Hello World</div>

                    </Checkbox>
                </div>

                <h3>Attributes</h3>
                <table className='attributes'>
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
                            <td>disabled</td>
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
                <h4>LTR</h4>
                <div className='ltr'>
                    <Checkbox checked={false}><div>Hello World (checked=false)</div></Checkbox>
                    <Checkbox checked={true}><div>Hello World (checked=true)</div></Checkbox>
                    <Checkbox disabled={true} checked={false}><div>Hello World (disabled=true & checked=false)</div></Checkbox>
                    <Checkbox disabled={true} checked={true}><div>Hello World (disbaled=true & checked=true)</div></Checkbox>
                </div>
                <h4>RTL</h4>
                <div className='rtl' style={{width:'200px'}} >
                    <Checkbox checked={false}><div>שלום עולם</div></Checkbox>
                    <Checkbox checked={true}><div>שלום עולם</div></Checkbox>
                    <Checkbox disabled={true} checked={false}><div>שלום עולם</div></Checkbox>
                    <Checkbox disabled={true} checked={true}><div>שלום עולם</div></Checkbox>
                </div>

            </div>
        );
    }
}

export default CheckboxStory;
