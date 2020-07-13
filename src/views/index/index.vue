<template>
  <div id="common-header">
    <el-container>
      <!-- 导航栏开始 -->
      <el-header style="height:80px">
        <el-row>
          <el-col :xs="0" :sm="24" :md="4" :lg="10" :xl="10">
            <!-- logo -->
            <h1>
              <a href>website</a>
              <!-- <i :class="iconview" style="color: #409eff;cursor:pointer;" @click="chanView"></i> -->
            </h1>
          </el-col>
          <!-- 右侧导航 -->
          <el-col :xs="24" :sm="24" :md="16" :lg="14" :xl="14">
            <el-col :xs="24" :sm="24" :md="5" :lg="6" :xl="6">
              <!-- <el-input placeholder="请输入搜索关键词" suffix-icon="el-icon-search" v-model="keywords"></el-input> -->
              <el-input placeholder="请输入内容" v-model="keywords" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="transparent"
              >
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">我的图库</el-menu-item>
                <div style="outline: 0;">
                  <el-tag effect="dark" @click="doLogin">登录</el-tag>
                  <el-tag effect="dark" @click="doRegister">注册</el-tag>
                </div>
                <!-- <el-submenu index="3">
                  <template slot="title">
                    <el-image class="head-img" :src="bg" fit="cover"></el-image>
                    admin
                  </template>
                  <el-menu-item index="3-1">个人中心</el-menu-item>
                  <el-menu-item index="3-2">修改密码</el-menu-item>
                  <el-menu-item index="3-3">注销</el-menu-item>
                </el-submenu>-->
              </el-menu>
            </el-col>
          </el-col>
        </el-row>
      </el-header>
      <!-- 导航栏结束 -->
      <el-main>
        <!-- 首页背景大图 -->
        <div class="bg-wrapper" :style="{backgroundImage: test}">
          <!-- <img class="bg" src="@a/images/bg.jpg" alt /> -->
        </div>
      </el-main>
    </el-container>

    <!-- 登录dialog弹窗 -->
    <el-dialog title="登录" width="22rem" top="20vh" :visible.sync="loginDialogVisible">
      <!-- 小熊猫图片 -->
      <el-image
        v-show="inputIndex === 1"
        class="login-image"
        style="width: 100px; height: 100px"
        :src="panda1"
      ></el-image>
      <el-image
        v-show="inputIndex === 2"
        class="login-image"
        style="width: 100px; height: 100px"
        :src="panda2"
      ></el-image>
      <el-image
        v-show="inputIndex === 3"
        class="login-image"
        style="width: 100px; height: 100px"
        :src="panda3"
      ></el-image>

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <!-- 账号输入框 -->
        <el-form-item prop="account">
          <el-input
            placeholder="请输入手机号或邮箱"
            v-model="ruleForm.account"
            autocomplete="off"
            clearable
            @focus="inputIndex = 2"
            @blur="inputIndex = 1"
          ></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item prop="pass">
          <el-input
            placeholder="请输入密码"
            v-model="ruleForm.pass"
            autocomplete="off"
            @focus="inputIndex = 3"
            @blur="inputIndex = 1"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button
            class="full-btn"
            type="primary"
            @click="submitForm('ruleForm')"
            size="medium"
          >提交</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
      <div class="promap-box">
        没有账号？
        <span class="blue">注册</span>
        <div class="right blue">忘记密码</div>
      </div>
    </el-dialog>

    <!-- 注册dialog弹窗 -->
    <el-dialog title="注册" width="22rem" top="20vh" :visible.sync="registerDialogVisible">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <!-- 用户名输入框 -->
        <el-form-item prop="userName">
          <el-input
            placeholder="请输入用户名"
            v-model="ruleForm.userName"
            autocomplete="off"
            clearable
          ></el-input>
        </el-form-item>
        <!-- 账号输入框 -->
        <el-form-item prop="account">
          <el-input
            placeholder="请输入手机号或邮箱"
            v-model="ruleForm.account"
            autocomplete="off"
            clearable
          ></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item prop="pass">
          <el-input placeholder="请输入密码" type="password" v-model="ruleForm.pass" autocomplete="off" show-password clearable></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input placeholder="请再次输入密码" type="password" v-model="ruleForm.checkPass" show-password autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item style="text-align: center">
          <el-button
            class="full-btn"
            type="primary"
            @click="submitForm('ruleForm2')"
            size="medium"
          >提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    var checkAccount = (rule, value, callback) => {
      console.log(value);
      const that = this;
      setTimeout(() => {
        if (!that.ruleForm.account) {
          return callback(new Error("账号不能为空"));
        } else {
          callback();
        }
      }, 500);
    };
    var validatePass = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkuserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    return {
      activeIndex: "1", // 顶部导航栏默认
      keywords: "", // 搜索关键词
      inputIndex: 1, // 登录input下标
      bg: require("../../assets/images/bg.jpg"),
      test: "url(" + require("../../assets/images/bg.jpg") + ")",
      panda1: require("../../assets/images/normal.png"),
      panda2: require("../../assets/images/greeting.png"),
      panda3: require("../../assets/images/blindfold.png"),
      loginDialogVisible: false, // 登录弹窗是否可见
      registerDialogVisible: false, // 注册弹窗是否可见
      ruleForm: {
        pass: "",
        age: "",
        account: "",
        passWord: "",
        code: "",
        userName: ''
      },
      rules: { 
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        account: [{ validator: checkAccount, trigger: "blur" }],
        userName: [{ validator: checkuserName, trigger: "blur" }],
      }
    };
  },
  components: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 注册方法
    doRegister() {
      this.registerDialogVisible = true;
    },

     // 登录方法
    doLogin() {
      this.loginDialogVisible = true;
       console.log(this.ruleForm);
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      console.log(this.ruleForm);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scope>
#common-header {
  max-height: 100vh;
  overflow: auto;
  // 右侧操作菜单
  .yellow-lev3 {
    background-color: rgb(204, 194, 0);
  }
  .yellow-lev2 {
    background-color: rgb(192, 182, 0);
  }
  .yellow-lev1 {
    background-color: rgb(255, 241, 0);
  }
  .menu {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 9;

    .menu-item {
      width: 54px;
      height: 54px;
      text-align: center;
      line-height: 60px;
    }

    .el-icon-plus {
      font-size: 24px;
      color: #333;
      font-weight: bold;
    }
    .el-icon-top {
      color: rgb(50, 119, 252);
      font-size: 24px;
      font-weight: bold;
    }
  }
  .el-header {
    background-color: transparent;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    h1 {
      margin: 0;
      float: left;
      font-size: 2em;
      font-weight: 400;
      padding: 10px;
      a {
        color: #409eff;
        text-decoration: none;
      }
    }
    .el-menu {
      background: none;
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    .el-input {
      margin: 10px 0px;
    }

    // 导航栏active样式
    .el-menu--horizontal > .el-menu-item.is-active,
    .el-submenu.is-active {
      border-top: 4px solid #fff100;
      border-bottom: none;
      color: #fff;
    }
    // 导航栏li
    .el-menu-item,
    .el-submenu {
      border-top: 4px solid transparent;
      font-size: 24px;
      box-sizing: border-box;
      background: transparent !important;
    }

    .el-submenu__title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      background: transparent !important;
    }

    .el-menu-item:hover {
      color: #f40;
    }

    /* 点击出来的下划线进行隐藏 */
    .el-menu-item.is-active,
    .el-submenu__title {
      border-bottom: none !important;
    }
    /* 整体的下划线进行隐藏 */
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }

    /* 点击出来的下划线动效残留进行隐藏 */
    .el-menu--horizontal > .el-menu-item,
    .el-menu--horizontal > .el-submenu__title {
      border-bottom: none;
    }
    /* 点击以后的背景色进行隐藏 */
    .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
    .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
      background-color: rgba(0, 0, 0, 0);
    }

    // 箭头集体图标
    .el-submenu__title i {
      color: #fff;
      font-size: 20px;
    }

    // 用户头像
    .head-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: inline-block;
      border: 2px solid rgb(230, 218, 0);
      object-fit: cover;
      margin-right: 10px;
    }
  }
  .el-tag {
    font-size: 18px;
  }

  //主题内容
  .el-main {
    // background-color: #e9eef3;
    color: #333;
    padding: 0;
  }

  .bg-wrapper {
    width: 100%;
    height: 50vh;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-attachment: fixed;
    -webkit-background-size: 100% 100%;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    .bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // 登录小熊猫图片
  .login-image {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

#common-header.white-nav .el-header {
  background-color: #fff;
  color: #333;
  border-bottom: 2px solid rgb(242, 242, 242);
  box-sizing: border-box;
  // 导航栏active样式
  .el-menu--horizontal > .el-menu-item.is-active,
  .el-submenu.is-active {
    border-top: 4px solid #fff100;
    border-bottom: none;
    color: #333;
  }
  .el-submenu__title i {
    color: #333;
  }
}

.el-menu-item {
  background: #fff !important;
}
</style>