<template>
<div class="footerv">
    <mu-paper>
  <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
    <mu-bottom-nav-item value="home" title="首页" to="/home" icon="restore"/>
    <mu-bottom-nav-item value="send" title="发布" to="/send" icon="favorite"/>
    <mu-bottom-nav-item value="message" title="消息" to="/message" icon="location_on"/>
    <mu-bottom-nav-item value="my" title="我的" to="/my" icon="location_on"/>
  </mu-bottom-nav>
</mu-paper>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style>

</style>
