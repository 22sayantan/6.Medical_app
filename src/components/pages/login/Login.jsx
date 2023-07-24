import {useEffect, useState} from 'react';
import'./login.css'

export default function Login() {

  const [change,setChange] = useState('Sign Up');
  const [logTitle,setLogTitle] = useState('Log In');
  

  useEffect(()=>{
      function myEvent(){
          (change === 'Sign Up')
            ?(setChange('Log In'))
              :(setChange('Sign Up'));
          (logTitle === 'Log In')
            ?(setLogTitle('Sign Up'))
              :(setLogTitle('Log In'));
      }

      const LogBtn = document.querySelector('#logClick');
      LogBtn.addEventListener('click',myEvent);
  });

  return (
    <>
        <section className="login">
            <div className="content">
                <h1>{logTitle}</h1>

                <form action="">
                    <label >Email</label>
                    <input type="email" placeholder="e.g: example123@email.com"/>
                    <label >PassWord</label>
                    <input type="password" placeholder="e.g: Exp@39th#e4"/>
                </form>

                <button type="submit">Submit</button>

                <h5>Are you new? <a id='logClick'>{change}</a></h5>
            </div>
        </section> 
    </>
  )
}
