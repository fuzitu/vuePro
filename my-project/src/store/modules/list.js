import API from '../../lib/API'
import * as types from '../types'

const state = {
    listData: [],
    isRefresh: false,
    listDetial: {
        open: false,
        itemCont: {
            title: null,
            content: null
        }
    }
};


const actions = {
    //获取列表
    getListData({ commit, state }, params) {
        API.getList(params.$option).then((res) => {
            let $res = [];
            $res = res.data.data;
            //拼接好数组 并且提交
            commit(types.GET_LIST, $res)
        }).catch((err) => {
            console.log(err)
        })
    }
};
//对所取到的数据进行过滤
const getters = {
    listData: state => state.listData
};

const mutations = {
    [types.GET_LIST](state, res) {
        state.listData = res
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}