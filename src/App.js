import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from './components/Button'
import Result from './components/Result'
import * as actions from './actions'

class App extends Component {
    render() {
        const { result, acts } = this.props;
        return (
            <div align='center'>
                <Result result={result}/>
                <div>
                    <div>
                        <Button text='1'
                            onClick={() => acts.ClickNumber(1)}/>
                        <Button text='2'
                            onClick={() => acts.ClickNumber(2)}/>
                        <Button text='3'
                            onClick={() => acts.ClickNumber(3)}/>
                        <Button text='/' color='secondary'
                            onClick={() => acts.ClickOperator('/')}/>
                    </div>
                    <div>
                        <Button text='4'
                            onClick={() => acts.ClickNumber(4)}/>
                        <Button text='5'
                            onClick={() => acts.ClickNumber(5)}/>
                        <Button text='6'
                            onClick={() => acts.ClickNumber(6)}/>
                        <Button text='*' color='secondary'
                            onClick={() => acts.ClickOperator('*')}/>
                    </div>
                    <div>
                        <Button text='7'
                            onClick={() => acts.ClickNumber(7)}/>
                        <Button text='8'
                            onClick={() => acts.ClickNumber(8)}/>
                        <Button text='9'
                            onClick={() => acts.ClickNumber(9)}/>
                        <Button text='-' color='secondary'
                            onClick={() => acts.ClickOperator('-')}/>
                    </div>
                    <div>
                        <Button text='0'
                            onClick={() => acts.ClickNumber(0)}/>
                        <Button text='.'
                            onClick={() => acts.ClickDot()}/>
                        <Button text='del'
                            onClick={() => acts.ClickDelete()}/>
                        <Button text='+' color='secondary'
                            onClick={() => acts.ClickOperator('+')}/>
                    </div>
                    <Button text='=' color='primary' size='4'
                        onClick={() => acts.ClickEqual()}/>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({ result: state.result, exist_dot: state.exist_dot }),
    (dispatch) => ({ acts: bindActionCreators(actions, dispatch) })
)(App);
