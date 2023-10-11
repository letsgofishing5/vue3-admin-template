<template>
    <div>
        <Pagination :pagination="pagination"></Pagination>
    </div>
</template>
<script setup lang='ts'>
import { Pagination, PaginationProp } from '@/components/pagination'
const pagination: PaginationProp = {
    page: 1,
    pageSize: 15,
    total: 100
}
</script>
<style scoped></style>