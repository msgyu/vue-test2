const state = {
    user: null,
    token: window.localStorage.getItem("token")
};

const getters = {};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setToken(state, token) {
        window.localStorage.setItem("token", token);
    }
};

const actions = {
    async register(context, data) {
        const response = await axios.post("/api/register", data);
        context.commit("setUser", response.data);
    },
    async login(context, data) {
        const response = await axios.post("/api/login", data);
        context.commit("setUser", response.data);
    },
    async logout(context) {
        const response = await axios.post("/api/logout");
        context.commit("setUser", null);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
