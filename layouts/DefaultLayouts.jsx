import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import Header from '../components/Header'
import globalContext from '../src/contexts/GlobalContext'
import Loader from '../components/Loader'

const DefaultLayouts = () => {
    const { isLoading } = useContext(globalContext) // consumo del contesto
    return (
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayouts;
