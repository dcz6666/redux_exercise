// 引入createStore 专门用户创建redux 中最为核心的store对象
import {createStore} from 'redux'
// 引入为Count 组件服务的reduce
import countReducer from './count_reducer'
//暴露store
export default createStore(countReducer);
