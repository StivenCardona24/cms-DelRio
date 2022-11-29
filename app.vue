
<template >

  <div class="h-100 w-100 m-0">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
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
</script>

