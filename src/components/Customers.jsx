import '../styles/customers.css';

const Customers = () => {
    return(
        <section className="customers-section">
            <div className="container">
                <div className='customers'>
                    <div>
                        <img src="/images/customers.jpg" alt="A Tesla logo on a dark background." />
                    </div>
                    <div className='customers-content'>
                        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h4>Tim Smith</h4>
                        <p className="association">British Dragon Boat Racing Association</p>
                        <div className="client-logos">
                            <img src='/images/client1.png' alt="Client logo 1"/>
                            <img src='/images/client2.png' alt="Client logo 2"/>
                            <img src='/images/client3.png' alt="Client logo 3"/>
                            <img src='/images/client4.png' alt="Client logo 4"/>
                            <img src='/images/client5.png' alt="Client logo 5"/>
                            <img src='/images/client6.png' alt="Client logo 6"/>
                            <a href="#">Meet Customers</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customers;