<template>
    <i-drawer title="添加店铺" :loading="loading" :width="900">
        <Form ref="formCreate" :model="formCreate" :label-width="90" :rules="ruleCreate">
            <Box title="基本信息">
                <box-item :span="8">
                    <FormItem label="店铺名称" prop="name" >
                        <Input v-model="formCreate.name" placeholder="店铺名称"></Input>
                    </FormItem>
                </box-item>


                <box-item :span="8">
                    <FormItem label="店铺状态" prop="status" >
                        <true-or-false  v-model="formCreate.status" true-value="开启" false-value="关闭"></true-or-false>
                    </FormItem>
                </box-item>
                
            </Box>

            <Box title="管理员">
                <box-item :span="8">
                    <FormItem label="登录账号" prop="admin.email">
                        <Input v-model="formCreate.admin.email" placeholder="登录账号"></Input>
                    </FormItem>
                </box-item>

                <box-item :span="8">
                    <FormItem label="管理员姓名" prop="admin.name">
                        <Input v-model="formCreate.admin.name" placeholder="管理员姓名"></Input>
                    </FormItem>
                </box-item>

                <box-item :span="8">
                    <FormItem label="登录密码" prop="admin.password">
                        <Input v-model="formCreate.admin.password" type="password" placeholder="登录密码"></Input>
                    </FormItem>
                </box-item>

                <box-item :span="8">
                    <FormItem label="确认密码" prop="admin.password_confirmation">
                        <Input v-model="formCreate.admin.password_confirmation" type="password" placeholder="确认密码"></Input>
                    </FormItem>
                </box-item>
            </Box>

        </Form>

        <div slot="footer">
            <Button @click="createSubmit('formCreate', 'seller')">创建</Button>
        </div>
    </i-drawer>
</template>

<script>
    import IDrawer from "../../../components/modal/i-drawer";
    import {Validator} from "../../../async-validator/sellers/home/create";
    import Box from "../../../components/box/index";
    import BoxItem from "../../../components/box/box-item";
    import form from "../../../mixins/form";
    import TrueOrFalse from "../../../components/select/true-or-false";
    import component from "../../../mixins/component";

    export default {
        name: "create",
        components: {TrueOrFalse, BoxItem, Box, IDrawer},
        mixins: [form, component],
        data() {
            let $this = this
            return {
                formCreate: {
                    name: '',
                    admin: {
                        email: '',
                        password: '',
                        password_confirmation: '',
                    }
                },
                ruleCreate: Validator($this)
            }
        }
    }
</script>

<style scoped>

</style>