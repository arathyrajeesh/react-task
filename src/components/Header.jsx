import '../styles/Header.css'



const Header = () => {

    return(
        <header>
            <div className='items'>
                <img src='/images/logo.svg'/>
                <h1>Nexcent</h1>
                <nav className='list-items'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Features</a></li>
                        <li><a href='#'>Community</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <button>Register Now</button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header