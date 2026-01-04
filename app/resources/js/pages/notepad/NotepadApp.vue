<script setup lang="ts">
import NotepadFolderList from './NotepadFolderList.vue';
import NotepadNotesList from './NotepadNotesList.vue';
import NotepadNotesDetails from './NotepadNotesDetails.vue';
import { ref } from 'vue';
import { Folder } from './interfaces/Folder';
import { Note } from './interfaces/Note';
import { getFolders } from '@/routes';
import axios from 'axios';

const foldersList = ref<Folder[]>([]);
const loadingFolders = ref<boolean>(false);

const notesList = ref<InstanceType<typeof NotepadNotesList> | null>(null);
const currentFolderId = ref<number|null>(foldersList.value[0]?.id ?? null);
const currentNoteId = ref<number|null>(null);

const getFoldersList = async () => {
    console.log('Fetching folders list');

    if (loadingFolders.value) {
        return;
    }

    loadingFolders.value = true;    

    await axios.post(getFolders().url)
        .then((response) => {
            foldersList.value = response.data.folders;
        })
        .finally(() => {
            loadingFolders.value = false;
        });
};
getFoldersList();

const setFolderAsActive = (id: number) => {
    currentFolderId.value = id;
};

const setNoteAsActive = (id: number) => {
    currentNoteId.value = id;
}

const updateFoldersList = () => {
    getFoldersList();
};

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
            @update-folders-list="updateFoldersList"
            />
        <NotepadNotesList
            ref="notesList"
            :current-folder-id="currentFolderId"
            :current-note-id="currentNoteId"
            :folders-count="foldersList.length"
            @set-as-active="setNoteAsActive"
            />
        <NotepadNotesDetails
            :current-folder-id="currentFolderId"
            :current-note-id="currentNoteId"
            @update-notes-list="updateNotesList"
            />
    </div>
</template>