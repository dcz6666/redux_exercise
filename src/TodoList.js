import React, { Component } from 'react'

import store from './store'
import axios from 'axios'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import {changeInputAction,addItemAction ,deleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
// const data=[
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn=this.clickBtn.bind(this)
        store.subscribe(this.storeChange);  //订阅Redux的状态

        console.log("this.state",this.state);
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
         );
    }
    componentDidMount(){
        axios.get('data.json').then((res)=>{
            console.log("res",res)
        })
    }
 
    storeChange(){
        console.log("store.getState()",store.getState());
        this.setState(store.getState())
    }
    changeInputValue(e){
        // const action = {
        //     type: CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value);
        store.dispatch(action)
    }

    clickBtn(){
        const action =addItemAction()
        store.dispatch(action)
    }

    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action);
    }
}

export default TodoList;
