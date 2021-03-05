const TITLE_PREFIX = "-> ";

export default {
    state: {
        notes: [
            { "id": 0, "bookId": 0, "title": "# Flags", "content": "# Flags\n", "active": false },
            { "id": 1, "bookId": 0, "title": "# Credentials", "content": "# Credentials\n", "active": false },
            { "id": 2, "bookId": 0, "title": "# Recon", "content": "# Recon\n", "active": false },
            { "id": 3, "bookId": 0, "title": "# Enumeration", "content": "# Enumeration\n", "active": false },
            { "id": 4, "bookId": 0, "title": "# Foothold", "content": "# Foothold\n", "active": false },
            { "id": 5, "bookId": 0, "title": "# User", "content": "# User\n", "active": false },
            { "id": 6, "bookId": 0, "title": "# Root", "content": "# Root\n", "active": false },
            { "id": 7, "bookId": 0, "title": "# IP", "content": "# IP\n", "active": false },


            { "id": 8, "bookId": 1, "title": "# asdf", "content": "display the flags", "active": false },
            { "id": 9, "bookId": 1, "title": "# Credentials", "content": "get the creds", "active": false },
            { "id": 10, "bookId": 1, "title": "# Recon", "content": "do the recon", "active": false },
            { "id": 11, "bookId": 1, "title": "# Enumeration", "content": "have fun enumeration", "active": false },
            { "id": 12, "bookId": 1, "title": "# Foothold", "content": "step in", "active": false },
            { "id": 13, "bookId": 1, "title": "# User", "content": "i am you", "active": false },
            { "id": 14, "bookId": 1, "title": "# Root", "content": "i am god", "active": false },
            { "id": 15, "bookId": 1, "title": "# IP", "content": "where to go", "active": false },


            { "id": 16, "bookId": 2, "title": "# yxcv", "content": "display the flags", "active": false },
            { "id": 17, "bookId": 2, "title": "# Credentials", "content": "get the creds", "active": false },
            { "id": 18, "bookId": 2, "title": "# Recon", "content": "do the recon", "active": false },
            { "id": 19, "bookId": 2, "title": "# Enumeration", "content": "have fun enumeration", "active": false },
            { "id": 20, "bookId": 2, "title": "# Foothold", "content": "step in", "active": false },
            { "id": 21, "bookId": 2, "title": "# User", "content": "i am you", "active": false },
            { "id": 22, "bookId": 2, "title": "# Root", "content": "i am god", "active": false },
            { "id": 23, "bookId": 2, "title": "# IP", "content": "where to go", "active": false },


            { "id": 24, "bookId": 3, "title": "# Flags", "content": "display the flags", "active": false },
            { "id": 25, "bookId": 3, "title": "# Credentials", "content": "get the creds", "active": false },
            { "id": 26, "bookId": 3, "title": "# Recon", "content": "do the recon", "active": false },
            { "id": 27, "bookId": 3, "title": "# Enumeration", "content": "have fun enumeration", "active": false },
            { "id": 28, "bookId": 3, "title": "# Foothold", "content": "step in", "active": false },
            { "id": 29, "bookId": 3, "title": "# User", "content": "i am you", "active": false },
            { "id": 30, "bookId": 3, "title": "# Root", "content": "i am god", "active": false },
        ]
    },
    getters: {
        notes: state => state.notes,
        activeNote: state => state.notes.find(note => note.active),
        getNotesByBookId: (state) => (bookId) => {
            return state.notes.filter(note => note.bookId == bookId)
        },
        getNoteById: (state) => (id) => {
            return state.notes.find(note => note.id == id);
        }
    },
    actions: {
        selectNote({ commit, getters }, id) {
            let target = getters.getNoteById(id);
            let previous = getters.activeNote;

            commit("SELECT_NOTE", { target, previous });
        },
        addNote({ commit, getters }, { title, bookId }) {
            let newNote = {
                id: getters.notes.length + 2,
                bookId: bookId,
                title: TITLE_PREFIX + title,
                content: "# " + title,
                active: false,
            }
            commit("ADD_NOTE", newNote);
        },
        deleteNote({ commit }, id) {
            commit('DELETE_NOTE', id);
        },
        updateNoteTitle({ commit, getters }, title) {
            let target = getters.activeNote;

            if (target != undefined) {
                commit("UPDATE_NOTE_TITLE", { target, title })
            }
        },
        updateNoteContent({ commit, getters }, content) {
            let target = getters.activeNote;

            if (target != undefined) {
                commit("UPDATE_NOTE_CONTENT", { target, content })
            }
        },
        updateNoteOrder({ commit }, reorderedList) {
            console.log(reorderedList);
            commit("UPDATE_NOTE_ORDER", reorderedList)
        }
    },
    mutations: {
        SELECT_NOTE(_, { target, previous }) {
            if (previous != undefined) {
                previous.active = false;
            }

            target.active = true;
        },
        ADD_NOTE(state, newNote) {
            state.notes.push(newNote);
        },
        DELETE_NOTE(state, id) {
            state.notes = state.notes.filter(note => note.id != id);
        },
        UPDATE_NOTE_TITLE(_, { target, title }) {
            target.title = TITLE_PREFIX + title;
        },
        UPDATE_NOTE_CONTENT(_, { target, content }) {
            target.content = content;
        },
        UPDATE_NOTE_ORDER(state, reorderedList) {
            state.notes = reorderedList;
        }
    }
}