import React from 'react';
import {RadioGroup} from '../src/index.js';

class CheckboxStory extends React.Component {

    constructor(params) {
        super(params);
        this.state = {value:1};
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>Radio Group <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix-private/wix-style-react/blob/master/stories/RadioGroup.js'>source</a></small></h2>
                <p>Controlled radio buttons</p>

                <div style={{width:'400px'}} className='ltr'>
                    <RadioGroup value={this.state.value} onChange={(value) => this.setState({value})}> 
                        <div><RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio></div>
                    </RadioGroup>
                </div>

                <h3>RadioGroup - Attributes</h3>
                <table className='attributes'>
                    <tbody>
                        <tr>
                            <th>Attribute name</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>[number|string] Selected radio button value</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>function(value)</td>
                            <td>Callback function when user selects a different value.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>RadioGroup.Radio - Attributes</h3>
                <table className='attributes'>
                    <tbody>
                        <tr>
                            <th>Attribute name</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>[number|string] Value of this radio button</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>vAlign</td>
                            <td>[top|center] Positioning of the radio bottom compared to the label</td>
                            <td>Default: center</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Usage Example</h3>

                <h4>LTR</h4>
                <div className='ltr'>
                    <RadioGroup value={1}>
                        <div><RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio></div>
                    </RadioGroup>
                </div>

                <h4>RTL</h4>
                <div className='rtl'>
                    <RadioGroup value={1}>
                        <div><RadioGroup.Radio value={1}>אופציה 1</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={2}>אופציה 2</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={3}>אופציה 3</RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={4}>אופציה 4</RadioGroup.Radio></div>
                    </RadioGroup>
                </div>

                <h4>vAlign = center</h4>
                <div className='ltr'>
                    <RadioGroup value={1}>
                        <div><RadioGroup.Radio value={1} vAlign={'center'}><div>Option 1</div><small>best option</small></RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={2} vAlign={'center'}><div>Option 2</div><small>Also pretty good option</small></RadioGroup.Radio></div>
                    </RadioGroup>
                </div>

                <h4>vAlign = top</h4>
                <div className='ltr'>
                    <RadioGroup value={1}>
                        <div><RadioGroup.Radio value={1} vAlign={'top'}><div>Option 1</div><small>best option</small></RadioGroup.Radio></div>
                        <div><RadioGroup.Radio value={2} vAlign={'top'}><div>Option 2</div><small>Also pretty good option</small></RadioGroup.Radio></div>
                    </RadioGroup>
                </div>
            </div>
        );
    }
}

export default CheckboxStory;
