<template>
    <i-drawer title="查看店铺" :width="900" :loading="loading">
        <box title="店铺详情">
            <detail title="店铺名称">{{seller.name}}</detail>
            <detail title="店铺状态">
                <span v-if="seller.status === 0">关闭</span>
                <span v-else>开启</span>
            </detail>
        </box>
    </i-drawer>
</template>

<script>
    import IDrawer from "../../../components/modal/i-drawer";
    import component from "../../../mixins/component";
    import http from "../../../mixins/http";
    import Box from "../../../components/box/index";
    import Detail from "../../../components/detail/index";

    export default {
        name: "show",
        components: {
            Detail,
            Box,
            IDrawer
        },
        mixins: [component, http],
        data() {
            return {
                seller: {
                    name: '',
                    certificates: {
                        name: ''
                    },
                    logs: []
                },
                columns: [
                    {
                        title: '序号',
                        render: (h, {index}) => {
                            return <span>{++index}</span>
                        },
                        width: 75
                    },
                    {
                        title: '操作内容',
                        key: 'remark'
                    },
                    {
                        title: '时间',
                        key: 'created_at'
                    }
                ]
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.loading = true
                this.$http.get(`seller/${this.componentProps.id}`).then((res) => {
                    this.seller = res.data.data
                }).catch((err) => {
                    this.formatErrors(err)
                }).finally(() => {
                    this.loading = false
                })
            })
        }
    }
</script>

<style scoped>
    .tr {
        text-align: right;
    }
</style>