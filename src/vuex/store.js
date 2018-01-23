//引入相关文件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);  //注册vuex

//定义初始化常量
const state = {

  currentView:'seivice',//当前显示的组件 //在所有组件中可以通过 this.$store.state.currentView 来调用
  firstPartActive : true,//页面的第一屏显示

};

//定义动作
const mutations = {

  showFirstPart(state,p1){ //在所有组件中可以通过 this.$store.commit('showFirstPart', false); 来调用
    state.firstPartActive = p1;
  },
  saveFmapInfo(state,obj){
    state.fmapId = obj.fmapId;
    state.fmapFloorId = obj.fmapFloorId;
    state.mapId = obj.mapId;
  }

};


export default new Vuex.Store({
  state,
  mutations
})
