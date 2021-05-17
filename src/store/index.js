import axios from 'axios'
import { createStore } from 'vuex'

const productsURI = 'http://localhost:5000/products';
const categoriesURI = 'http://localhost:5000/categories';

export default createStore({
  state: {
    products: [],
    allProducts: [],
    categories: [],
    currentCategory: 'all',
    cartItems: [],
    cartTotalCount: 0,
    cartTotalSum: 0,
  },
  getters: {
    products: state => state.products,
    categories: state => state.categories,
    currentCategory: state => state.currentCategory,
    cartTotalCount: state => state.cartTotalCount,
  },
  mutations: {
    GET_PRODUCTS: (state, products) => {
      state.products = products;
      state.allProducts = products;
    },
    GET_CATEGORIES: (state, categories) => state.categories = categories,
    GET_FILTERED_PRODUCTS: (state, category) => state.products = category == 'all' ? state.allProducts : state.allProducts.filter(product => product.category == category),
    SET_CURRENT_CATEGORY: (state, category) => state.currentCategory = category,
    ADD_TO_CART: (state, product) => state.cartItems = [...state.cartItems, product],
    REMOVE_FROM_CART: (state, id) => state.cartItems = state.cartItems.filter(item => item.id != id),
    CART_TOTAL_COUNT: (state) => state.cartTotalCount = state.cartItems.reduce((acc, cur) => acc + cur.count, 0),
    CART_TOTAL_SUM: (state) => state.cartTotalSum = Math.ceil(state.cartItems.reduce((acc, cur) => acc + cur.count*cur.price, 0)*100)/100,
    CART_CHECKOUT: (state) => state.cartItems = [],
  },
  actions: {
    getProducts: async ({commit}) => {
      const response = await axios.get(productsURI);
      commit('GET_PRODUCTS', response.data);
    },
    getCategories: async ({commit}) => {
      const response = await axios.get(categoriesURI);
      commit('GET_CATEGORIES', response.data);
    },
    getFilteredProducts: ({commit}, category) => {
      commit('GET_FILTERED_PRODUCTS', category);
    },
    setCurrentCategory: ({commit}, category) => {
      commit('SET_CURRENT_CATEGORY', category);
    },
    addToCart: ({commit}, product) => {
      commit('ADD_TO_CART', product);
    },
    updateCartItem: ({dispatch}) => {
      dispatch('cartTotalCount');
      dispatch('cartTotalSum');
    },
    removeFromCart: ({commit, dispatch}, id) => {
      commit('REMOVE_FROM_CART', id);
      dispatch('cartTotalCount');
      dispatch('cartTotalSum');
    },
    cartTotalCount: ({commit}) => {
      commit('CART_TOTAL_COUNT');
    },
    cartTotalSum: ({commit}) => {
      commit('CART_TOTAL_SUM');
    },
    cartCheckout: ({commit, dispatch}) => {
      commit('CART_CHECKOUT');
      dispatch('cartTotalCount');
      dispatch('cartTotalSum');
    },
  },
  modules: {
  }
})
