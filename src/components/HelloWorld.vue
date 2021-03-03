<template>
  <h1>{{ msg }}</h1>

  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>

  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>

  <button @click="state.count++">count is: {{ state.count }}</button>

</template>

<script setup>
import {getUser} from '../server/user'
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })

const formInline = reactive({
  user: 'Fizz',
  region: ''
})

const onSubmit = () => {
  console.log(11111111)
  getUser()
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>