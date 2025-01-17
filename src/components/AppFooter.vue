<template>
    <v-footer color="primary" dark>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <h3>联系我们</h3>
                    <p>地址：广州市天河区沙河街10号</p>
                    <p>电话：020-12345678</p>
                    <p>邮箱：postmaster@test.com</p>
                </v-col>
                <v-col cols="12" md="4">
                    <h3>快速链接</h3>
                    <v-btn text to="/">首页</v-btn>
                    <v-btn text to="/product">产品</v-btn>
                    <v-btn text to="/apply">申请加入</v-btn>
                    <v-btn text to="/about">关于我们</v-btn>
                </v-col>
                <v-col cols="12" md="4">
                    <h3>关注我们</h3>
                    <v-btn icon href="https://weibo.com">
                        <v-icon>mdi-weibo</v-icon>
                    </v-btn>
                    <v-btn icon href="https://wechat.com">
                        <v-icon>mdi-wechat</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
};
</script>