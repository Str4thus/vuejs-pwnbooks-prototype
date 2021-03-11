export default {
    state: {
        projects: [
            { i: "0", id: 0, title: "HTB", description: "HackTheBox Boxes", color: "#ff00ff", x: 0, y: 0, w: 1, h: 2 },
            { i: "1", id: 1, title: "Vulnhub", description: "VMs from Vulnhub", color: "#ff00ff", x: 2, y: 0, w: 1, h: 2 },
            { i: "2", id: 2, title: "Dante", description: "HackTheBox Endgame Lab", color: "#ff00ff", x: 4, y: 0, w: 1, h: 2 },
            { i: "3", id: 3, title: "APT", description: "HackTheBox ProLab", color: "#ff00ff", x: 6, y: 0, w: 1, h: 2 },
            { i: "4", id: 4, title: "THM", description: "TryHackMe Rooms", color: "#ff00ff", x: 8, y: 0, w: 1, h: 2 },
            { i: "5", id: 5, title: "V.I.P", description: "HackTheBox ProLab", color: "#ff00ff", x: 10, y: 0, w: 1, h: 2 },
            { i: "6", id: 6, title: "Testing", description: "Just trying out stuff..", color: "#ff00ff", x: 0, y: 2, w: 2, h: 2 },
            { i: "7", d: 7, title: "A", description: "asdf", color: "#ff00ff", x: 2, y: 2, w: 2, h: 2 },
            { i: "8", id: 8, title: "B", description: "fasdf", color: "#ff00ff", x: 4, y: 2, w: 2, h: 2 },
            { i: "9", id: 9, title: "C", description: "asdf", color: "#ff00ff", x: 6, y: 2, w: 2, h: 2 },
            { i: "10", id: 10, title: "D", description: "asdf", color: "#ff00ff", x: 8, y: 2, w: 2, h: 2 },
            { i: "11", id: 11, title: "E", description: "asdf", color: "#ff00ff", x: 10, y: 4, w: 2, h: 2 },
            { i: "12", id: 12, title: "F", description: "asd", color: "#ff00ff", x: 0, y: 4, w: 2, h: 2 },
            { i: "13", id: 13, title: "G", description: "afasdfasd", color: "#ff00ff", x: 2, y: 4, w: 2, h: 2 },
            { i: "14", id: 14, title: "H", description: "adfasdfasd", color: "#ff00ff", x: 4, y: 4, w: 2, h: 2 },
            { i: "15", id: 15, title: "I", description: "fasdfasdf", color: "#ff00ff", x: 6, y: 4, w: 2, h: 2 },
            { i: "16", id: 16, title: "J", description: "fasdfa", color: "#ff00ff", x: 8, y: 4, w: 2, h: 2 },
            { i: "17", id: 17, title: "K", description: "asdf", color: "#ff00ff", x: 10, y: 4, w: 2, h: 2 },
            { i: "18", id: 18, title: "L", description: "asdfasdf", color: "#ff00ff", x: 0, y: 6, w: 2, h: 2 },
            { i: "19", id: 19, title: "M", description: "asdfasdfasdf", color: "#ff00ff", x: 2, y: 6, w: 2, h: 2 },
        ]
    },
    getters: {
        projects: state => state.projects,
        getProjectById: (state) => (projectId) => {
            return state.projects.find(project => project.id == projectId)
        },
    },
    actions: {
        createProject({ commit, getters }, { title, description, color }) {
            let id = getters.projects.length + 1;
            let newProject = {
                i: parseInt(id),
                id: id,
                title: title,
                description: description,
                color: color,
                x: (getters.projects.length * 2) % 12,
                y: getters.projects.length + 12, // puts it at the bottom
                w: 2,
                h: 2,
            }
            commit("PROJECT_ADD", newProject);
        },
        editProject({ commit, getters }, { id, title, description, color }) {
            let target = getters.getProjectById(id);

            commit("PROJECT_EDIT", { target, title, description, color })
        },
        updateProjectPosition({ commit, getters }, { id, newX, newY }) {
            let target = getters.getProjectById(id);
            commit("PROJECT_POSITION_UPDATE", { target, newX, newY });
        },
        updateProjectSize({ commit, getters }, { id, newH, newW }) {
            let target = getters.getProjectById(id);
            commit("PROJECT_SIZE_UPDATE", { target, newH, newW });
        }
    },
    mutations: {
        PROJECT_ADD(state, newProject) {
            state.projects.push(newProject);
        },
        PROJECT_EDIT(state, { target, title, description, color }) {
            target.title = title;
            target.description = description;
            target.color = color;


            console.log(state);
        },
        PROJECT_POSITION_UPDATE(_, { target, newX, newY }) {
            target.x = newX;
            target.y = newY;
        },
        PROJECT_SIZE_UPDATE(_, { target, newH, newW }) {
            target.h = newH;
            target.w = newW;
        }
    }
}