<script setup lang="ts">
import NotepadFolderList from './NotepadFolderList.vue';
import NotepadNotesList from './NotepadNotesList.vue';
import NotepadNotesDetails from './NotepadNotesDetails.vue';
import { PropType, ref } from 'vue';
import { Folder } from './interfaces/Folder';

const props = defineProps({
    foldersList: {
        type: Array as PropType<Folder[]>,
        required: true,
    },
});

const currentFolderId = ref<number|null>(props.foldersList?.[0]?.id ?? null);
const currentNoteId = ref<number|null>(null);

const setFolderAsActive = (id: number) => {
    currentFolderId.value = id;
};

const setNoteAsActive = (id: number) => {
    currentNoteId.value = id;
}

</script>

<template>
    <div class="flex gap-4 h-[calc(100vh-130px)]">
        <NotepadFolderList
            :list="foldersList"s
            :current-folder-id="currentFolderId"
            @set-as-active="setFolderAsActive"
            />
        <NotepadNotesList
            :current-folder-id="currentFolderId"
            :current-note-id="currentNoteId"
            :folders-count="props.foldersList.length"
            @set-as-active="setNoteAsActive"
            />
        <NotepadNotesDetails
            :current-folder-id="currentFolderId"
            :current-note-id="currentNoteId"
            />
    </div>
</template>