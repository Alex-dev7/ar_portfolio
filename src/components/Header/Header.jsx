import './header.scss'
import mouse from '../../assets/scroll-down.png'


function Header(){


    return (
        <section
        id="header"
        className='header-container'> 

            <div  className='center-content'>  
                <img fetchPriority='high' src='me.png' alt='scroll down' width={200} height={200}  className='avatar-img' loading="eager"/> 
                <div>
                    <p  id="t"  >FULL STACK ENGINEER</p>
                    <div className='text-wrapper'>
                    
                    <p>Welcome,</p>
                    <p>explore my work and get in touch.</p>   
                    <div className='socials-wrapper'>
                        <a href="https://github.com/Alex-dev7" target="_blank" >
                            <img src='github.svg' width={22} height={22}/>
                        </a>
                        <a href="https://www.linkedin.com/in/alexei-rusu-dev/" target="_blank">
                            <img src='linkedin.svg' width={22} height={22}/>
                        </a>
                    </div>                     
                </div>
            </div>

            </div>    

            <img src={mouse} alt='scroll down'  className='mouse'/> 
        </section>
    )
}

export default Header


