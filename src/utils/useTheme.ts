import {onMounted, reactive, ref} from "vue";

const isDarkMode = ref(true);

export function useTheme() {
    onMounted(() => {
        if (localStorage.getItem('mailvan-dark') === null) {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                isDarkMode.value = true;
                document.documentElement.classList.add('dark');
            }
        } else {
            isDarkMode.value = localStorage.getItem('mailvan-dark') === '1';
            if (isDarkMode.value) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    })

    function toggleTheme() {
        isDarkMode.value = !isDarkMode.value;
        if (isDarkMode.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('mailvan-dark', '1');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('mailvan-dark', '0');
        }
    }

    return reactive({
        isDarkMode,
        toggleTheme,
    });
}