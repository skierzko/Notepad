<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';
import NotepadNotesRow from './NotepadNotesRow.vue';
import { Notebook } from 'lucide-vue-next';
import { PropType } from 'vue';
import { Note } from './interfaces/Note';
import { CirclePlus } from 'lucide-vue-next';
import { getNotesList, createNote } from '@/routes';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
    currentFolderId: {
        type: [Number, null] as PropType<number|null>,
        default: null,
        required: true,
    },
    currentNoteId: {
        type: [Number, null] as PropType<number|null>,
        default: null,
        required: true,
    },
    foldersCount: {
        type: Number as PropType<number>,
        default: 0,
    }
});

const list = ref<Note[]>([]);

const loadNotesList = (withoutSetActive: boolean = false) => {
    if (props.currentFolderId === null) {
        return;
    }

    axios.get(getNotesList({ notepadFolder: props.currentFolderId }).url)
        .then((response) => {
            list.value = response.data.list;

            if (withoutSetActive) {
                return;
            }

            emit('setAsActive', response.data.list[0].id ?? null);
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
                toastAddedNote();
            }
        });
};

const emit = defineEmits<{
  (e: 'setAsActive', id: number): void
}>()

const setAsActive = (id: number) => {
    emit('setAsActive', id);
};

const toastAddedNote = () => {
  toast.success('New note added', {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  })
}

defineExpose({
  loadNotesList,
});
</script>

<template>
    <div class="min-w-[200px] border border-gray-200 p-2">
        <div class="flex font-bold">
            <div class="flex-1">
                <Notebook class="inline relative -top-0.5" />
                Notes
            </div>
            <CirclePlus v-if="foldersCount > 0" class="cursor-pointer" @click="createNewNote" />
        </div>

        <hr />

        <NotepadNotesRow
            v-for="note in list"
            :key="note.id"
            :data="note"
            :is-active="note.id === props.currentNoteId"
            @set-as-active="setAsActive"
            />

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