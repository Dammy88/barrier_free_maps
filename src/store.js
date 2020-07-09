import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        markers: [],
        user: null,
        users: null,
        isAuthenticated: false,
        userMarkers: [],
        globalMarkers:[],
        idCount: null,
        added: false,
        noAdded: false,
        adding: true,
        removed: false,
        iss : 18
    },
    mutations: {
        setIdCount(state, payload){
            state.idCount = payload;
        },
        setAdded(state, payload){
            state.added = payload;
        },
        setNoAdded(state, payload){
            state.noAdded = payload;
        },
        setAdding(state, payload){
            state.adding = payload;
        },
        setRemoved(state, payload){
            state.removed = payload;
        },
        setMarkers(state, payload) {
            state.markers = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setUserMarkers(state, payload) {
            state.userMarkers = payload;
        },
        setGlobalMarkers(state, payload) {
            state.globalMarkers = payload;
            }
    },
    actions: {      
        userLogin({ commit }, { email, password }) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/profile');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        userJoin({ commit }, { email, password }) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    //commit('setUsers', user.uid);
                    commit('setIsAuthenticated', true);
                    router.push('/profile');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        userSignOut({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        getIdCount({commit}){
            return firebase
                .database()
                .ref('idCount')
                .on('value', snapshot => {
                    commit('setIdCount', snapshot.val());
                });

        },
        async incIdCount({state}){
            state.idCount++;
            await firebase
            .database()
            .ref('idCount')
            .set(state.idCount);

        },
        async addMarker({ state }, payload) {
            await firebase
                .database()
                .ref('users')
                .child(state.user.user.uid)
                .push(payload);
            await firebase
                .database()
                //.ref('global/m' + payload.id_m)
                .ref('global')
                .push(payload);
        },
        async deleteMarker({ state }, path, item) {
            await firebase
                .database()
                .ref('users')
                .child(state.user.user.uid)
                .child(path)
                .remove();

                await firebase
                .database()
                .ref('global/')
                .child('m'+item.id_m)
                .remove();
        },
        
        getUserMarkers({ state, commit }) {
            return firebase
                .database()
                .ref('users/' + state.user.user.uid)
                .once('value', snapshot => {
                    commit('setUserMarkers', snapshot.val());
                });
        },
       getGlobalMarkers({state, commit}){
            return firebase
            .database()
            .ref('global')
            .on('value', snapshot => {
                commit('setGlobalMarkers', snapshot.val());
            });
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        },
        isAdded(state) {
            return state.added !== null && state.added !== undefined && state.added !== false;
        },
        isNoAdded(state) {
            return state.noAdded !== null && state.noAdded !== undefined && state.noAdded !== false;
        },
        isAdding(state) {
            return state.adding !== null && state.adding !== undefined && state.adding !== false;
        },
        isRemoved(state) {
            return state.adding !== null && state.adding !== undefined && state.removed !== false;
        }
    }
});
