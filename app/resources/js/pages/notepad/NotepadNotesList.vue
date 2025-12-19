<script setup lang="js">
import { defineProps } from 'vue';
import NotepadNotesRow from './NotepadNotesRow.vue';
import { Notebook } from 'lucide-vue-next';

defineProps({
    list: {
        type: Array,
        required: true,
    },
    foldersEmpty: {
        type: Boolean,
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

        <NotepadNotesRow v-for="note in list" :key="note.id" />

        <div v-if="foldersEmpty" class="p-2 text-center">
            Before creating a note, create a folder.
        </div>
    </div>
</template>