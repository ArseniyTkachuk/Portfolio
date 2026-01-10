import { createI18n } from "vue-i18n";

const messages = {
    en: {
        menu: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
        },
        me: {
            fullName: "Arsenii Tkachuk",
            talk: "Let's Talk",
            displayText: {
                txt1: "Unity game developer",
                txt2: "Website developer",
                txt3: "Open Source Contributor",
                txt4: "Software Developer",
            }
        },
        introduce: {
            title: {
                part1: "LET ME ",
                part2: "INTRODUCE",
                part3: " MYSELF",
            },
            text: {
                part1: "I’m a Software Engineer who loves transforming ideas into reliable, \
                scalable products. Over time, I’ve explored several technologies and found \
                my passion in building high-performance systems and intuitive user experiences.",
                part2: {
                    part1: "I’m proficient in ",
                    and: "and",
                    part2: "— and I enjoy working across both backend and frontend stacks."
                },
                part3: {
                    part1: "Whenever possible, I love building projects with ",
                    part2: " and modern frameworks like ",
                    part3: " and other."
                }
            }
        }
    },
    ua: {
        menu: {
            home: "Головна",
            about: "Про мене",
            projects: "Проєкти",
            contact: "Контакти",
        },
        me: {
            fullName: "Арсеній Ткачук",
            talk: "Зв'язатися зі мною",
            displayText: {
                txt1: "Розробник ігор на Unity",
                txt2: "Розробник веб сайтів",
                txt3: "Автор відкритого коду",
                txt4: "Розробник програмного забезпечення",
            }
        },
        introduce: {
            title: {
                part1: "ДОЗВОЛЬТЕ МЕНІ ",
                part2: "ПРЕДСТАВИТИСЬ",
                part3: "",
            },
            text: {
                part1: "Я програмний індженер, який любить перетворювати ідеї на надійні \
                та масштабовані продукти. З часом я дослідив кілька технологій і знайшов \
                свою пристрасть у створенні високопродуктивних систем та інтуїтивно \
                зрозумілого користувацького інтерфейсу.",
                part2: {
                    part1: "Я вільно володію ",
                    and: "та",
                    part2: "і мені подобається працювати як з backend, так і з frontend стеками."
                },
                part3: {
                    part1: "Завжди, коли це можливо, я люблю створювати проекти за допомогою ",
                    part2: " та сучасних фреймворків, таких як ",
                    part3: " та інших."
                }
            }
        }
    },
};

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("lang") || "en",
    fallbackLocale: "en",
    messages,
});
