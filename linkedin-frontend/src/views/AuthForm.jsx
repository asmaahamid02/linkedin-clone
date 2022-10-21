import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const AuthForm = (props) => {
  return (
    <div className='w-screen h-screen bg-stone-200'>
      <div className='flex flex-col items-center w-4/5 m-auto'>
        <img src={logo} className='w-40' />
        {props.signup && (
          <p className='mb-10 text-2xl'>
            Make the most of your professional life
          </p>
        )}
        <form className='bg-white rounded-md p-10 w-full md:w-96'>
          {!props.signup && (
            <>
              {' '}
              <h2 className='text-3xl font-semibold mb-1'>Sign in</h2>
              <p className='mb-3'>Stay updated on your professional world</p>
            </>
          )}
          {props.signup && (
            <div className='flex flex-col gap-2 mb-5'>
              <label className='text-md text-gray-500'>Full Name</label>
              <input
                type='text'
                name='name'
                id='name'
                className='w-full border-2 border-stone-500 rounded-md h-9'
              />
              <span className='text-xs text-red-600 ml-2 hidden'>Invalid</span>
            </div>
          )}
          <div className='flex flex-col gap-2 mb-5'>
            <label className='text-md text-gray-500'>E-mail</label>
            <input
              type='text'
              name='email'
              id='email'
              className='w-full border-2 border-stone-500 rounded-md h-9'
            />
            <span className='text-xs text-red-600 ml-2 hidden'>Invalid</span>
          </div>
          <div className='flex flex-col gap-2 mb-5'>
            <label className='text-md text-gray-500'>
              Password {props.signup && <span>(6 characters minimum)</span>}
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='w-full border-2 border-stone-500 rounded-md h-9'
            />
            <span className='text-xs text-red-600 ml-2 hidden'>Invalid</span>
          </div>
          <button className='text-center text-white text-lg font-semibold w-full bg-sky-600 p-3 rounded-full'>
            {props.signup ? 'Join Now' : 'Sign in'}
          </button>
          <p className='text-center mt-3'>
            {props.signup ? (
              <>
                {' '}
                Already on LinkedIn?
                <NavLink to='/' className='text-sky-600 ml-2 font-semibold'>
                  Sign in
                </NavLink>
              </>
            ) : (
              <>
                {' '}
                New to LinkedIn?
                <NavLink
                  to='/signup'
                  className='text-sky-600 ml-2 font-semibold'
                >
                  Join Now
                </NavLink>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
