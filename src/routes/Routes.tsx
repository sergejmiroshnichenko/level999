import { Route, Routes } from 'react-router-dom'
import LoginPage from 'pages/LoginPage/LoginPage'
import HomePage from 'pages/HomePage/HomePage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<LoginPage />}
            />
            <Route
                path='/home'
                element={<HomePage />}
            />
        </Routes>
    )
}
