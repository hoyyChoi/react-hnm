import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate ,setauthenticate}) => {
    const listItem=['여성','Divided','남성','신생아/유아','아동','H&M HOME', 'Sale','지속가능성']

    let navigate = useNavigate() 
    const spacelogin = () =>{
        navigate('/Login')
    }
    const spacehome =()=>{
        navigate('/')
    }

    const onclick =(e)=>{
        if(e.key=='Enter'){
            let value = e.target.value
            navigate(`/?q=${value}`)
        }
    }

  return (
    <div>
        <div className="login-button">
            {authenticate ? (
                <div onClick={() => setauthenticate(false)}>
                <FontAwesomeIcon icon={faCoffee} />
                <span>로그아웃</span>
                </div>
             ) : (
                <div onClick={() => navigate("/login")}>
                <FontAwesomeIcon icon={faCoffee} />
                <span>로그인</span>
                </div>
            )}
        </div>
        <div className='logo-top'>
            <img className="logo" onClick={spacehome} src='https://play-lh.googleusercontent.com/BDtWjjKfOrhvqeBET291anITXe3KDnycL0mRJMz0pwPXOEdVKVHYYDGXMVGEzrVbSOA'/>
        </div>
        
        <div class="nav-menu-area">
            <ul className='list'>
                {listItem.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
            <div className='search'>
                <FontAwesomeIcon icon={faCoffee} />
                <input type='text' placeholder='제품검색' onKeyPress={onclick}></input>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar




