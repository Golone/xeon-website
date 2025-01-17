<template>
    <v-container>
        <h1>关于我们</h1>
        <p>我们是致力于为企业提供全面数字化解决方案的领先平台。</p>
        <v-row>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>公司简介</v-card-title>
                    <v-card-text>
                        在线聚合平台是一家致力于为企业提供全面数字化解决方案的领先平台。我们拥有强大的技术团队和丰富的行业经验，致力于帮助企业在数字化转型中取得成功。
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>团队介绍</v-card-title>
                    <v-card-text>
                        我们的团队由一群充满激情和经验丰富的专业人士组成，他们在IT、管理咨询和数字化领域拥有深厚的 expertise。
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
    name: 'AboutPage',
    setup() {
        useHead({
            title: '关于我们 - 在线聚合平台',
            meta: [
                { name: 'description', content: '了解我们的团队和使命。' },
                { name: 'keywords', content: '在线聚合平台, 关于我们' },
            ],
        });
    },
};
</script>