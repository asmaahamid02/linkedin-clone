import { NavLink } from 'react-router-dom'
import logo from '../assets/images/small-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faHome,
  faUsers,
  faBriefcase,
  faBuilding,
  faUser,
  faBell,
} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header className='w-full bg-white'>
      <nav className='w-full p-2 flex justify-around'>
        <div className='flex'>
          <img src={logo} className='w-9 mr-2' />
          <div className='bg-sky-100 p-2 rounded-sm'>
            <FontAwesomeIcon icon={faSearch} className='text-slate-700 mr-2' />
            <input
              name='search'
              placeholder='search'
              className='bg-inherit outline-none h-full'
            />
          </div>
        </div>
        <ul className='flex gap-5'>
          <li>
            <NavLink to='/home'>
              <div className='flex flex-col justify-center text-slate-700'>
                <FontAwesomeIcon icon={faHome} />
                <p>Home</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/network'>
              <div className='flex flex-col justify-center text-slate-700'>
                <FontAwesomeIcon icon={faUsers} />
                <p>My Network</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/jobs'>
              {' '}
              <div className='flex flex-col justify-center text-slate-700'>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Jobs</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/companies'>
              <div className='flex flex-col justify-center text-slate-700'>
                <FontAwesomeIcon icon={faBuilding} />
                <p>Companies</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/notifications'>
              <div className='flex flex-col justify-center text-slate-700'>
                <FontAwesomeIcon icon={faBell} />
                <p>Notifications</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile'>
              <div className='flex flex-col justify-center text-slate-700'>
                <FontAwesomeIcon icon={faUser} />
                <p>Profile</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
