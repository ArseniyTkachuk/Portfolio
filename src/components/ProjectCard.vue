<template>
    <div class="project-card">
        <img :src="project.image" :alt="project.name" class="project-img" />
        <div class="project-info">
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="tech-icons">
                <i v-for="tech in project.technologies" :key="tech" :class="tech"></i>
            </div>
            <div class="project-links">
                <a v-if="project.demo" :href="project.demo" target="_blank">Live Demo</a>
                <a v-if="project.github" :href="project.github" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        project: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.project-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 18px;
    overflow: hidden;
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 25px rgba(8, 253, 216, 0.4);
}

.project-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-info {
    padding: 20px;
    text-align: center;
}

.project-name {
    font-size: 20px;
    color: #08fdd8;
    margin-bottom: 10px;
}

.project-desc {
    font-size: 14px;
    color: #dff;
    margin-bottom: 15px;
}

.tech-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
}

.tech-icons i {
    font-size: 24px;
    transition: transform 0.3s ease;
}

.tech-icons i:hover {
    transform: scale(1.2);
}

.project-links a {
    margin: 0 8px;
    padding: 6px 12px;
    border-radius: 8px;
    background: rgba(8, 253, 216, 0.15);
    color: #08fdd8;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s ease, color 0.3s ease;
}

.project-links a:hover {
    background: #08fdd8;
    color: #000;
}
</style>
