import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      casio: [
        {
          id: 0,
          name: 'Casio G-Shock GA-2100FR-3A',
          price: 27740,
          description: '========================================',
          image: 'Casio/casio0.png',
        },
        {
          id: 1,
          name: 'Casio G-Shock GM-2100B-4A',
          price: 31900,
          description: '========================================',
          image: 'Casio/casio.png',
        },
        {
          id: 2,
          name: 'Casio G-Shock GM-2100-1A',
          price: 30120,
          description: '========================================',
          image: 'Casio/casio2.png',
        },
        {
          id: 3,
          name: 'Casio Collection F-91WS-7E',
          price: 3460,
          description: '========================================',
          image: 'Casio/casio3.png',
        },
        
      ],
      applewatch: [
        {
          id: 0,
          name: 'Watch SE 2th, 40 mm',
          price: 20000,
          description: '========================================',
          image: 'Apple/apple.png',
        },
        {
          id: 1,
          name: 'Watch Ultra 2, 49 mm',
          price: 73000,
          description: '========================================',
          image: 'Apple/apple2.png',
        },
        {
          id: 2,
          name: 'Watch S9, 41 mm',
          price: 33000,
          description: '========================================',
          image: 'Apple/apple3.png',
        },
        {
          id: 3,
          name: 'Watch SE, 40 мм',
          price: 20000,
          description: '========================================',
          image: 'Apple/apple4.png',
        },

      ],
      rolex: [
        {
          id: 0,
          name: 'Часы GMT-Master II 40mm',
          price: 1950000,
          description: '========================================',
          image: 'Rolex/rolex3.png',
        },
        {
          id: 1,
          name: 'Часы Submariner 41mm',
          price: 1530000,
          description: '========================================',
          image: 'Rolex/rolex.png',
        },
        {
          id: 2,
          name: 'Часы Sea‑Dweller 44mm',
          price: 1800000,
          description: '========================================',
          image: 'Rolex/rolex1.png',
        },
        {
          id: 3,
          name: 'Часы Oyster Perpetual 41 mm',
          price: 2150000,
          description: '========================================',
          image: 'Rolex/rolex2.png',
        },
      ],
      basket: [],
  },
  getters: {
    GetCountProducts(state) {
      return state.basket.length;
    }
  },
  mutations: {
    THE_ADD_PRODUCT(state, payload) {
      state.basket.push(payload);
    },

    THE_CHANGE_BASKET(state, payload) {
      state.basket = payload
    },

    THE_CHANGE_AMOUNT_PRODUCT(state, payload) {
      state.basket.forEach(product => {
        if(product.id === payload.id) {
          product.count = payload.count;
          product.total = +(product.price * payload.count).toFixed(2);
        }
      });
    }
  },
  actions: {
    AddItemToCart({commit}, payload) {
      commit('THE_ADD_PRODUCT', payload);
    },

    RemoveProductToCard({state, commit}, payload) {
     let newBasket = state.basket.filter(item => {
        if(item.id !== payload) {
          return item;
        }
      })
      commit('THE_CHANGE_BASKET', newBasket);
    },

    ChangeAmountProduct({commit}, payload) {
      commit('THE_CHANGE_AMOUNT_PRODUCT', payload);
    }
  },
  modules: {
  }
})
