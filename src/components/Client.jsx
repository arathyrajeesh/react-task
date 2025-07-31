import '../styles/Client.css'






const Client = () => {

    return(
        <section>
            <div className='container'>
                <div className='client'>
                    <div className="client-home">
                        <h1>Our Clients</h1>
                        <p>We have been working with some Fortune 500+ clients</p>
                    </div>
                    <div className='client-img'>
                        <img src='/images/client1.png'/>
                        <img src='/images/client2.png'/>
                        <img src='/images/client3.png'/>
                        <img src='/images/client4.png'/>
                        <img src='/images/client5.png'/>
                        <img src='/images/client6.png'/>
                        <img src='/images/client3.png'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client