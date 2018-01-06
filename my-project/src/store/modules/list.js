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
            if(params.upRef){    //if上拉，则拼接数组
                $res = state.listData.concat(res.data.data);
                commit(types.GET_REFRESH_UP,false);   //关闭loading
              }else {
                $res = res.data.data;   //否则init加载
              }
              if($res.length === 0){
                commit(types.GET_REFRESH_UP,false);   //关闭loading
              }
            //拼接好数组 并且提交
            commit(types.GET_LIST, $res)
        }).catch((err) => {
            console.log(err)
        })
    },
    getUpRefesh({commit},upRef){
        commit(types.GET_REFRESH_UP,upRef);  //提交上拉加载状态
      },
};
//对所取到的数据进行过滤
const getters = {
    listData: state => state.listData,
    isRefresh: state => state.isRefresh,
};

const mutations = {
    [types.GET_LIST](state, res) {
        state.listData = res
    },
    [types.GET_REFRESH_UP](state, res) {
        state.isRefresh = res
      },    
};

export default {
    state,
    getters,
    actions,
    mutations
}