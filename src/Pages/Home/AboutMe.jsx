export default function AboutMe() {
    return (
    <section id="aboutMe">
        <div className="section__pic-container">
            <img src="./img/profile-pic.png" alt="Profile picture" />
        </div>

        <div className="section__content">
            <div className="section__title">
                <h1>Maicah Algabre</h1>
                <h3>VIDEO EDITOR</h3>
            </div>

            <div className="section__socials">
                <img src="./img/instagram.png" alt="Instagram icon" onClick={() => window.location.href = "https://www.instagram.com/illcomposd/"}/>
                <img src="./img/linkedin.png" alt="Linked icon" onClick={() => window.location.href = "https://www.linkedin.com/in/maicah-algabre/"}/>
            </div>

            <div className="section__text">
                <p>Hi, I'm an aspiring video editor passionate about storytelling and cinematic visuals</p>
            </div>

            <div className="button-container">
                <button className="btn btn-color-2" onClick={() => window.open('./img/Resume.pdf', '_blank')}>
                    Resume
                </button>
                <button className="btn btn-color-2" onClick={() => window.location.href = "mailto:maicahlou@gmail.com"}>
                    Contact Me
                </button>
            </div>
        </div>
</section>
    );
}