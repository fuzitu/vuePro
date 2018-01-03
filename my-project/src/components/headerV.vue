<template>
<div class="header">
   <mu-appbar :title=Title>
  <mu-icon-button icon="menu" slot="left" @click='openForm(true)'/>
   <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="设置"/>
        <mu-menu-item title="帮助"/>
        <mu-menu-item v-if="loginStatus" @click="signOutF" title="退出"/>
      </mu-icon-menu>
</mu-appbar>
</div>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex';
    export default{
       
        data(){
            return {
                Title:'VUE中文社区'
            }
        },
        methods:{
             ...mapActions(['signOut','openLoginForm']),
            openForm(status){
                this.openLoginForm(status)
            },
            signOutF:function(){
                this.signOut();
                this.Vstatus.$emit('signOut','已退出');    
            }
        },
        computed:{
            ...mapGetters(['loginStatus'])
        }
    }
</script>
<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
