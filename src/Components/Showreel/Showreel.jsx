import './Showreel.scss'
const Showreel = () => {
    return (
        <div className="showreel">
            <div className="showreel__content">
                <h3 className="showreel__title">Showreel</h3>
                <div className="showreel__video">
                <iframe width={"100%"} height={"100%"} src="https://www.youtube.com/embed/POSLXw9QfQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                </iframe>
                </div>
            </div>
        </div>


    );
}

export default Showreel;