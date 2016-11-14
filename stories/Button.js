import React from 'react';
import Button from '../src/Button/Button.js';

export default () => {
    return (
        <div style={{width:'900px'}}>

            <h2>Button</h2>
            <p>General Buttons</p>

            <div style={{width:'400px'}}>
                <Button style={'fullblue'}>Click Me!</Button>
            </div>

            <h3>Attributes</h3>
            <table className='attributes'>
                <tr>
                    <th>Attribute name</th>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>style</td>
                    <td>fullblue, emptyblue, fullpurple, emptypurple, fullgreen, emptygreen</td>
                    <td></td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>boolean</td>
                    <td></td>
                </tr>
                <tr>
                    <td>onClick</td>
                    <td>function</td>
                    <td></td>
                </tr>
            </table>

            <h3>Usage Examples</h3>

            <h4>Style = fullblue</h4>
            Standard: <Button style={'fullblue'} >Click Me!</Button>
            Hover: <Button style={'fullblue'} hover={true} >Click Me!</Button>
            Active: <Button style={'fullblue'} active={true} >Click Me!</Button>
            Disabled : <Button style={'fullblue'} disabled={true} >Click Me!</Button>

            <h4>Style = emptyblue</h4>
            Standard: <Button style={'emptyblue'} >Click Me!</Button>
            Hover: <Button style={'emptyblue'} hover={true} >Click Me!</Button>
            Active: <Button style={'emptyblue'} active={true} >Click Me!</Button>
            Disabled: <Button style={'emptyblue'} disabled={true} >Click Me!</Button>

            <h4>Style = fullpurple</h4>
            Standard: <Button style={'fullpurple'} >Click Me!</Button>
            Hover: <Button style={'fullpurple'} hover={true} >Click Me!</Button>
            Active: <Button style={'fullpurple'} active={true} >Click Me!</Button>
            Disabled: <Button style={'fullpurple'} disabled={true} >Click Me!</Button>

            <h4>Style = emptypurple</h4>
            Standard: <Button style={'emptypurple'} >Click Me!</Button>
            Hover: <Button style={'emptypurple'} hover={true} >Click Me!</Button>
            Active: <Button style={'emptypurple'} active={true} >Click Me!</Button>
            Disabled: <Button style={'emptypurple'} disabled={true} >Click Me!</Button>

            <h4>Style = fullgreen</h4>
            Standard: <Button style={'fullgreen'} >Click Me!</Button>
            Hover: <Button style={'fullgreen'} hover={true} >Click Me!</Button>
            Active: <Button style={'fullgreen'} active={true} >Click Me!</Button>
            Disabled: <Button style={'fullgreen'} disabled={true} >Click Me!</Button>

            <h4>Style = emptygreen</h4>
            Standard: <Button style={'emptygreen'} >Click Me!</Button>
            Hover: <Button style={'emptygreen'} hover={true} >Click Me!</Button>
            Active: <Button style={'emptygreen'} active={true} >Click Me!</Button>
            Disabled: <Button style={'emptygreen'} disabled={true} >Click Me!</Button>

            <h4>Style = fullred</h4>
            Standard: <Button style={'fullred'} >Click Me!</Button>
            Hover: <Button style={'fullred'} hover={true} >Click Me!</Button>
            Active: <Button style={'fullred'} active={true} >Click Me!</Button>
            Disabled: <Button style={'fullred'} disabled={true} >Click Me!</Button>

            <h4>Style = emptyred</h4>
            Standard: <Button style={'emptyred'} >Click Me!</Button>
            Hover: <Button style={'emptyred'} hover={true} >Click Me!</Button>
            Active: <Button style={'emptyred'} active={true} >Click Me!</Button>
            Disabled: <Button style={'emptyred'} disabled={true} >Click Me!</Button>

        </div>
    )
}
