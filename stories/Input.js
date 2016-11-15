import React from 'react';
import {Input} from '../src/index.js';

export default () => {
    return (
        <div style={{width:'900px'}}>

            <h2>Input</h2>
            <p>General input container.</p>

            <div style={{width:'400px'}}>
                <Input />
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
                        <td>value</td>
                        <td>Inputs value</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>defaultValue</td>
                        <td>Default value for those who wants to use this component un-controlled</td>
                        <td></td>
                    </tr>
                    <tr style={{lineHeight:'1.5em'}}>
                        <td>tabIndex</td>
                        <td>Standard component tabIndex</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>Placeholder to display</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>error</td>
                        <td>Is input value erroneous</td>
                        <td>boolean:true or false</td>
                    </tr>
                    <tr>
                        <td>unit</td>
                        <td>Unit to display in input box</td>
                        <td></td>
                    </tr>
                    <tr style={{lineHeight:'1.5em'}}>
                        <td>extraClasses</td>
                        <td>Extra CSS classes to add to the component</td>
                        <td>Classes are added to wrapper div</td>
                    </tr>
                </tbody>
            </table>

            <h3>Usage Examples</h3>

            <h4>Error attribute Example (error=true)</h4>
            <h5>LTR</h5>
            <div className='ltr' style={{width:'400px'}}>
                <Input error={true} />
            </div>
            <h5>RTL</h5>
            <div className='rtl' style={{width:'400px'}}>
                <Input error={true} />
            </div>

            <h4>Unit attribute Example (unit='$')</h4>
            <h5>LTR</h5>
            <div className='ltr' style={{width:'400px'}}>
                <Input unit={'$'}/>
            </div>
            <h5>RTL</h5>
            <div className='rtl' style={{width:'400px'}}>
                <Input unit={'$'}/>
            </div>

            <h4>Unit + Error attribute Example (unit='$' & error=true)</h4>
            <h5>LTR</h5>
            <div className='ltr' style={{width:'400px'}}>
                <Input unit={'$'} error={true} />
            </div>
            <h5>RTL</h5>
            <div className='rtl' style={{width:'400px'}}>
                <Input unit={'$'} error={true} />
            </div>

            <h4>Force Focus attribute Example (forceFocus=true)</h4>
            <div style={{width:'400px'}}>
                <Input forceFocus={true}/>
            </div>

            <h4>Force Hover attribute Example (forceHover=true)</h4>
            <div style={{width:'400px'}}>
                <Input forceHover={true}/>
            </div>

        </div>
    )
}
