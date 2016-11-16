import React from 'react';
import {Button, Modal} from '../src/index.js';

class ModalStory extends React.Component {

    constructor() {
        super();
        this.state = {openModal:null};
    }

    render() {
        return (
            <div style={{width:'900px'}}>

                <h2>Modal Box <small style={{fontSize:'11px'}}><a target='_blank' href='https://github.com/wix-private/wix-style-react/blob/master/stories/Modal.js'>source</a></small></h2>

                <div style={{width:'400px'}}>

                    <Button style={'fullblue'} onClick={() => this.setState({openModal:'blue'})} >Open Blue Modal</Button>
                    <Modal isOpen={this.state.openModal === 'blue'} 
                           title={'I am a blue title'} 
                           confirmText={'OK'} 
                           cancelText={'Cancel'} 
                           style={'blue'}
                           onOk={() => this.setState({openModal:null})}
                           onCancel={() => this.setState({openModal:null})}
                           >
                           Hello blue world!
                    </Modal>

                    <br/>
                    <br/>

                    <Button style={'fullred'} onClick={() => this.setState({openModal:'red'})} >Open Red Modal</Button>
                    <Modal isOpen={this.state.openModal === 'red'} 
                           title={'I am a red title'} 
                           confirmText={'OK'} 
                           cancelText={'Cancel'} 
                           style={'red'}
                           onOk={() => this.setState({openModal:null})}
                           onCancel={() => this.setState({openModal:null})}
                           >
                           Hello red world!
                    </Modal>

                    <br/>
                    <br/>

                    <Button style={'fullgreen'} onClick={() => this.setState({openModal:'green'})} >Open Green Modal</Button>
                    <Modal isOpen={this.state.openModal === 'green'} 
                           title={'I am a green title'} 
                           confirmText={'OK'} 
                           cancelText={'Cancel'} 
                           style={'green'}
                           onOk={() => this.setState({openModal:null})}
                           onCancel={() => this.setState({openModal:null})}
                           >
                           Hello green world!
                    </Modal>

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
                            <td>style</td>
                            <td>blue, red, green</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>isOpen</td>
                            <td>boolean</td>
                            <td>Is the modal open or not</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>string</td>
                            <td>The title to show on the top bar</td>
                        </tr>
                        <tr>
                            <td>confirmText</td>
                            <td>string</td>
                            <td>Text for the bottom 'ok' button</td>
                        </tr>
                        <tr>
                            <td>cancelText</td>
                            <td>string</td>
                            <td>Text for the bottom 'cancel' button</td>
                        </tr>
                        <tr>
                            <td>onCancel</td>
                            <td>function</td>
                            <td>Called when user presses the X on the top bar, or the cancel button on the footer</td>
                        </tr>
                        <tr>
                            <td>onOk</td>
                            <td>function</td>
                            <td>Called when user presses the ok button</td>
                        </tr>
                        <tr>
                            <td>hideFooter</td>
                            <td>boolean</td>
                            <td>Hides the standard footer from the bottom of the dialog. Note: You can add the footer using Modal.Footer</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Footer Attributes</h3>
                <p>You can control the footer directly by setting hideFooter to true, and adding a Modal.Footer object directly</p>

                <table className='attributes'>
                    <tbody>
                        <tr>
                            <th>Attribute name</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>blue, red, green</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>confirmText</td>
                            <td>string</td>
                            <td>Text for the bottom 'ok' button</td>
                        </tr>
                        <tr>
                            <td>cancelText</td>
                            <td>string</td>
                            <td>Text for the bottom 'cancel' button</td>
                        </tr>
                        <tr>
                            <td>onCancel</td>
                            <td>function</td>
                            <td>Called when user presses the X on the top bar, or the cancel button on the footer</td>
                        </tr>
                        <tr>
                            <td>onOk</td>
                            <td>function</td>
                            <td>Called when user presses the ok button</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ModalStory;
