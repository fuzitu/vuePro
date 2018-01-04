<template>
  <div id="app" class="appview">
    <headerV></headerV>
  
   
    <contentV></contentV>
    <footerV></footerV>
      <loginForm></loginForm>
  </div>
</template>

<script>
  import {  mapGetters } from 'vuex'
import headerV from './components/headerV'
import loginForm from './pages/loginForm.vue'

import contentV from './components/contentV'

import footerV from './components/footerV.vue'

export default {
  name: 'app',
  components:{headerV,footerV,contentV,
  loginForm
  }
}
</script>

<style>

.appview{
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top:0;
}
.detail-wrap , .detail-wrap .mu-drawer{
  width: 100%;
  overflow: hidden;
  z-index: 9999;
}
.contentV{
  width: 100%;
  height: calc(100% - 112px);
  overflow-y: scroll;
  position: relative;
  -webkit-overflow-scrolling: touch;
  user-select: none;
}
@media (min-width: 480px){
  .mu-appbar {
    height: 56px;
    line-height: 56px;
  }
}
</style>
