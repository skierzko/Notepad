<script setup lang="js">
import { defineProps } from 'vue';
import { NotebookPen } from 'lucide-vue-next';

defineProps({
});
</script>

<template>
    <div class="w-full border p-2">
        <div class="font-bold">
            <NotebookPen class="inline relative top-[-2px]" />
            Details: Name
        </div>
        <hr />
    </div>
</template>