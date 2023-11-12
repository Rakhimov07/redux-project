import { Route, Routes } from "react-router-dom"
import { ArtcileDetail, Login, Main, Navbar, Register } from "./components"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "./slice/auth"
import { AuthService } from "./services/auth"
import { getItem } from "./helpers"
import ArticleService from "./services/article"
import { getArticleSuccess, getArticlesStart } from "./slice/article"


const App = () => {
  const dispatch = useDispatch()

  const getArticle = async() => {
	try {
	dispatch(getArticlesStart())
	 const res = await ArticleService.getArticles()
	 dispatch(getArticleSuccess(res.articles))
	} catch (error) {
		console.log(error);
	}
  }
  const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
		getArticle()
	}, [])
  return (
    <div className="w-100 h-100 ">
    <Navbar/>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
	  <Route path="/article/:slug" element={<ArtcileDetail/>}/>
    </Routes>
    </div>
  
  )
}

export default App