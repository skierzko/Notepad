<script setup lang="ts">
import dayjs from "dayjs";
import { PropType } from 'vue';
import { Note } from './interfaces/Note';
import NotesMenuContent from './menus/NotesMenuContent.vue';
import { deleteNote } from '@/routes';
import axios from "axios";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
  data: {
    type: Object as PropType<Note>,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits<{
  (e: 'setAsActive', id: number): void;
  (e: 'updateNotesList'): void;
}>()

const formatDate = (date: string) => {
  return dayjs(date).format("DD.MM.YYYY");
};

const setAsActive = () => {
  emit('setAsActive', props.data.id);
};

const removeNoteFetch = async (id: number) => {
  await axios.delete(deleteNote({ notepadFolder: props.data.notepad_folder_id, notepadNote: id }).url)
    .then((res) => {
      if (res.data.status) {
        toast.success('Note deleted successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });

        emit('updateNotesList');
      }
    });
};
</script>

<template>
    <div
        class="flex p-1 mt-1 md:mt-2 bg-gray-200/50 cursor-pointer [.active]:bg-cyan-700 [.active]:text-white items-center hover:bg-gray-200/80"
        :class="[isActive && 'active']"
        @click="setAsActive"
    >
        <div class="flex-1 overflow-hidden">
            <div>
              <div class="text-sm md:text-base text-nowrap text-ellipsis" :title="data.title">{{ data.title }}</div>
            </div>
            <div class="text-xs md:text-base">{{ formatDate(data.updated_at) }}</div>
        </div>
        <div @click.stop>
          <NotesMenuContent :data="data" @removeNote="removeNoteFetch" />
        </div>
    </div>  
</template>