<template>
    <el-container class="layout-container-demo" style="height: 500px, margin: 0px">
        <el-header style="text-align: center; font-size: 20px; ">
                <h1>Admin</h1>
        </el-header>

        <el-container>
            <el-scrollbar>
            <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
                @close="handleClose">
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/farm">Fincas</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/city">Ciudad</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/department">Departamento</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/employee">Empleados</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/delivery_status">Estados de entrega</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/client">Clientes</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/dependence">Dependencias</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/ofice">Oficinas</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/product">Productos</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/provide">Proveedores</NuxtLink></template>
                </el-menu-item>
                <el-menu-item >  
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title><NuxtLink to="/shopping">Compras</NuxtLink></template>
                </el-menu-item>
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                    <el-radio-button :label="false">expand</el-radio-button>
                    <el-radio-button :label="true">collapse</el-radio-button>
                </el-radio-group>
            </el-menu>
        </el-scrollbar>

            <el-main>
                <slot></slot>
            </el-main>
        </el-container>
    </el-container>
</template>
 
<script lang="ts" setup>
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.layout-container-demo .el-header {
    position: relative;
    background-color: #1d1b1b;
    color: var(--el-color-white);
}

.layout-container-demo .el-menu {
    color: var(--el-color-white);
    background: #1d1b1b;
    border-right: none;
    
}

.layout-container-demo .el-menu li {
    color: var(--el-color-white);
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}

.layout-container-demo .el-menu a {
    color: var(--el-color-white);
    text-decoration: none;
}

h1{
    margin:auto;

}
</style>
