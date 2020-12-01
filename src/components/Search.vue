<template>
  <div class="search">
    <a-input-search
      placeholder="请输入查询信息"
      enter-button="搜索"
      size="large"
      @search="onSearch"
    />
    <a-button type="primary" ghost class="addBtn" @click="toAddGoods">
      添加商品
    </a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    },
    toAddGoods() {
      this.$router.push({
        name: "add"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  margin: 0px 0 15px 0;
  width: 266px;
  display: flex;
  .addBtn {
    position: absolute;
    right: 66px;
    margin-top: 5px;
  }
}
</style>
