import Header from './Header'
import Aside from './Aside'

const MainLayout = () => {
  return (
    <div className='w-full h-full bg-stone-200'>
      <Header />
      <Aside />
      <main>main</main>
    </div>
  )
}

export default MainLayout
