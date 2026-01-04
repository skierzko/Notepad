<script setup lang="ts">
import { ref, PropType } from 'vue';
import { Form } from '@inertiajs/vue3';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';
import { CirclePlus } from 'lucide-vue-next';
import { saveFolder } from '@/routes';
import { Folder } from '../interfaces/Folder'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
    onlyIcon: {
        type: Boolean,
        default: false,
    },
    data: {
        type: Object as PropType<Folder>,
        required: false
    },
    showDialogTrigger: {
        type: Boolean,
        default: true,
    }
});

const open = ref(false);

const success = () => {
    document.querySelector('[data-slot="dialog-close"]')?.dispatchEvent(new MouseEvent('click'));

    toast.success(props.data ? 'Folder renamed' : 'New folder added', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
    })
};

const openDialog = () => {
    open.value = true;
};

defineExpose({
    openDialog,
});
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger v-if="showDialogTrigger" as-child>
            <CirclePlus v-if="onlyIcon" class="inline cursor-pointer" />
            <div v-else class="flex gap-2 items-center justify-center p-2 my-2 bg-gray-200/80 cursor-pointer hover:bg-gray-100">
                <CirclePlus class="inline" />
                <div>{{ data ? 'Rename folder' : 'Create first folder' }}</div>
            </div>
        </DialogTrigger>
        <DialogContent>
            <Form
                v-bind="saveFolder.form()"
                reset-on-success
                v-slot="{ errors, processing }"
                @success="success"
            >
                <DialogHeader class="space-y-3">
                    <DialogTitle>
                        {{ data ? 'Rename folder: ' + data.title : 'Creating a new folder' }}
                    </DialogTitle>
                    <DialogDescription>
                            <Label for="folder-name">Folder name</Label>
                            <Input
                                id="folder-name"
                                class="mt-1 block w-full"
                                name="name"
                                required
                                autocomplete="folder-name"
                                placeholder="Full folder name"
                                :default-value="data ? data.title : ''"
                            />
                            <InputError class="mt-2" :message="errors.name" />

                            <Input type="hidden" name="id" :default-value="data ? data.id : ''" />
                    
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter class="gap-2 mt-4">
                    <DialogClose as-child>
                        <Button variant="secondary" class="cursor-pointer">Close</Button>
                    </DialogClose>
                    
                    <Button type="submit" variant="primary" class="cursor-pointer" :disabled="processing">
                        {{ data ? 'Rename' : 'Create' }}
                    </Button>
                </DialogFooter>
            </Form>
        </DialogContent>
    </Dialog>
</template>