<!--工作经历-->
<template>
  <div class="productpage">
    <div class="title">
      <el-divider content-position="center">工作经历</el-divider>
    </div>
    <div class="experience">
      <el-timeline>
        <el-timeline-item timestamp="2017/04/-2017/08" placement="top">
          <el-card>
            <h4>大连理想科技</h4>
            <p>
              在项目中参与了所有模块的开发<br />
              后期的黑盒测试.
            </p>
            <a href="#" @click="drawerHander(0)">详情</a>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2017/09-2018/04" placement="top">
          <el-card>
            <h4>沈阳东软集团有限公司</h4>
            <p>参与设计需求分析，调试bug。进行一些功能上的确认</p>
            <a href="#" @click="drawerHander(1)">详情</a>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/05-2019/06" placement="top">
          <el-card>
            <h4>大连软银安通信息技术有限公司</h4>
            <p>项目中主要负责后台的开发，设计数据表，编写sql，后端测试</p>
            <a href="#" @click="drawerHander(2)">详情</a>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/07-至今" placement="top">
          <el-card>
            <h4>大连中软软件有限公司</h4>
            <p>
              将html静态页面编写成jsp，封装form实体类，校验数据，添加控制器，servise的业务逻辑，编写好sql文。在DB中模拟数据结合页面进行单体测试</p>
            <a href="#" @click="drawerHander(3)">详情</a>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-drawer
      :title="projectInfo[currentIndex]['title']"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <p class="info">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              所用技术：{{ projectInfo[currentIndex]["developEnv"] }}
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              项目介绍：{{ projectInfo[currentIndex]["intro"] }}
            </div>
          </el-col>
        </el-row>
      </p>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      drawer: false,
      direction: "btt",
      currentIndex: 0,
      projectInfo: [
        {
          title: "库存管理系统",
          developEnv:
            "MySQL、JSP、Struts2、Spring、Hibernate、JQuery、并基于MVC的开发模式。",
          intro:
            " 该项目主要实现的功能是用户信息和新闻信息的增删改查包括以下几个模块：1.用户的注册和登录功能（验证码和登陆校验）； 2.新闻管理（包括新闻类别管理和新闻的增删改查，新闻内容通过CKeditor）；3.权限管理（在用户管理模块通过checkbox修改客户的权限）；4.菜单管理（不同的用户登陆系统后所看到的菜单不同，通过用户，菜单和用户菜单中间表实现该功能）",
        },
        {
          title: "医疗系统",
          intro:
            "该项目基于B2C模式，分为前后台，管理员可以通过后台操作来控制前台页面信息的展示。而非管理员身份则不可以进入后台（通过用户表中“权限”字段的值来判断用户身份是否是管理员），只能在前台登陆，可以进行商品搜索，添加购物车和支付等操作。前台包括：用户注册、登陆、菜单显示、商品搜索、品牌展示、广告滚动、添加购物车和生成订单等。后台包括：会员管理（后台可以查看会员详细信息，但不可以删除会员）、分类管理（通过Ajax实现不刷新页面基础上拼接一个页面）、品牌管理（可以对品牌表的“推荐”字段的值来操作品牌是否在前台显示）、广告管理（功能类似品牌管理）、规格管理（规格下有规格值，可以新增修改和删除规格与规格值，但如果被使用则不可以被删除）、商品管理（商品可以进行增删改查操作，品牌、分类和商品三张表有关联，Mapper.xml中配置相应对应关系的节点）、省市区管理（通过Json完成字符串的拼接）、订单管理、楼层管理等",
          developEnv: "MySQL、JSP、Ajax、JQuery、SpringMVC、Mybatis",
        },
        {
          title: "仓库管理",
          intro:
            "该项目主要实现的是通过用户输入注册信息，验证身份，登录系统完成考试，并获取分数",
          developEnv:
            "spring + struts2 +Mybatis，前端jsp页面，css样式表，JavaScript脚本",
        },
        {
          title: "保安事业统合系统",
          intro:
            "主要模块有：文件上传登陆，更新。不良修改检索。帐票出力，poi",
          developEnv:
            "springMVC +Mybatis+sql server前端jsp页面，css样式表，JavaScript脚本",
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    drawerHander(index) {
      this.drawer = true;
      this.currentIndex = index;
    },
  },
};
</script>
<style>
div .el-divider--horizontal {
  height: 2px;
  margin-top: 150px;
  background-color: rgb(84, 92, 100);
}
div .el-divider__text {
  font-size: 26px;
  color: #545c64;
}
div .el-drawer__header {
  font-size: 20px;
  font-weight: blod;
  padding-bottom: 20px;
  border-bottom: 1px solid;
}
div .el-drawer {
  background-color: rgb(61, 67, 72);
  color: #ccc;
}
div .el-drawer__body {
  padding: 0px 20px 0px 20px;
}
</style>
<style scoped>
.productpage {
  padding: 0px 100px 0px 100px;
}
.productpage .project {
  display: flex;
  justify-content: space-around;
}
.ifns {
  width: 85%;
  display: inline-block;
  outline: 1px dashed rgba(84, 92, 100, 0.1);
}
.experience {
  text-align: left;
}
.content {
  text-align: center;
  display: inline;
  position: relative;
  margin: 20px;
}
.content p {
  width: 95%;
  color: #fff;
  font-size: 14px;
  text-align: center;
}
.hover {
  position: absolute;
  bottom: 5px;
  left: 7.5%;
  background-color: rgba(84, 92, 100, 0.3);
  height: 60px;
  width: 85%;
  line-height: 60px;
  cursor: pointer;
}
.hover:hover {
  background-color: rgba(84, 92, 100, 0.6);
}
h1 {
  border: 1px solid #ccc;
  height: 0px;
}
.title p {
  color: #8c8888;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.title p .el-tag {
  margin: 0px 5px;
  cursor: pointer;
}
.info {
  font-size: 14px;
  color: #72767b;
  line-height: 25px;
}
</style>