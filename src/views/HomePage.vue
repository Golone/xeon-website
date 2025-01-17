<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <h1>欢迎来到在线聚合平台</h1>
                <p>您的全能业务解决方案</p>
                <v-btn color="secondary" to="/product">快速体验</v-btn>
            </v-col>
            <!-- <v-col cols="12" md="6">
                <v-img src="../assets/logo.png" contain></v-img>
            </v-col> -->
        </v-row>
    </v-container>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
    name: 'HomePage',
    setup() {
        useHead({
            title: '首页 - 在线聚合平台',
            meta: [
                { name: 'description', content: '您的全能业务解决方案。' },
                { name: 'keywords', content: '在线聚合平台, 企业解决方案' },
            ],
        });
    },
};
</script>