<template>
    <div class="conteiner">
        <div class="menu">
            <p @click="$router.push('/')" class="btn" :class="{ active: $route.path === '/' }">Home</p>
            <p @click="$router.push('/about')" class="btn" :class="{ active: $route.path === '/about' }">About</p>
            <p @click="$router.push('/projects')" class="btn" :class="{ active: $route.path === '/projects' }">Projects
            </p>
            <p @click="$router.push('/contact')" class="btn" :class="{ active: $route.path === '/contact' }">Contact</p>
        </div>
    </div>

</template>
<script>


</script>
<style scoped>
.conteiner {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 999;

}

.menu {
    justify-content: center;
    display: flex;
    gap: 30px;
}

.btn {
    color: aqua;
    cursor: pointer;

    position: relative;
    text-decoration: none;
}

.btn:hover {
    color: #ffffff;
    text-shadow:
        0 0 6px rgba(5, 103, 91, 0.8),
        0 0 20px rgba(5, 103, 91, 0.4),
        0 0 30px rgba(5, 103, 91, 0.2);
}


.btn::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -4px;

    width: 0;
    height: 2px;
    background-color: #088c7c;

    transform: translateX(-50%);
    transition: width 0.2s ease;
}

.btn:hover::after {
    width: 100%;
}

.active::after {
    width: 100%;
}
</style>
