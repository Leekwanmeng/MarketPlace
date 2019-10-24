import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      // mock data
      products: [
        {
          title: 'Apple',
          quantity: '3',
          price: '2'
        },
        {
          title: 'Banana',
          quantity: '4',
          price: '1'
        },
        {
          title: 'Apple',
          quantity: '3',
          price: '2'
        },
        {
          title: 'Banana',
          quantity: '4',
          price: '1'
        }
      ],
      userInfo: {
        isLoggedIn: false,
        name: 'Kwan Meng',
        username: 'kwan',
        password: 'password',
        birthday: '',
        age: '',
        education: '',
        aboutMe: '',
        email: ''
      }
    },
    getters: {
      getLoggedIn: state => {
        return state.userInfo.isLoggedIn;
      },
      getName: state => {
        return state.userInfo.name;
      }
    },
    mutations: {
      setLoggedIn: (state, isLoggedIn) => {
        state.userInfo.isLoggedIn = isLoggedIn;
      },
    }
})
