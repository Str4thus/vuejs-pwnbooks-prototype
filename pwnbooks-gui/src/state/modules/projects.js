export default {
    state: {
        projects: [
            { active: false, i: "0", id: 0, title: "HTB", description: "HackTheBox Boxes", color: "#ff00ff", x: 0, y: 0, w: 1, h: 2 },
            { active: false, i: "1", id: 1, title: "Vulnhub", description: "VMs from Vulnhub", color: "#0000ff", x: 2, y: 0, w: 1, h: 2 },
        ]
    },
    getters: {
        projects: state => state.projects,
        getProjectById: (state) => (projectId) => {
            return state.projects.find(project => project.id == projectId)
        },
        activeProject: state => state.projects.find(project => project.active),
    },
    actions: {
        selectProject({ commit, getters }, id) {
            let target = getters.getProjectById(id);
            let previous = getters.activeProject;

            commit("PROJECT_SELECT", { target, previous });
        },
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
        deleteProject({ commit }, id) {
            commit('PROJECT_DELETE', id);
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
        PROJECT_SELECT(_, { target, previous }) {
            if (previous != undefined) {
                previous.active = false;
            }

            target.active = true;
        },
        PROJECT_ADD(state, newProject) {
            state.projects.push(newProject);
        },
        PROJECT_EDIT(_, { target, title, description, color }) {
            target.title = title;
            target.description = description;
            target.color = color;
        },
        PROJECT_DELETE(state, id) {
            state.projects = state.projects.filter(project => project.id != id);
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