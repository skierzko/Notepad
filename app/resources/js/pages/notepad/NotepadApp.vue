<script setup lang="ts">
import NotepadFolderList from './NotepadFolderList.vue';
import NotepadNotesList from './NotepadNotesList.vue';
import NotepadNotesDetails from './NotepadNotesDetails.vue';
import { PropType, ref } from 'vue';
import { Folder } from './interfaces/Folder';
import { Note } from './interfaces/Note';

const props = defineProps({
    foldersList: {
        type: Array as PropType<Folder[]>,
        required: true,
    },
});

const notesList = ref<InstanceType<typeof NotepadNotesList> | null>(null);
const currentFolderId = ref<number|null>(props.foldersList?.[0]?.id ?? null);
const currentNoteId = ref<number|null>(null);

const setFolderAsActive = (id: number) => {
    currentFolderId.value = id;
};

const setNoteAsActive = (id: number) => {
    console.log('setNoteAsActive', id);
    currentNoteId.value = id;
}

const updateNotesList = (details: Note) => {
    notesList.value?.loadNotesList(true);
};

</script>

<template>
    <div class="flex gap-4 h-[calc(100vh-130px)]">
        <NotepadFolderList
            :list="foldersList"
            :current-folder-id="currentFolderId"
            @set-as-active="setFolderAsActive"
            />
        <NotepadNotesList
            ref="notesList"
            :current-folder-id="currentFolderId"
            :current-note-id="currentNoteId"
            :folders-count="props.foldersList.length"
            @set-as-active="setNoteAsActive"
            />
        <NotepadNotesDetails
            :current-folder-id="currentFolderId"
            :current-note-id="currentNoteId"
            @update-notes-list="updateNotesList"
            />
    </div>
</template>