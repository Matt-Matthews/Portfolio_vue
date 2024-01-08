import { defineStore } from "pinia"

export const useGlobalStore = defineStore('global', {
    state: () => ({
        isActive: 0,
        links: ["home", "about", "projects", "contact"],
        frontEndSkills: ['ReactJs', 'Vuejs', 'React Native', 'Flutter', 'Tailwind css', 'Quasar', 'Bootstrap', 'Redux', 'Hive', 'SQlite'],
        backEndSkills: ['NodeJs', 'ExpressJs', '.Net core', 'Asp.Net', '.Net 7 & 8', 'MQTT', 'Kafka', 'SignalR', 'Rabit-MQ', 'EntityFramework', 'RestfulAPIs', 'Websorket', 'PostgreSql', 'ArangoDB', 'Aws', 'MongoDB', 'InfluxDB', 'MySql', 'GraphQL', 'Flask',],
        otherSkills: ['Javascript', 'Typescript', 'C++', 'C#', 'Docker', 'Figma', 'Adobe XD', 'Python', 'Firebase', 'CI/CD'],
        isButtonClicked: false,
        isOpen: false,
        projects: [
            {
                name: 'Car Auction',
                description: "A micro-services system for car auction and bidding. The project is developed with C# .Net, Nextjs, Postgres DB, MongoDB and Rabbit-MQ and signalR.",
                imgUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                gitLink: 'https://github.com/Matt-Matthews'
            },
            {
                name: 'Car Auction 2',
                description: "A micro-services system for car auction and bidding. The project is developed with C# .Net, Nextjs, Postgres DB, MongoDB and Rabbit-MQ and signalR.",
                imgUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                gitLink: 'https://github.com/Matt-Matthews'
            },
            {
                name: 'Car Auction 3',
                description: "A micro-services system for car auction and bidding. The project is developed with C# .Net, Nextjs, Postgres DB, MongoDB and Rabbit-MQ and signalR.",
                imgUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                gitLink: 'https://github.com/Matt-Matthews'
            },
            {
                name: 'Car Auction',
                description: "A micro-services system for car auction and bidding. The project is developed with C# .Net, Nextjs, Postgres DB, MongoDB and Rabbit-MQ and signalR.",
                imgUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                gitLink: 'https://github.com/Matt-Matthews'
            },
            {
                name: 'Car Auction 2',
                description: "A micro-services system for car auction and bidding. The project is developed with C# .Net, Nextjs, Postgres DB, MongoDB and Rabbit-MQ and signalR.",
                imgUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                gitLink: 'https://github.com/Matt-Matthews'
            },
            {
                name: 'Car Auction 3',
                description: "A micro-services system for car auction and bidding. The project is developed with C# .Net, Nextjs, Postgres DB, MongoDB and Rabbit-MQ and signalR.",
                imgUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                gitLink: 'https://github.com/Matt-Matthews'
            },
            
        ]
    }),
    actions: {
        handlePageChange(index) {
            this.isActive = index
            if (this.isOpen) this.isOpen = false;
        },
        closeMenu() {
            if (!this.isButtonClicked && this.isOpen) {
                this.isOpen = false;
            }
            this.isButtonClicked = false;
        }
    }
})