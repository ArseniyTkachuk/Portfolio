<template>
    <div class="conteiner">
        <div class="content">

            <h1 class="header">LET ME <span class="introduce">INTRODUCE</span> MYSELF</h1>
            <p>I’m a Software Engineer who loves transforming ideas into reliable, scalable products. Over time, I’ve
                explored several technologies and found my passion in building high-performance systems and intuitive
                user
                experiences.</p>

            <p>I’m proficient in <span class="introduce">JavaScript, C++, Node.js, and Python</span> — and I enjoy
                working
                across both backend and
                frontend stacks.</p>

            <p>Whenever possible, I love building projects with <span class="introduce">Node.js</span> and modern
                frameworks like <span class="introduce">Vue</span> and othen.
            </p>

        </div>
    </div>

</template>
<script>

</script>
<style scoped>
.conteiner {
    background-color: rgb(0, 0, 0);
    padding: 10vh;
    text-align: center;
}

.content {
    width: 70vh;
    justify-self: center;
    text-shadow:
        0 0 10px rgba(24, 226, 203, 0.7),
        0 0 50px rgba(24, 226, 203, 0.5),
        0 0 100px rgba(24, 226, 203, 0.2);

}

.header {
    color: azure;
    margin-bottom: 5vh;
    font-size: 30px;
}

.introduce {
    color: blueviolet;
}

p {
    color: azure;
    font-size: 20px;
}

@media (max-width: 768px) {
    .header {
        font-size: 25px;
    }

    .content {
        width: 45vh;
    }
}
</style>
