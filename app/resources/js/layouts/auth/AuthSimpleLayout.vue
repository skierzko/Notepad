<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { home } from '@/routes';
import { Link } from '@inertiajs/vue3';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div class="flex flex-col min-h-svh items-center justify-center">
        <div class="w-full md:w-auto">

            <div class="flex rounded-sm md:border-4 md:border-sky-600">
                <div class="w-full">

                    <div class="w-full p-6 md:w-[400px]">
                        <div class="flex flex-col gap-2">
                            <div class="flex flex-col items-center gap-4">
                                <Link
                                    :href="home()"
                                    class="flex flex-col items-center gap-2 font-medium"
                                >
                                    <div class="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                                        <AppLogoIcon class="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                                    </div>
                                    <span class="sr-only">{{ title }}</span>
                                </Link>
                                <div class="space-y-2 text-center">
                                    <h1 class="text-xl font-medium">{{ title }}</h1>
                                    <p class="text-center text-sm text-muted-foreground">
                                        {{ description }}
                                    </p>
                                </div>
                            </div>
                            <slot />
                        </div>
                    </div>
                </div>
                <div class="hidden bg-[url('/img/notepad-on-table.jpeg')] bg-cover bg-center min-w-[250px] md:block"> 
                </div>
                
            </div>

        </div>
    </div>
</template>
