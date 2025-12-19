<script setup lang="ts">
import { CircleEllipsis } from 'lucide-vue-next';
import dayjs from "dayjs";
import { Folder } from './interfaces/Folder';
import { PropType } from 'vue';


const props = defineProps({
  data: {
    type: Object as PropType<Folder>,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits<{
  (e: 'setAsActive', id: number): void
}>()

const formatDate = (date: string) => {
    return dayjs(date).format("DD.MM.YYYY");
};

const setAsActive = () => {
    emit('setAsActive', props.data.id);
};
</script>

<template>
    <div
        class="flex p-1 mt-2 bg-gray-200/50 cursor-pointer [.active]:bg-cyan-700 [.active]:text-white items-center hover:bg-gray-200/80"
        :class="[isActive && 'active']"
        @click="setAsActive"
    >
        <div class="flex-1">
            <div class="text-nowrap text-ellipsis">{{ data.title }}</div>
            <div class="text-sm">{{ formatDate(data.updated_at) }}</div>
        </div>
        <CircleEllipsis class="opacity-30 hover:opacity-80" />
    </div>  
</template>