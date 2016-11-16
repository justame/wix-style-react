import React from 'react';
import {Select} from '../src/index.js';

class SelectStory extends React.Component {
    constructor(params) {
        super(params);
        this.state = {value:0};
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>Select <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix/wix-style-react/blob/master/stories/Select.js'>source</a></small></h2>
                <p>Dropdown Select Component</p>

                <div style={{width:'400px'}} className='ltr'>
                    <Select value={this.state.value} options={[
                        {value:0, text:'Option 1'},
                        {value:1, text:'Option 2'},
                        {value:2, text:'Option 3'},
                        {value:3, text:'Option 4'},
                        {value:null, text:'-'},
                        {value:4, text:'Divider example above'}
                    ]} onChange={(value)=>this.setState({value})}></Select>
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
                            <td>options</td>
                            <td>Array of objects containing a value and a text. If text is '-', a divider will render at that position.</td>
                            <td>text should normally be just a text, but the system supports React elements as well.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>Current selected value</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>function(value)</td>
                            <td>Callback function called whenever the user selects a different value in the list</td>
                        </tr>
                        <tr>
                            <td>dropDirectionUp</td>
                            <td>boolean - whether the component opens up or down</td>
                            <td>defaults: false</td>
                        </tr>
                        <tr>
                            <td>placeHolder</td>
                            <td>string - shown when no option is selected</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <h3>Usage Examples</h3>

                <h4>RTL</h4>
                <div style={{width:'400px'}} className='rtl'>
                    <Select value={0} options={[
                        {value:0, text:'אופציה 1'},
                        {value:1, text:'אופציה 2'},
                        {value:2, text:'אופציה 3'},
                        {value:3, text:'אופציה 4'}
                    ]}></Select>
                </div>

                <h4>dropDirectionUp = true</h4>
                <div style={{width:'400px'}} className='ltr'>
                    <Select value={0} dropDirectionUp={true} options={[
                        {value:0, text:'Option 1'},
                        {value:1, text:'Option 2'},
                        {value:2, text:'Option 3'},
                        {value:3, text:'Option 4'}
                    ]}></Select>
                </div>

                <h4>placeHolder</h4>
                <div style={{width:'400px'}} className='ltr'>
                    <Select placeHolder={'Please pick one...'} dropDirectionUp={true} options={[
                        {value:0, text:'Option 1'},
                        {value:1, text:'Option 2'},
                        {value:2, text:'Option 3'},
                        {value:3, text:'Option 4'}
                    ]}></Select>
                </div>
            </div>
        )
    }
}

export default SelectStory;
