<!--suppress SpellCheckingInspection -->
<script setup lang="ts">
import ProjectBox from "@/components/ProjectBox.vue";
import Layout from "@/components/Layout.vue";
import {__} from "@/utils/useLocale.ts";
import ProjectsGrid from "@/components/ProjectsGrid.vue";
</script>

<template>
    <Layout isHome>
        <div class="container  border-b border-x5 ">
            <section class="py-20 mx-auto px-2 sm:px-4 text-center relative border-x-0!">
                <div class="w-full flex justify-center mb-8">
                    <img src="/images/mergesoft.png" alt="" class="w-52 h-52">
                </div>
                <h1 class="text-5xl font-bold mb-4 leading-tight">
                    {{ __('mobile_web_projects') }} <br class="max-sm:hidden">
                    {{ __('all_in_kurdish') }}
                </h1>
                <p class="text-xl opacity-80 mb-8">
                    {{ __('team_specializes') }}
                </p>
            </section>
        </div>
        <section id="projects" class="py-20 container flex-1">
            <div class="mb-24 text-center">
                <span class="px-5 py-2.5 rounded-full bg-x0 text-t0 invert mx-4">
                    {{ __('projects') }}
                </span>

                <h2 class="text-4xl mt-12 px-2" v-html="__('projects_delivered')"></h2>

                <h3 class="text-t1 mt-6 max-w-2xl mx-auto px-2">
                    {{__('waiting_to_be_delivered') }}
                </h3>
            </div>

            <ProjectsGrid />

            <div>
                <h3 class="text-t1 mt-20 max-w-2xl mx-auto px-2 text-center">
                    {{ __('contact_us_text') }} <br>
                    <a href="mailto:argesozdogan@gmail.com" class="text-blue-500 hover:underline">argesozdogan@gmail.com</a>
                </h3>
            </div>
        </section>
    </Layout>
</template>

