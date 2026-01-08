<template>
    <section class="projects-page">
        <h2 class="title">My <span>Projects</span></h2>

        <div class="projects-grid">
            <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
        </div>
    </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
    name: "Projects",
    components: { ProjectCard },
    data() {
        return {
            projects: [
                {
                    name: "Portfolio Website",
                    description: "My personal portfolio site built with Vue and Tailwind.",
                    image: "https://via.placeholder.com/400x200.png?text=Portfolio",
                    technologies: [
                        "devicon-vuejs-plain colored",
                        "devicon-css3-plain colored",
                        "devicon-javascript-plain colored"
                    ],
                    github: "https://github.com/yourusername/portfolio",
                    demo: "https://yourportfolio.com"
                },
                {
                    name: "Task Manager",
                    description: "A task management app built with Node.js and MongoDB.",
                    image: "https://via.placeholder.com/400x200.png?text=Task+Manager",
                    technologies: [
                        "devicon-nodejs-plain colored",
                        "devicon-mongodb-plain colored",
                        "devicon-javascript-plain colored"
                    ],
                    github: "https://github.com/yourusername/task-manager",
                    demo: null
                },
                {
                    name: "Game Project",
                    description: "A simple 2D platformer game built in Unity.",
                    image: "https://via.placeholder.com/400x200.png?text=Unity+Game",
                    technologies: [
                        "devicon-unity-plain colored",
                        "devicon-csharp-plain colored"
                    ],
                    github: "https://github.com/yourusername/unity-game",
                    demo: null
                },
                {
                    name: "Blog App",
                    description: "A full-stack blog application using Express and PostgreSQL.",
                    image: "https://via.placeholder.com/400x200.png?text=Blog+App",
                    technologies: [
                        "devicon-express-plain-wordmark",
                        "devicon-postgresql-plain colored",
                        "devicon-nodejs-plain colored"
                    ],
                    github: "https://github.com/yourusername/blog-app",
                    demo: null
                },
                {
                    name: "E-commerce Store",
                    description: "Online shop built with React and Firebase.",
                    image: "https://via.placeholder.com/400x200.png?text=E-commerce",
                    technologies: [
                        "devicon-react-plain colored",
                        "devicon-firebase-plain colored",
                        "devicon-css3-plain colored"
                    ],
                    github: "https://github.com/yourusername/ecommerce-store",
                    demo: "https://myecommercestore.com"
                },
                {
                    name: "Weather App",
                    description: "A weather forecast app using JavaScript and OpenWeather API.",
                    image: "https://via.placeholder.com/400x200.png?text=Weather+App",
                    technologies: [
                        "devicon-javascript-plain colored",
                        "devicon-html5-plain colored",
                        "devicon-css3-plain colored"
                    ],
                    github: "https://github.com/yourusername/weather-app",
                    demo: "https://weatherappdemo.com"
                },
                {
                    name: "Chat App",
                    description: "Real-time chat application with Node.js and Socket.IO.",
                    image: "https://via.placeholder.com/400x200.png?text=Chat+App",
                    technologies: [
                        "devicon-nodejs-plain colored",
                        "devicon-javascript-plain colored",
                        "devicon-html5-plain colored"
                    ],
                    github: "https://github.com/yourusername/chat-app",
                    demo: null
                },
                {
                    name: "Docker Portfolio",
                    description: "My projects containerized using Docker and Docker Compose.",
                    image: "https://via.placeholder.com/400x200.png?text=Docker+Portfolio",
                    technologies: [
                        "devicon-docker-plain colored",
                        "devicon-git-plain colored",
                        "devicon-linux-plain colored"
                    ],
                    github: "https://github.com/yourusername/docker-portfolio",
                    demo: null
                }
            ]

        };
    }
};
</script>

<style scoped>
.projects-page {
    padding: 80px 20px;
    text-align: center;
}

.title {
    font-size: 34px;
    color: #fff;
    margin-bottom: 50px;
}

.title span {
    color: #08fdd8;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}
</style>
