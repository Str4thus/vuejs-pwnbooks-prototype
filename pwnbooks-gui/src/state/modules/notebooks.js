let defaultNotes = ["Flags", "Credentials", "Recon", "Enumeration", "Foothold", "User", "Root", "IP"];

export default {
    state: {
        notebooks: [{ "name": "Blue", "notes": defaultNotes }, { "name": "Jewel", "notes": defaultNotes }]
    },
    getters: {
        notebooks: state => state.notebooks,
    },
    actions: {
    },
    mutations: {
    }
}


/**
export default {
    state: {

        username: ''
    },
    getters: {
        username: state => state.username
    },
    actions: {
        addUserName({commit}, username) {
            commit('ADD_USERNAME', username);
        }
    },
    mutations: {
        ADD_USERNAME(state, name) {
            state.username = name;
        }
    }
}
 */