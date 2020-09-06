<template>
  <el-container>
    <div class="home_wrap">
      <div class="home_title">
        <div class="home_left">
          <img
            src="http://120.53.31.103:84/uploads/image/2020-05-27/zmkrHVxaa4fVI5jtcNZ3xGy6KPU0QjXzxPjX7trh.jpeg"
            alt
          />
        </div>
        <div class="home_con">
          <ul>
            <!-- <li
            v-for="(item, index) in arr"
            :class="activefyh == index ? 'active' : ''"
            :key="index"
            @click="toogle(index)"
          >
            <span :class="item.icon"></span>
            <span id="fff">{{ item.name }}</span>
            </li>-->

            <li @click="$router.push('/home/guanli')">
              <span class="el-icon-user"></span> 用户
            </li>
            <li @click="$router.push('/home/jiaoxue')">
              <span class="el-icon-s-shop"></span>教学
            </li>
            <li @click="$router.push('/home/tiku')">
              <span class="el-icon-s-shop"></span>题库
            </li>
            <li @click="$router.push('/home/yunying')">
              <span class="el-icon-s-marketing"></span>运营
            </li>
            <li @click="$router.push('/home/yingxiao')">
              <span class="el-icon-menu"></span>营销
            </li>
            <li @click="$router.push('/home/shangpin')">
              <span class="el-icon-s-fold"></span>商品
            </li>
            <li @click="$router.push('/home/caiwu')">
              <span class="el-icon-platform-eleme"></span>财务
            </li>
            <li @click="$router.push('/home/tongji')">
              <span class="el-icon-s-help"></span>统计
            </li>
            <li @click="$router.push('/home/xitong')">
              <span class="el-icon-s-tools"></span>系统
            </li>
          </ul>
        </div>
        <div class="home_right">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img
                src="http://120.53.31.103:84/uploads/image/2020-06-15/pEH1AeP93qqtIkzUB9i1TUhpHzOlCA2iagc0MorF.jpeg"
                alt
              />
              <span class="el-icon-caret-bottom"></span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <img
                  id="imgg"
                  src="http://120.53.31.103:84/uploads/image/2020-06-15/pEH1AeP93qqtIkzUB9i1TUhpHzOlCA2iagc0MorF.jpeg"
                  alt
                />
                <span>超级管理员</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span class="el-icon-setting"></span> 账号设置
              </el-dropdown-item>
              <el-dropdown-item>
                <span class="el-icon-edit"></span> 退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <router-view />
    </div>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
      // activefyh: 0,
      // arr: [
      //   { name: "用户", icon: "el-icon-user" },
      //   { name: "教学", icon: "el-icon-s-shop" },
      //   { name: "题库", icon: "el-icon-s-shop" },
      //   { name: "运营", icon: "el-icon-s-marketing" },
      //   { name: "营销", icon: "el-icon-menu" },
      //   { name: "商品", icon: "el-icon-s-fold" },
      //   { name: "财务", icon: "el-icon-platform-eleme" },
      //   { name: "统计", icon: "el-icon-s-help" },
      //   { name: "系统", icon: "el-icon-s-tools" }
      // ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    toogle(index) {
      this.activefyh = index;
      console.log(index);
    }
  }
};
</script>
<style scoped lang="scss">
.home_wrap {
  width: 100%;
  height: 100%;
  .home_title {
    width: 100%;
    height: 64px;
    background-color: #2b83f9;
    background-image: linear-gradient(
      143deg,
      #2945cb 20%,
      #2b83f9 81%,
      #3a9dff
    );
    .home_left {
      line-height: 64px;
      width: 170px;
      float: left;
      text-align: center;
      img {
        width: 60px;
        height: 40px;
        vertical-align: middle;
      }
    }
  }
  .home_con {
    float: left;
    height: 64px;
    ul {
      float: left;
      list-style: none;
      height: 64px;
      margin-top: 1px;
      li {
        float: left;
        margin-right: 40px;
        line-height: 58px;
        color: #fff;
        transition: all 0.2s ease-in-out;
        opacity: 0.69;
        cursor: pointer;
        // box-sizing: border-box;
        span {
          vertical-align: middle;
        }
        #fff {
          margin-left: 4px;
        }
      }
      li:hover {
        color: #fff;
        opacity: 1;
      }
    }
    .active {
      color: #fff;
      opacity: 1;
      border-bottom: 3px solid #ddd;
    }
  }
  .home_right {
    float: right;
    width: 88px;
    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      border-radius: 50%;
    }
    span {
      line-height: 58px;
      font-size: 22px;
      color: #fff;
    }
    .el-dropdown-menu {
      margin-top: 42px;
    }
    .el-popper[x-placement^="bottom"] {
      margin-top: 42px;
    }
  }
}
/deep/.el-dropdown-menu__item {
  width: 200px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
  span {
    color: #2185f0;
    margin-right: 20px;
  }
}
</style>
