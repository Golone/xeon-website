<template>
  <v-app-bar color="primary" dark>
    <v-toolbar-title>在线聚合平台</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">首页</v-btn>
    <v-btn text to="/product">产品</v-btn>
    <v-btn text to="/apply">申请加入</v-btn>
    <v-btn text to="/about">关于我们</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavigation',
};
</script>