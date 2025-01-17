<template>
    <v-container>
        <v-row>
            <v-col v-for="module in modules" :key="module.name" cols="12" md="4">
                <v-card>
                    <v-card-title>{{ module.name }}</v-card-title>
                    <v-card-text>{{ module.description }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
    name: 'ProductPage',
    setup() {
        useHead({
            title: '产品 - 在线聚合平台',
            meta: [
                { name: 'description', content: '探索我们的强大功能模块。' },
                { name: 'keywords', content: '在线聚合平台, 产品介绍' },
            ],
        });
    },
    data() {
        return {
            modules: [
                { name: '系统管理', description: '强大系统管理模块' },
                { name: '基础设施', description: '稳定基础设施服务' },
                { name: 'ERP', description: '全面ERP解决方案' },
                { name: '工作流程', description: '灵活工作流程定制' },
            ],
        };
    },
};
</script>