
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import useTital from '../../Hooks/useTital';

const Signup = () => {
  useTital('Signup')
const{registerUsre} = useContext(authContext)
const Navigate=useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/'

    const registerHandler=event=>{        
            event.preventDefault()
            const form = event.target;
            const name = form.name.value
            const email = form.email.value;
            const password = form.password.value;
         
            registerUsre(email,password,name)
            .then(result=>{
                const user = result.user
               
                form.reset()
                const currentUser = {
                  email:user.email
                }
                console.log(currentUser)
                // jwt token
                fetch('https://backend-database-server-a11.vercel.app/jwt',{
                  method:'POST',
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(currentUser)
                })
                .then(res=>res.json())
                .then(data=>{
                  console.log(data)
                  localStorage.setItem('secret-token',data.token)
             Navigate(from,{replace:true});
                })
            })
            .catch(error=>console.error(error))
    }
    
    return (
        <div>
          
               <div className="hero min-h-screen bg-base-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">      
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center mt-5">Sign up</h1>
      <form onSubmit={registerHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name ='name' placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name ='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type='submit' className="btn btn-primary " value='Login'></input>
            
         
        </div>
      </form>
      <p className='text-center mb-4'>Have an account? <Link to='/login' className='text-[#f64c72]'>Log in</Link></p>

    </div>
    
  </div>
  
</div>
        </div>
    );
};

export default Signup;