<template>
    <div class="sidebar">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
            <router-link to="/" tag="el-menu-item">
                <i class="el-icon-message"></i>
                <span>Inbox</span>
            </router-link>
            <router-link to="/compose" tag="el-menu-item">
                <i class="el-icon-edit"></i>
                <span>Compose</span>
            </router-link>
            <router-link to="/send" tag="el-menu-item">
                <i class="el-icon-caret-left"></i>
                <span>Send box</span>
            </router-link>
            <el-menu-item index="4">
                <i class="el-icon-refresh"></i>
                <span>Update</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    .sidebar {
        position: fixed;
        right: 0;
        width: 225px;
        height: 100%;
        bottom: 0;
        top: 0;
        z-index: 100;
    }
    .sidebar .el-menu {
        border-left: 1px solid #e6e6e6;
        border-right: 0;
        height: 100%;
    }
    .sidebar .el-menu-item {
        text-align: right;
        padding-right: 40px;
        margin: 10px 0px 10px 0;
        direction: rtl;

    }
    .sidebar .el-menu-item:first-child {
        margin-top: 70px;
    }
    .sidebar .el-menu-item i {
        margin-left: 5px;
        margin-right: 0;
    }
</style>