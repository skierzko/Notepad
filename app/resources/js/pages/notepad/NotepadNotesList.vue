<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';
import NotepadNotesRow from './NotepadNotesRow.vue';
import { Notebook } from 'lucide-vue-next';
import { PropType } from 'vue';
import { Note } from './interfaces/Note';
import { CirclePlus } from 'lucide-vue-next';
import { getNotesList, saveNote, createNote } from '@/routes';

const props = defineProps({
    currentFolderId: {
        type: Number as PropType<number|null>,
        default: null,
        required: true,
    },
    foldersCount: {
        type: Number as PropType<number>,
        default: 0,
    }
});

const currentNotesId = ref<number|null>(null);
const list = ref<Note[]>([]);
// @todo
const saveNoteUrl = props.currentFolderId ? saveNote({ notepadFolder: props.currentFolderId, notepadNote: undefined }).url : null;

const loadNotesList = () => {
    if (props.currentFolderId === null) {
        return;
    }

    axios.get(getNotesList({ notepadFolder: props.currentFolderId }).url)
        .then((response) => {
            list.value = response.data.list;
        })
        .catch(() => {

        });
};
loadNotesList();

watch(() => props.currentFolderId, () => {
    loadNotesList();
})

const createNewNote = async () => {
    if (props.currentFolderId === null) {
        return;
    }

    await axios.post(createNote({ notepadFolder: props.currentFolderId }).url)
        .then((response) => {
            if (response.data.success) {
                loadNotesList();
            }
        });
};

const setNoteAsActive = (id: number) => {
    currentNotesId.value = id;
}
</script>

<template>
    <div class="min-w-[200px] border border-gray-200 p-2">
        <div class="font-bold">
            
        </div>
        <div class="flex font-bold">
            <div class="flex-1">
                <Notebook class="inline relative -top-0.5" />
                Notes
            </div>
            <CirclePlus v-if="foldersCount > 0" class="cursor-pointer" @click="createNewNote" />
        </div>

        <hr />

        <NotepadNotesRow v-for="note in list" :key="note.id" :data="note" :is-active="currentNotesId === note.id" @set-as-active="setNoteAsActive" />

        <div v-if="foldersCount === 0" class="p-2 text-center">
            Before creating a note, create a folder.
        </div>
        <div v-else-if="list.length === 0" class="p-2 text-center">
            <p>Your folder is empty.</p>
            <p>Add your first note by clicking above.</p>
            <p></p>
        </div>
        
    </div>
</template>