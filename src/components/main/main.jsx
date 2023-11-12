import { useSelector } from "react-redux"
import {Loading} from '../../ui/index'
import { useNavigate } from "react-router-dom"
const Main = () => {
	const {articles,isLoading} = useSelector(state => state.article)
	console.log(articles);
    const Navigate = useNavigate()
	const onHandle = (slug) => {
		Navigate(slug)
	}

	return (
		<div className='container'>
			<div className='album py-5 '>
				<div className='container'>
					{isLoading ? (
					  <div className="d-flex justify-content-center align-center">
						 <Loading/>
					  </div>
					):(
						<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						{articles.map(item => (
							<div className='col' key={item.id}>
								<div className='card h-100 shadow-sm'>
									<svg
										className='bd-placeholder-img card-img-top'
										width='100%'
										height='225'
										xmlns='http://www.w3.org/2000/svg'
										role='img'
										aria-label='Placeholder: Thumbnail'
										preserveAspectRatio='xMidYMid slice'
										focusable='false'
									>
										<title>Placeholder</title>
										<rect width='100%' height='100%' fill='#55595c'></rect>
									</svg>

									<div className='card-body'>
										<p className='card-text fw-bold'>{item.title}</p>
										<p className='card-text'>{item.description.slice(0,150)}</p>
										<div className='d-flex justify-content-between align-items-center'>
											<div className='btn-group'>
												<button 
												onClick={() => onHandle(`article/${item.slug}`)}
												type='button' className='btn btn-sm btn-outline-success'>
													View
												</button>
												<button type='button' className='btn btn-sm btn-outline-secondary'>
													Edit
												</button>
												<button type='button' className='btn btn-sm btn-outline-danger'>
													Delete
												</button>
											</div>
											<small className='text-muted fw-bold text-capitalize'>{item.author.username}</small>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Main