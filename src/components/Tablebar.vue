<!-- 顶部导航组件 -->
<template>
  <div class="menupage">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="selected"
    >
      <p class="logo-title"><i class="el-icon-s-custom"></i>SUNXIAODONG</p>
      <el-menu-item index="/selfmend" style="margin-left: 400px"
        >个人简介</el-menu-item
      >
      <!-- <el-menu-item index="/selfskill">个人技能</el-menu-item> -->
      <el-menu-item index="/experience">工作经历</el-menu-item>
      <el-submenu index="">
        <template slot="title">更多</template>
        <el-menu-item index="">选项1</el-menu-item>
        <el-menu-item index="">选项2</el-menu-item>
        <el-menu-item index="">选项3</el-menu-item>
      </el-submenu>
      <!-- <el-submenu >
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
      <router-link to="/selfmend">个人简介</router-link>
      <router-link to="/selfskill">个人技能</router-link>
      <router-link to="/experience">工作经历</router-link>
    </el-submenu> -->
    </el-menu>
  </div>
</template>
<style>
.menupage {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 100;
}
.menupage .el-menu.el-menu--horizontal {
  border-bottom: none;
  height: 100px;
  line-height: 50px;
}
.menupage .el-menu.el-menu--horizontal > .el-menu-item,
.menupage .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 100px;
  line-height: 100px;
  padding: 0px 50px;
  font-size: 16px;
  letter-spacing: 4px;
}
.menupage .el-menu--horizontal > .el-menu-item.is-active,
.menupage .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom-width: 4px;
}
</style>
<style  scoped>
.logo-title {
  position: absolute;
  left: 100px;
  top: 0px;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
}
/* .router-link-active{
  text-decoration: none;
  }
  a {
  text-decoration: none;
  } */
</style>

<script>
export default {
  methods: {
    selected(index) {
      console.log(index);
      // if(index==='1'){
      //  this.$router.push({path: '/selfmend'});
      // }
      // if(index==='2'){
      //  this.$router.push({path: '/selfskill'});
      // }
      this.$router.push({ path: index });
    },
  },
};
</script>



