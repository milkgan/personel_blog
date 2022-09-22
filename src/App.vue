<template>
    <div class="test-container">
        <Pager :current="current" :total="total" @pageChange="handlePageChange" />
    </div>
</template>

<script>
import Pager from './components/Pager'
export default {
    components: {Pager},
    data() {
        return {
            current: 1,
            total: 302
        }
    },
    methods: {
        handlePageChange(newPage) {
            this.current = newPage;
        }
    }
    
}
</script>