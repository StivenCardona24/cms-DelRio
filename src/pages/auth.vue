<template >
  <div class="container">
    <auth-dialog/>
  </div>
</template>
<script setup lang="ts" type="text/javascript">

import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/store/auth"
const { openAuth} = useAuthStore();
const AuthStore = useAuthStore()
  const { user } = storeToRefs(AuthStore)

onMounted(() => {
  console.log(user.value);
  if(!user.value){
    openAuth();
  }
  
});

console.log(user.value);
if(user.value){
  definePageMeta({
    layout: 'admin'
  })
}

</script>