import Home from '../pages/DisplayMovie'
import AddMovie from '../pages/AddMovie'
import MovieDetail from '../pages/MovieDetails'
import paths from './paths'

const routes = [
    {
        element: <AddMovie />,
        path: paths.addMovie,
    },
    {
        element: <Home />,
        path: paths.home,
        exact: true,
    },
    {
        element: <Home />,
        path: paths.startPage,
        exact: true,
    },
    {
        element: <MovieDetail />,
        path: paths.movieDetail,
        exact: true,
    }
]

export default routes;