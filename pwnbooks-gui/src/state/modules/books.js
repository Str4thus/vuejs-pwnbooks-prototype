export default {
    state: {
        books: [
            { "id": 0, "name": "Blue", "expanded": false },
            { "id": 1, "name": "Jewel", "expanded": false },
            { "id": 2, "name": "Feline", "expanded": false },
            { "id": 3, "name": "Academy", "expanded": false },
            { "id": 4, "name": "Crossfit", "expanded": false }
        ]
    },
    getters: {
        books: state => state.books,
        getBookById: (state) => (id) => {
            return state.books.find(book => book.id == id);
        }
    },
    actions: {
        toggleBook({ commit, getters }, id) {
            let target = getters.getBookById(id);
            commit('TOGGLE_BOOK', target);
        },
        deleteBook({ commit }, id) {
            commit('DELETE_BOOK', id);
        },
        updateBookOrder({ commit }, reorderedList) {
            commit("UPDATE_BOOK_ORDER", reorderedList)
        }
    },
    mutations: {
        TOGGLE_BOOK(_, target) {
            target.expanded = !target.expanded;
        },
        DELETE_BOOK(state, id) {
            state.books = state.books.filter(book => book.id != id);
        },
        UPDATE_BOOK_ORDER(state, reorderedList) {
            state.books = reorderedList;
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