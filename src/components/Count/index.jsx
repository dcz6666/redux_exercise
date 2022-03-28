import React, { Component } from 'react';
// 引入store 用户获取redux 中的状态
import store from '../../redux/store'
class Count extends Component {
    state={count:0}
   
    increment=()=>{
        let {value} =this.selectNumber;
        store.dispatch({type:'increment',data:value*1})
    }
    decrement=()=>{
        let {value} =this.selectNumber;
        store.dispatch({type:'decrement',data:value*1})
    }
    incrementIfOdd=()=>{
        let {value} =this.selectNumber;
        let count =store.getState();
        if(count%2!==0){
            store.dispatch({type:'incrementIfOdd',data:value*1})
        }
    }
    incrementAsync=()=>{
        let {value} =this.selectNumber;
        setTimeout(()=>{
            store.dispatch({type:'incrementAsync',data:value*1})
        },500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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