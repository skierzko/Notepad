<script setup lang="ts">
import NotepadFolderList from './NotepadFolderList.vue';
import NotepadNotesList from './NotepadNotesList.vue';
import NotepadNotesDetails from './NotepadNotesDetails.vue';

defineProps({
    foldersList: {
        type: Array,
        required: true,
    },
    notesList: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="flex gap-4 h-[calc(100vh-130px)]">
        <NotepadFolderList :list="foldersList" />
        <NotepadNotesList :list="notesList" :folders-empty="foldersList.length === 0" />
        <NotepadNotesDetails />
    </div>
</template>