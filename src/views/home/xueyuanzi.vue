<template>
  <div>
    <el-main>
      <div class="title">
        <p>学员管理</p>
      </div>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        style="margin-top: 10px;"
      >
        <el-form-item label="学员状态" style="margin-left:20px;">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="禁用" value="shanghai"></el-option>
            <el-option label="启用" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学生名称">
          <el-input v-model="formInline.user" placeholder="请输入学生关键字"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formInline.mad" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-button class="but" type="primary" icon="el-icon-search" size="30px">搜索</el-button>
        <el-button class="but" type="primary" icon="el-icon-search">重置</el-button>
      </el-form>
      <el-row>
        <el-button type="primary">新增学员</el-button>
        <el-button type="primary">批量导入</el-button>
        <el-button type="primary">批量导出</el-button>
        <el-button type="primary">查看报表</el-button>
      </el-row>
      <el-table :data="xueList" border style="width: 99%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="学生名称" width="180"></el-table-column>
        <el-table-column prop="shou" label="手机号" width="180"></el-table-column>
        <el-table-column prop="boolean" label="状态" width="180"></el-table-column>
        <el-table-column prop="datetime" label="创建时间" width="180"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
import xue from "../../api/test";

export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        mad: ""
      },
      xueList: []
    };
  },
  created() {
    xue.xueshu().then(res => {
      this.xueList = res.data.list;
      console.log(res);
      console.log(this.xueList);
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.el-main {
  padding: 0;
  .title {
    border-bottom: 1px solid #ccc;
    p {
      font-size: 14px;
      margin-left: 20px;
      // padding: 5px 20px;
    }
  }
  .el-select {
    width: 196px;
    height: 30px;
  }
  .room {
    margin-bottom: 20px;
    span {
      margin: 0 10px 0 20px;
    }
  }
  /deep/.el-input__inner {
    width: 196px;
    height: 30px;
  }
  .but {
    // width: 74px;
    height: 30px;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
  }
  .el-table {
    margin: 10px 0 0 10px;
    // padding-left: 10px;
    box-sizing: border-box;
  }
  .el-row {
    margin-left: 10px;
    .el-button {
      // width: 80px;
      height: 35px;
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>
