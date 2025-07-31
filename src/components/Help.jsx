import '../styles/help.css';

const Help = () => {
    return(
        <section className="stats-section">
            <div className='container'>
                <div className='help-content'>
                    <div className="stats-left">
                        <h2>Helping a local <br/><span>business reinvent itself</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <div className="stats-right">
                        <div className="stat-box">
                            <div className="stat-info">
                                <h3>2,245,341</h3>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-info">
                                <h3>46,328</h3>
                                <p>Clubs</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-info">
                                <h3>828,867</h3>
                                <p>Event Bookings</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-info">
                                <h3>1,926,436</h3>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Help;