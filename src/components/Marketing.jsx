import '../styles/marketing.css'





const Marketing = () => {
    
    return(
        <section>
            <div className='marketers'>
                <h2>Caring is the new marketing</h2>
                <p className="subheading">
                The Nexcent blog is the best place to read about the latest membership insights,
                trends and more. See who's joining the community, read about how our community
                are increasing their membership income and lots more.
                </p>
                <div className="blog-cards">
                    <div className="card">
                        <img src="/images/marketing1.jpg"/>
                        <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
                        <a href="#">Readmore </a>
                    </div>
                    <div className="card">
                        <img src="/images/marketing2.jpg"/>
                        <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
                        <a href="#">Readmore </a>
                    </div>
                    <div className="card">
                        <img src="/images/marketing3.png"/>
                        <h3>Revamping the Membership Model with Triathlon Australia</h3>
                        <a href="#">Readmore </a>
                    </div>
                </div>
            </div>
        </section>
    )



}
export default Marketing