<!--个人简介-->
<template>
  <div class="aboutus">
    <div class="title">
      <el-divider content-position="center">个人简介</el-divider>
    </div>
    <el-card class="box-card" style="margin-bottom: 20px">
      <el-alert title="基本信息：" type="success" :closable="false"> </el-alert>
      <div class="left-margin">
        <p>姓名：孙晓东</p>
        <p>性别：男</p>
        <p>工作年限：4</p>
        <p>出生年月：1992.10</p>
      </div>
      <el-alert title="自我评价：" type="success" :closable="false"> </el-alert>
      <div class="left-margin">
        <p>
          1.熟练 mysql,oracle 数据库服务器 <br /><br />
          2.熟练使用JSP,Servlet 等Web开发技术 4.熟练应用JAVA进行开发 应用 <br /><br />
          3.熟练应用HTML,Javascript,CSS,js,jqery,ajax,easyUI等网页开发 <br /><br />
          4.熟练运用Eclipse,Dreamweaver.等开发工具 <br /><br />
          5.熟练掌握Windows操作系统能熟练使用Tomcat <br /><br />
          6.熟练运用struts2 spring hibernate <br /><br />
          7.熟练运用springmvc Mybatis springboot maven
        </p>
      </div>
    </el-card>
  </div>
</template>
<style scoped>
.aboutus {
  font-size: 14px;
  text-align: left;
  padding: 0px 100px;
}
.left-margin p {
  margin: 20px;
}
</style>

