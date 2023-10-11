<script setup lang='ts'>
import { useRouter } from 'vue-router';

console.log("search:", location.search)
const router = useRouter()
router.push("/")
</script>