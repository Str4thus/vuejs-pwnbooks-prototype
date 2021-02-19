export default {
    state: {
        notes: [
            { "id": 0, "bookId": 0, "label": "# Flags", "content": "display the flags", "active": false },
            { "id": 1, "bookId": 0, "label": "# Credentials", "content": "get the creds", "active": false },
            { "id": 2, "bookId": 0, "label": "# Recon", "content": "do the recon", "active": false },
            { "id": 3, "bookId": 0, "label": "# Enumeration", "content": "have fun enumeration", "active": false },
            { "id": 4, "bookId": 0, "label": "# Foothold", "content": "step in", "active": false },
            { "id": 5, "bookId": 0, "label": "# User", "content": "i am you", "active": false },
            { "id": 6, "bookId": 0, "label": "# Root", "content": "i am god", "active": false },
            { "id": 7, "bookId": 0, "label": "# IP", "content": "where to go", "active": false },


            { "id": 8, "bookId": 1, "label": "# Flags", "content": "display the flags", "active": false },
            { "id": 9, "bookId": 1, "label": "# Credentials", "content": "get the creds", "active": false },
            { "id": 10, "bookId": 1, "label": "# Recon", "content": "do the recon", "active": false },
            { "id": 11, "bookId": 1, "label": "# Enumeration", "content": "have fun enumeration", "active": false },
            { "id": 12, "bookId": 1, "label": "# Foothold", "content": "step in", "active": false },
            { "id": 13, "bookId": 1, "label": "# User", "content": "i am you", "active": false },
            { "id": 14, "bookId": 1, "label": "# Root", "content": "i am god", "active": false },
            { "id": 15, "bookId": 1, "label": "# IP", "content": "where to go", "active": false },


            { "id": 16, "bookId": 2, "label": "# Flags", "content": "display the flags", "active": false },
            { "id": 17, "bookId": 2, "label": "# Credentials", "content": "get the creds", "active": false },
            { "id": 18, "bookId": 2, "label": "# Recon", "content": "do the recon", "active": false },
            { "id": 19, "bookId": 2, "label": "# Enumeration", "content": "have fun enumeration", "active": false },
            { "id": 20, "bookId": 2, "label": "# Foothold", "content": "step in", "active": false },
            { "id": 21, "bookId": 2, "label": "# User", "content": "i am you", "active": false },
            { "id": 22, "bookId": 2, "label": "# Root", "content": "i am god", "active": false },
            { "id": 23, "bookId": 2, "label": "# IP", "content": "where to go", "active": false },


            { "id": 24, "bookId": 3, "label": "# Flags", "content": "display the flags", "active": false },
            { "id": 25, "bookId": 3, "label": "# Credentials", "content": "get the creds", "active": false },
            { "id": 26, "bookId": 3, "label": "# Recon", "content": "do the recon", "active": false },
            { "id": 27, "bookId": 3, "label": "# Enumeration", "content": "have fun enumeration", "active": false },
            { "id": 28, "bookId": 3, "label": "# Foothold", "content": "step in", "active": false },
            { "id": 29, "bookId": 3, "label": "# User", "content": "i am you", "active": false },
            { "id": 30, "bookId": 3, "label": "# Root", "content": "i am god", "active": false },
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
        }
    },
    mutations: {
        SELECT_NOTE(state, { target, previous }) {
            if (previous != undefined) {
                previous.active = false;
            }

            target.active = true;
        }
    }
}