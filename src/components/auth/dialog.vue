<template>
    <el-dialog  :show-close="false" v-model="dialogIsOpen" :title="dialogTitle">
      <auth-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useAuthStore} from '@/store/auth'
  import { storeToRefs } from 'pinia';
  const AuthStore = useAuthStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(AuthStore)
  </script>
  