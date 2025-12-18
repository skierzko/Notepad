<script setup lang="js">
import { defineProps } from 'vue';
import NotepadNotesRow from './NotepadNotesRow.vue';
import { Notebook } from 'lucide-vue-next';

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
            <Notebook class="inline relative top-[-2px]" />
            Notes
        </div>

        <hr />

        <NotepadNotesRow />
        <NotepadNotesRow />
    </div>
</template>