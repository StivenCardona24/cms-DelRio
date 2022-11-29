<template>
    <el-container class="layout-container-demo h-100 d-flex position-relative" style="height: 100%, margin: 0px">

        <el-header class="p-3 h-100 sticky-top top-0">
            <div class="d-flex justify-content-around align-content-between">
                <div class="d-flex align-items-center">
                    <el-avatar shape="square" size="default" fit="fill" src="https://st.depositphotos.com/1307373/4034/i/600/depositphotos_40348231-stock-photo-field-with-green-sunflowers.jpg" />
                    <h3>DELRIO</h3>
                </div>
                <div v-if="user" class="d-flex align-items-center">
                    <h3 v-text="user.primer_nombre"></h3>
                </div>
                <!-- <div v-else >
                    <NuxtLink to="/auth">
                        <button type="button" class="btn btn-primary" index="/">Iniciar Sesión</button>
                    </NuxtLink>
                </div> -->
            </div>

        </el-header>

        <auth-dialog/>

        <el-container >
            <el-scrollbar v-if="user" height="639px">

                <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
                    <div style="text-align:center" class="sticky-top top-0">
                        <el-button style="--el-button-size: 40px" v-if="isCollapse" type="primary" @click="menuToggle" >
                            <template #icon>
                                <el-icon>
                                    <icon-expand />
                                </el-icon>
                            </template>
                        </el-button>
                        <el-button style="--el-button-size: 40px" v-else type="primary" @click="menuToggle">
                            <template #icon>
                                <el-icon>
                                    <icon-fold />
                                </el-icon>
                            </template>
                        </el-button>
                    </div>

                    <NuxtLink to="/">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>Dashboard</template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/farm">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>Fincas</template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/city">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Ciudad
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/department">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Departamento
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/employee">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Empleados
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/delivery_status">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Estados de entrega
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/client">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Clientes
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/dependence">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Dependencias
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/ofice">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Oficinas
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/product">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Productos
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/provide">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Proveedores
                            </template>
                        </el-menu-item>
                    </NuxtLink>
                    <NuxtLink to="/shopping">
                        <el-menu-item>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <template #title>
                                Compras
                            </template>
                        </el-menu-item>
                    </NuxtLink>
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
    Expand,
    Fold
} from '@element-plus/icons-vue'
import { auto } from '@popperjs/core';
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/store/auth"
const { openAuth} = useAuthStore();

const AuthStore = useAuthStore()
const { user } = storeToRefs(AuthStore)


const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const menuToggle = () => {
    isCollapse.value = !isCollapse.value;
}
</script>

