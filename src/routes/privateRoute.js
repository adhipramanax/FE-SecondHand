import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}){
    const isLogin = localStorage.getItem('isLogin');

    console.log(!isLogin);

    if(!isLogin){
        return <Navigate to="/login" />;
    }else

    return children;
}