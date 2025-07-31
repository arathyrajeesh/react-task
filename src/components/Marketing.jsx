import '../styles/marketing.css';




const Marketing = () => {
    return(
        <section className='marketing-section'>
            <div className='marketing-content'>
                <h2>Caring is the new marketing</h2>
                <p className="subheading">
                    The Nexcent blog is the best place to read about the latest membership insights,
                    trends and more. See who's joining the community, read about how our community
                    are increasing their membership income and lots more.
                </p>
                <div className="blog-cards">
                    <div className="card">
                        <img src="/images/marketing1.jpg" alt="A person sitting on a couch reading a book."/>
                        <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
                        <a href="#">Readmore </a>
                    </div>
                    <div className="card">
                        <img src="/images/marketing2.jpg" alt="Two people working on a laptop, discussing a graph."/>
                        <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
                        <a href="#">Readmore </a>
                    </div>
                    <div className="card">
                        <img src="/images/marketing3.png" alt="A person from a bird's eye view working on a laptop."/>
                        <h3>Revamping the Membership Model with Triathlon Australia</h3>
                        <a href="#">Readmore </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketing;