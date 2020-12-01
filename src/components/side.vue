<template>
  <a-menu :default-selected-keys="['1']" mode="inline">
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="bank" /><span>首页</span></span>
      <a-menu-item key="3">
        <a-icon type="line-chart" />
        <router-link tag="div" class="link" :to="{ name: 'show' }"
          >统计</router-link
        >
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="tag" /><span>商品</span></span>
      <a-menu-item key="6">
        <a-icon type="database" />
        <router-link tag="div" class="link" :to="{ name: 'list' }"
          >商品列表</router-link
        >
      </a-menu-item>
      <a-menu-item key="8">
        <a-icon type="file-add" />
        <router-link tag="div" class="link" :to="{ name: 'add' }"
          >添加商品</router-link
        >
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {};
</script>

<style></style>
