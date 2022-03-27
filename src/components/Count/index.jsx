import React, { Component } from 'react';

class Count extends Component {
    state={count:0}
    increment=()=>{
        let {value} =this.selectNumber;
        let {count} =this.state;
        this.setState({count: parseInt(value)+count})
    }
    decrement=()=>{
        let {value} =this.selectNumber;
        let {count} =this.state;
        this.setState({count:count- parseInt(value)})
    }
    incrementIfOdd=()=>{
        let {value} =this.selectNumber;
        let {count} =this.state;
        if(count%2!==0){
            this.setState({count: parseInt(value)+count})
        }
    }
    incrementAsync=()=>{
        let that =this;
        let {value} =this.selectNumber;
        let {count} =this.state;
        setTimeout(()=>{
            that.setState({count: parseInt(value)+count})
        },500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <select ref={c=>this.selectNumber=c} id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select >&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                 <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;