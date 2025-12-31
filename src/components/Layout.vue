<script setup lang="ts">
import ArgButton from "@/components/ui/ArgButton.vue";
import {RouterLink} from "vue-router";
import {__, useLocale} from "../utils/useLocale";
import {useTheme} from "@/utils/useTheme.ts";

const locale = useLocale();
const theme = useTheme();

const props = defineProps<{
    isHome?: boolean
}>()

function animateToFeatureSection() {
    const featureSection = document.getElementById('features');
    if (featureSection) {
        featureSection.scrollIntoView({behavior: 'smooth'});
    }
}
</script>

<template>
    <div :class="[theme.isDarkMode ? 'dark' : '', 'min-h-screen flex flex-col']">
        <nav class="border-b border-x4">
            <div class="container mx-auto px-4 py-3 flex items-center justify-between  ">
                <div class="flex items-center space-x-2">
                    <img src="/images/mergesoft.png" alt="" class="w-7 h-7 dark:hidden">
                    <img src="/images/mergesoft-white.png" alt="" class="w-7 h-7 hidden dark:block">
                    <router-link to="/">
                        <h1 class="mr-auto font-bold text-2xl flex gap-2 items-center">
                            <span>MergeSoft</span>
                        </h1>
                    </router-link>
                </div>
                <div class="flex items-center space-x-2">
                    <ArgButton v-if="isHome" as="a" severity="raised" href="#projects" @click.prevent="animateToFeatureSection" class="max-sm:hidden">
                        {{ __('projects') }}
                    </ArgButton>
                    <ArgButton severity="raised" @click="locale.toggleLocale()" >
                        {{ locale.currentLocale == 'ku' ? 'EN' : 'KU' }}
                    </ArgButton>
                    <ArgButton severity="raised" @click="theme.toggleTheme" >
                        <i class="icon text-xl" :class="theme.isDarkMode ? 'icon-mingcute--sun-fill' : 'icon-mingcute--moon-fill'"></i>
                    </ArgButton>
                    <ArgButton as="a" severity="raised" href="https://github.com/mergehez" target="_blank" >
                        <i class="icon text-xl icon-mdi--github"></i>
                    </ArgButton>
                </div>
            </div>
        </nav>
        <main class="flex-1 flex flex-col">
            <slot/>
        </main>
        <footer class="border-t border-x4">
            <div class="container mx-auto px-4 py-4 text-center text-t2 text-sm">
                © 2025 MergeSoft
            </div>
        </footer>
    </div>
</template>


