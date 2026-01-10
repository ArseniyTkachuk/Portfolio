<template>

    <section class="skillset">
        <section class="about-text">
            <p>
                {{ $t("about.description") }}
            </p>
        </section>
        <h2 class="title">
            {{ $t("about.skills.part1") }}<span>{{ $t("about.skills.part2") }}</span>
        </h2>

        <div class="rows">
            <div v-for="(row, rowIndex) in skillRows" :key="rowIndex" class="row" :class="`row-${rowIndex}`">
                <div v-for="skill in row" :key="skill.name" class="skill-card">
                    <i :class="skill.icon"></i>
                    <span class="skill-name">{{ skill.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Skillset",
    data() {
        return {
            skillRows: [
                [
                    { name: "JavaScript", icon: "devicon-javascript-plain" },
                    { name: "Vue.js", icon: "devicon-vuejs-plain" },
                    { name: "C++", icon: "devicon-cplusplus-plain" },
                    { name: "Node.js", icon: "devicon-nodejs-plain" }
                ],
                [
                    { name: "HTML5", icon: "devicon-html5-plain" },
                    { name: "CSS3", icon: "devicon-css3-plain" },
                    { name: "MongoDB", icon: "devicon-mongodb-plain" },
                    { name: "Git", icon: "devicon-git-plain" },
                    { name: "Python", icon: "devicon-python-plain" }
                ],
                [
                    { name: "Unity", icon: "devicon-unity-plain" },
                    { name: "C#", icon: "devicon-csharp-plain" },
                    { name: "Express", icon: "devicon-express-original" },
                ],
                [
                    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
                    { name: "Docker", icon: "devicon-docker-plain" },
                    { name: "GitHub", icon: "devicon-github-plain" },
                    { name: "C", icon: "devicon-c-plain" },
                ],
            ]
        };
    }
};
</script>

<style scoped>
.about-text {
    max-width: 800px;
    margin: 0 auto 80px;
    font-size: 18px;
    line-height: 1.6;
    color: #dff;
    text-align: center;
}

.skillset {
    padding: 90px 20px;
    text-align: center;
}

.title {
    font-size: 34px;
    margin-bottom: 70px;
    color: #fff;
}

.title span {
    color: #08fdd8;
}

/* контейнер рядків */
.rows {
    max-width: 1000px;
    margin: 0 auto;
}

/* ряд */
.row {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
}

/* кожен ряд інший */
.row-0 {
    gap: 40px;
}

.row-1 {
    gap: 22px;
    margin-left: 40px;
}

.row-2 {
    gap: 50px;
}

.row-3 {
    gap: 26px;
    margin-left: -35px;
}

/* 🔥 картка */
.skill-card {
    width: 140px;
    height: 140px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 42px;
    color: #08fdd8;
    transition: all 0.35s ease;
    cursor: default;
}

.skill-name {
    font-size: 13px;
    letter-spacing: 0.5px;
    color: #dff;
}

/* hover */
.skill-card:hover {
    transform: translateY(-6px) scale(1.08);
    background: rgba(8, 253, 216, 0.18);
    box-shadow: 0 0 30px rgba(8, 253, 216, 0.55);
    color: #ffffff;
}

.skill-card:hover .skill-name {
    color: #ffffff;
}

/* адаптив */
@media (max-width: 768px) {
    .row {
        flex-wrap: wrap;
        gap: 20px !important;
        margin-left: 0 !important;
    }

    .skill-card {
        width: 120px;
        height: 120px;
    }
}
</style>
