<template >
  <div class="container">
    <h1>Hello Vue! fjf</h1>
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>
<script setup lang="ts" type="text/javascript">

import {useDependenceStore} from "@/store/dependence"
import { storeToRefs } from "pinia";
import { each, forEach, map } from 'lodash';
const DependenceStore = useDependenceStore();
const {loadDependence} = useDependenceStore();
const { dependencies} = storeToRefs(DependenceStore);
console.log(dependencies.value);

const chartData = [
 ["x", 2]
];

const load = ( ) => {
  dependencies.value.forEach(d => {
    chartData.push([d.nombre, d.empleados]);
});
}


console.log(chartData)
const chartOptions = {
  chart: {
    title: 'My Daily Activities',
  pieHole: 0.4,

  width: 500,
  height: 200,
  }
};

onBeforeMount(() => {
  loadDependence();
  load();
});



  definePageMeta({
    layout: 'admin'
  })


</script>