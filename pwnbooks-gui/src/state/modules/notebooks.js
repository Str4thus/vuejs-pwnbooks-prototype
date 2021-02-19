export default {
    state: {
        notebooks: [
            { "id": 0, "name": "Blue", "expanded": false },
            { "id": 1, "name": "Jewel", "expanded": false },
            { "id": 2, "name": "Jewel", "expanded": false },
            { "id": 3, "name": "Jewel", "expanded": false },
            { "id": 4, "name": "Jewel", "expanded": false }
        ]
    },
    getters: {
        notebooks: state => state.notebooks,
    },
    actions: {
        toggleNotebook({ commit }, id) {
            commit('TOGGLE_NOTEBOOK', id);
        }
    },
    mutations: {
        TOGGLE_NOTEBOOK(state, id) {
            let target = state.notebooks.find(notebook => notebook.id == id);
            target.expanded = !target.expanded;
        }
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