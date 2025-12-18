<script setup lang="ts">
import { Folder, Notebook, NotebookPen } from 'lucide-vue-next';
import NotesFolderList from './NotesFolderList.vue';
import NotesNotesList from './NotesNotesList.vue';
import NotesDetails from './NotesDetails.vue';
</script>

<template>
    <div class="flex gap-4 h-[calc(100vh-130px)]">
        <NotesFolderList :list="[]" />
        <NotesNotesList :list="[]" />
        <NotesDetails />
    </div>
</template>