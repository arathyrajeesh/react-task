import '../styles/Client.css';

const Client = () => {
    return(
        <section className="client-section">
            <div className='container'>
                <div className='client'>
                    <div className="client-home">
                        <h2>Our Clients</h2>
                        <p>We have been working with some Fortune 500+ clients</p>
                    </div>
                    <div className='client-img'>
                        <img src='/images/client1.png' alt="Client Logo 1"/>
                        <img src='/images/client2.png' alt="Client Logo 2"/>
                        <img src='/images/client3.png' alt="Client Logo 3"/>
                        <img src='/images/client4.png' alt="Client Logo 4"/>
                        <img src='/images/client5.png' alt="Client Logo 5"/>
                        <img src='/images/client6.png' alt="Client Logo 6"/>
                        <img src='/images/client3.png' alt="Client Logo 7"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;