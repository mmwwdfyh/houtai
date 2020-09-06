<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="180px">
          <ul class="list">
            <li class="xue" @click="$router.push('/home/guanli/xueyuanzi')">学员管理</li>
            <li @click="$router.push('/home/guanli/jiangshi')">讲师管理</li>
            <li @click="$router.push('/home/guanli/zhujiao')">助教管理</li>
          </ul>
        </el-aside>
        <!-- <xuezi></xuezi> -->
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import xuezi from "./xueyuanzi";
export default {
  data() {
    return {};
  },
  // components: {
  //   xuezi
  // },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
// h1{
//     margin-top: 100px;
// }
.el-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-aside {
  height: 100%;
  border-right: 1px solid #ccc;
}
.list {
  list-style: none;
  margin-top: 16px;
  .active {
    color: #2d8cf0;
  }
  li {
    margin-bottom: 30px;
  }
  li:hover {
    color: #bfcbd8;
  }
}

.el-container {
  box-sizing: border-box;
  height: 564px;
}
</style>
