import { defineStore } from "pinia"

export const useGlobalStore = defineStore('global', {
    state: () => ({
        isActive: 0,
        links: ["home", "about", "projects", "contact"],
        frontEndSkills: ['ReactJs', 'Vuejs', 'React Native', 'Flutter', 'Tailwind css', 'Quasar', 'Bootstrap', 'Redux', 'Hive', 'SQlite'],
        backEndSkills: ['NodeJs', 'ExpressJs', '.Net core', 'Asp.Net', '.Net 7 & 8', 'MQTT', 'Kafka', 'SignalR', 'Rabit-MQ', 'EntityFramework', 'RestfulAPIs', 'Websorket', 'PostgreSql', 'ArangoDB', 'Aws', 'MongoDB', 'InfluxDB', 'MySql',  'GraphQL', 'Flask',],
        otherSkills: ['Javascript', 'Typescript', 'C++', 'C#', 'Docker', 'Figma', 'Adobe XD', 'Python', 'Firebase', 'CI/CD'],
        isButtonClicked: false,
        isOpen: false
    }),
    actions: {
        handlePageChange(index) {
            this.isActive = index
            if(this.isOpen) this.isOpen = false;
        },
        closeMenu(){
            if(!this.isButtonClicked && this.isOpen) {
              this.isOpen = false;
            }
            this.isButtonClicked = false;
          }
    }
})