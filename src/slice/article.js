import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	articles: [],
	articleDetail:null,
	error: null,
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		getArticlesStart: state => {
			state.isLoading = true
		},
		getArticleSuccess: (state, action) => {
			state.isLoading = false
			state.articles = action.payload
		},
		getArticleFailure: (state, action) => {
			state.error = action.payload
		},
		getArticleDetailStart: state => {
			state.isLoading = true
		},
		getArticleDetailSuccess: (state, action) => {
			state.isLoading = false
			state.articleDetail = action.payload
		},
		getArticleDetailFailure: state => {
			state.isLoading = false
		},
	},
})

export const {getArticleDetailFailure,getArticlesStart, getArticleSuccess,getArticleDetailStart,getArticleDetailSuccess, getArticleFailure} = articleSlice.actions
export default articleSlice.reducer