<script setup lang="ts">
import NotepadFolderList from './NotepadFolderList.vue';
import NotepadNotesList from './NotepadNotesList.vue';
import NotepadNotesDetails from './NotepadNotesDetails.vue';
import { ref } from 'vue';
import { Folder } from './interfaces/Folder';
import { Note } from './interfaces/Note';
import { getFolders } from '@/routes';
import axios from 'axios';
import { useSidebar } from '@/components/ui/sidebar/utils';

const foldersList = ref<Folder[]>([]);
const loadingFolders = ref<boolean>(false);

const notepadNotesListRef = ref<InstanceType<typeof NotepadNotesList> | null>(null);

const currentFolderId = ref<number|null>(foldersList.value[0]?.id ?? null);
const currentNoteId = ref<number|null>(null);

const { isMobile } = useSidebar()

const getFoldersList = async () => {
    if (loadingFolders.value) {
        return;
    }

    loadingFolders.value = true;    

    await axios.post(getFolders().url)
        .then((response) => {
            foldersList.value = response.data.folders;

            currentFolderId.value = currentFolderId.value ?? foldersList.value[0]?.id ?? null;
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
    notepadNotesListRef.value?.loadNotesList(true);
};

</script>

<template>
    <div
        :class="[
            isMobile && 'grid gap-2',
            isMobile === false && 'flex gap-4 h-[calc(100vh-130px)]'
        ]"
    >
        <div
            class="flex gap-2 h-full"
            :class="[
                isMobile && 'overflow-hidden max-h-[150px]',
                isMobile === false && ''
            ]"
        >
            <NotepadFolderList
                class="flex-1"
                :list="foldersList"
                :current-folder-id="currentFolderId"
                @set-as-active="setFolderAsActive"
                @update-folders-list="updateFoldersList"
                />
            <NotepadNotesList
                class="flex-1"
                ref="notepadNotesListRef"
                :current-folder-id="currentFolderId"
                :current-note-id="currentNoteId"
                :folders-count="foldersList.length"
                @set-as-active="setNoteAsActive"
                />
        </div>
        
        <NotepadNotesDetails
            class=""
            :current-folder-id="currentFolderId"
            :current-note-id="currentNoteId"
            @update-notes-list="updateNotesList"
            />
    </div>
</template>