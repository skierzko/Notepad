<script setup lang="ts">
import { ref, PropType, watch } from 'vue';
import { NotebookPen } from 'lucide-vue-next';
import { getNote, saveNote } from '@/routes';
import axios from 'axios';
import { Note } from './interfaces/Note';
import dayjs from "dayjs";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

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
    }
});

const details = ref<Note>({} as Note);

const loadNoteDetails = async () => {
    if (props.currentFolderId === null || props.currentNoteId === null) {
        return;
    }

    await axios.get(getNote({ notepadFolder: props.currentFolderId, notepadNote: props.currentNoteId }).url)
        .then((response) => {
            details.value = response.data.note;
        })
}
loadNoteDetails();

const formatDate = (date: string) => {
    return dayjs(date).format("DD.MM.YYYY");
};

watch(() => [props.currentFolderId, props.currentNoteId], () => {
    loadNoteDetails();
});

let timeoutId: ReturnType<typeof setTimeout> | null = null;
const saveNoteDetails = async () => {

    clearTimeoutIfPossible();

    timeoutId = setTimeout(async () => {
        if (props.currentFolderId === null || props.currentNoteId === null) {
            return;
        }

        await axios.post(saveNote({ notepadFolder: props.currentFolderId, notepadNote: props.currentNoteId }).url, {
            title: details.value.title,
            description: details.value.description,
        })
        .finally(() => {
            timeoutId = null;
        });
    }, 1500);
};

const clearTimeoutIfPossible = () => {
    if (timeoutId === null) {
        return;
    }

    clearTimeout(timeoutId);
};
</script>

<template>
    <div class="w-full border p-2">
        <div class="flex gap-4 font-bold">
            <div>
                <NotebookPen class="inline relative -top-0.5" />
                Note:
            </div>
             <div class="flex-1">
                <input type="text" v-model="details.title" class="w-full ml-2 border-b border-gray-300 focus:outline-none" />
             </div>
        </div>
        <hr />
        <div class="flex gap-4 opacity-30 text-sm mt-1">
            <div>First modity: {{ formatDate(details.created_at) }}</div>
            <div>Last modify: {{ formatDate(details.updated_at) }}</div>
        </div>

        <QuillEditor
            v-model:content="details.description"
            class="w-full h-[calc(100vh-220px)] mt-2 border p-2 focus:outline-none"
            content-type="html"
            theme="bubble"
            :toolbar="[{ size: [ 'small', false, 'large', 'huge' ]}, 'bold', 'italic', 'underline']"
            @update:content="saveNoteDetails"
        />
    </div>
</template>