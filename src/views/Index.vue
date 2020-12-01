<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider theme="light" v-model="collapsed" collapsible>
      <Side />
    </a-layout-sider>
    <a-layout>
      <div class="mainHeader">
        <a-breadcrumb style="margin: 16px 20px">
          <a-breadcrumb-item>{{ infoTitle }}</a-breadcrumb-item>
          <a-breadcrumb-item>{{ info }}</a-breadcrumb-item>
        </a-breadcrumb>

        <div class="hello">
          你好啊
          <span v-if="$store.state.userName"
            >{{ $store.state.userName }}
            <span class="signOut" @click="handerClick">
              <a-button type="danger" ghost> 退出 </a-button>
            </span>
          </span>
          <span v-else>
            <router-link :to="{ name: 'login' }">请登录</router-link>
          </span>
        </div>
      </div>

      <a-layout-content style="margin: 0 16px">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Side from "../components/side.vue";
export default {
  components: {
    Side
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    infoTitle() {
      if (this.$route.meta.info === "统计") {
        return "首页";
      } else {
        return "商品";
      }
    },
    info() {
      return this.$route.meta.info;
    }
  },
  methods: {
    handerClick() {
      this.$router.push({
        name: "login"
      });
      this.$store.commit("editUserName", { newUserName: "" });
    }
  }
};
</script>

<style lang="scss">
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#components-layout-demo-side {
  .link {
    margin-top: -40px;
    margin-left: 20px;
  }
  .ant-layout-header {
    margin: 10px 0px;
    padding: 0 10px;
  }
}
.mainHeader {
  display: flex;
  justify-content: space-between;
  .hello {
    margin: 18px;
    .signOut {
      cursor: pointer;
    }
  }
}
</style>
