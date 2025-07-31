import '../styles/manage.css'




const Manage = () =>{

    return(
        <section>
            <div className='container'>
                <div className='manage'>
                <div className='manage-home'>
                    <h1>Manage your entire community in a single system</h1>
                    <p className='manage-par'>Who is Nextcent suitable for?</p>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <img src="/images/manage1.svg"/>
                        <h4>Membership Organisations</h4>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='card'>
                        <img src="/images/manage2.svg"/>
                        <h4>Membership Organisations</h4>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>                    
                    <div className='card'>
                        <img src="/images/manage3.svg"/>
                        <h4>Membership Organisations</h4>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}


export default Manage