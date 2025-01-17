<template>
    <v-container>
        <v-form ref="form" @submit.prevent="submitForm">
            <v-text-field v-model="company" label="公司名称" :rules="[rules.required]" required></v-text-field>
            <v-text-field v-model="contact" label="联系人" :rules="[rules.required]" required></v-text-field>
            <v-text-field v-model="email" label="邮箱" type="email" :rules="[rules.required, rules.email]" required></v-text-field>
            <v-text-field v-model="phone" label="电话" :rules="[rules.required, rules.numeric]" required></v-text-field>
            <v-btn type="submit" color="secondary">提交申请</v-btn>
        </v-form>
        <v-snackbar v-model="snackbar" :color="snackbarColor">
            {{ snackbarText }}
            <v-btn text @click="snackbar = false">关闭</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
import { required, email, numeric } from '@/validationRules.js';
import { applyTenant } from '@/api/index.js';
import { useHead } from '@vueuse/head';

// 显式使用导入的变量
// console.log(required, email, numeric);

export default {
    name: 'ApplyForm',
    setup() {
        useHead({
            title: '申请加入 - 在线聚合平台',
            meta: [
                { name: 'description', content: '填写表单，加入我们的平台。' },
                { name: 'keywords', content: '在线聚合平台, 申请加入' },
            ],
        });
    },
    data() {
        return {
            company: '',
            contact: '',
            email: '',
            phone: '',
            snackbar: false,
            snackbarColor: '',
            snackbarText: '',
            rules: { required, email, numeric }, // 将规则绑定到 data 中
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                applyTenant({
                    company: this.company,
                    contact: this.contact,
                    email: this.email,
                    phone: this.phone,
                })
                    .then(() => {
                        this.snackbarColor = 'success';
                        this.snackbarText = '申请成功，感谢您的加入！';
                        this.snackbar = true;
                        this.$refs.form.reset();
                    })
                    .catch(() => {
                        this.snackbarColor = 'error';
                        this.snackbarText = '申请失败，请稍后再试。';
                        this.snackbar = true;
                    });
            }
        },
    },
};
</script>