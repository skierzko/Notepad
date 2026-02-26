<script setup lang="ts">
import axios from 'axios';
import dayjs from "dayjs";
import { ref, PropType, watch } from 'vue';
import { NotebookPen, LockKeyhole, LockKeyholeOpen } from 'lucide-vue-next';
import { getNote, saveNote } from '@/routes';
import { Note } from './interfaces/Note';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import 'vue3-toastify/dist/index.css';
import { useSidebar } from '@/components/ui/sidebar/utils';

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

const { isMobile } = useSidebar()
const iconSize = ref<number>(isMobile.value ? 17 : 20);

const emit = defineEmits<{
    (e: 'updateNotesList', details: Note): void,
}>()

const quillEdytor = ref<any>(null);
const details = ref<Note>({} as Note);
const saving = ref<boolean>(false);
const loading = ref<boolean>(false);
const allowSaving = ref<boolean>(false);

const loadNoteDetails = async () => {
    allowSaving.value = false;

    if (props.currentFolderId === null || props.currentNoteId === null ) {
        return;
    }

    loading.value = true;

    await axios
        .get(getNote({ notepadFolder: props.currentFolderId, notepadNote: props.currentNoteId }).url)
        .then((response) => {
            details.value = response.data.note;
            quillEdytor.value.setContents(response.data.note.description);
        })
        .finally(() => {
            setTimeout(() => { loading.value = false; }, 500);
            setTimeout(() => { allowSaving.value = true; }, 5000);
        });
}
loadNoteDetails();

const formatDate = (date: string) => {
    return dayjs(date).format("DD.MM.YYYY");
};

watch(() => [props.currentFolderId, props.currentNoteId], () => {
    loadNoteDetails();
});

watch(() => details.value.title, () => {
    saveNoteDetails();
});

let timeoutId: ReturnType<typeof setTimeout> | null = null;
const saveNoteDetails = async () => {

    if (allowSaving.value === false) {
        return;
    }

    clearTimeoutIfPossible();
    saving.value = false;

    timeoutId = setTimeout(async () => {
        if (saving.value) {
            return;
        }

        saving.value = true;

        if (props.currentFolderId === null || props.currentNoteId === null) {
            return;
        }

        await axios.post(saveNote({ notepadFolder: props.currentFolderId, notepadNote: props.currentNoteId }).url, {
            title: details.value.title,
            description: details.value.description,
        })
        .then((response) => {
            if (response.data.status) {
                details.value = response.data.note;
                updateNotesList();
            }
        })
        .finally(() => {
            timeoutId = null;
            setTimeout(() => { saving.value = false; }, 500);
        });
    }, 1500);
};

const clearTimeoutIfPossible = () => {
    if (timeoutId === null) {
        return;
    }

    clearTimeout(timeoutId);
};

const updateNotesList = () => {
    emit('updateNotesList', details.value);
};
</script>

<template>
    <div class="w-full border p-2 overflow-hidden">
        <div class="flex gap-4 font-bold">
            <div class="text-sm md:text-base">
                <NotebookPen class="inline relative -top-0.5" :size="iconSize" />
                Note:
            </div>
             <div class="flex-1 text-sm md:text-base">
                <input type="text" v-model="details.title" class="w-full ml-2 border-b border-gray-300 focus:outline-none" />
             </div>
        </div>
        <hr />
        <div class="flex gap-4 opacity-40 text-xs sm:text-sm mt-1 items-center">
            <div>
                <LockKeyholeOpen v-if="allowSaving" class="inline relative -top-0.5" title="Auto save unlocked" :size="iconSize" />
                <LockKeyhole v-else class="inline relative -top-0.5" title="Auto save locked" :size="iconSize" />
            </div>
            <div class="">First modity: {{ formatDate(details.created_at) }}</div>
            <div>Last modify: {{ formatDate(details.updated_at) }}</div>
            <div v-if="saving" class="text-sky-500">Saving...</div>
            <div v-if="loading" class="text-yellow-500">Loading...</div>
        </div>

        <div class="flex mt-2 h-[calc(100vh-230px)]">
            <QuillEditor
                        v-model:content="details.description"
                        ref="quillEdytor"
                        class="w-full border p-2 focus:outline-none"
                        content-type="html"
                        theme="bubble"
                        :toolbar="[{ size: [ 'small', false, 'large', 'huge' ]}, 'bold', 'italic', 'underline']"
                        @update:content="saveNoteDetails"
                    />
        </div>
        
    </div>
</template>