<script setup lang="js">
import { defineProps } from 'vue';
import NotesFolderRow from './NotesFolderRow.vue';
import { Folder } from 'lucide-vue-next';

defineProps({
    list: {
        type: Array,
        required: true,
    }
});
</script>

<template>
    <div class="min-w-[200px] border border-gray-200 p-2">
        <div class="font-bold">
            <Folder class="inline relative top-[-2px]" />
            Folders
        </div>
        <hr />

        <NotesFolderRow />
        <NotesFolderRow />
    </div>
</template>