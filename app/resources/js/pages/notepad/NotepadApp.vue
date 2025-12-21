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

const setFolderAsActive = (id: number) => {
    currentFolderId.value = id;
};

</script>

<template>
    <div class="flex gap-4 h-[calc(100vh-130px)]">
        <NotepadFolderList :list="foldersList" :current-folder-id="currentFolderId" @set-as-active="setFolderAsActive" />
        <NotepadNotesList :current-folder-id="currentFolderId" :folders-count="props.foldersList.length" />
        <NotepadNotesDetails />
    </div>
</template>