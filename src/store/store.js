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
          title: 'Watermelon',
          quantity: '1',
          price: '4'
        },
        {
          title: 'Eggs',
          quantity: '12',
          price: '3'
        }
      ],
      userInfo: {
        isLoggedIn: false,
        name: 'Kwan Meng',
        username: 'kwan',
        password: 'password',
        birthday: '26 Sept 1995',
        age: '24',
        education: 'Graduate',
        aboutMe: 'I am looking for a job xD',
        email: ''
      }
    },
    getters: {
      getLoggedIn: state => {
        return state.userInfo.isLoggedIn;
      },
      getName: state => {
        return state.userInfo.name;
      },
      getBirthday: state => {
        return state.userInfo.birthday;
      },
      getAge: state => {
        return state.userInfo.age;
      },
      getEducation: state => {
        return state.userInfo.education;
      },
      getAboutMe: state => {
        return state.userInfo.aboutMe;
      }
    },
    mutations: {
      setLoggedIn: (state, isLoggedIn) => {
        state.userInfo.isLoggedIn = isLoggedIn;
      },
    }
})
