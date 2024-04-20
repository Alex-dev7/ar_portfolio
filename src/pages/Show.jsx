import { useLoaderData, Link } from "react-router-dom";
import "./show.scss";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import Footer from "../components/Footer/Footer";

function Show(props) {
    const item = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="show-container">
            <Link id="home-button" to={`/`}>
                home
            </Link>
            <div className="stars"></div>
            <section className="falling-stars">
                <span className="falling-star"></span>
                <span className="falling-star"></span>
            </section>
            <div className="show-header-container">
                <div className="title-group">
                    <h1>{item.title}</h1>
                    <span>{item.subtitle}</span>
                    <div className="role-group">
                        <p>
                            <span>ROLE</span>
                            {item.role}
                        </p>
                        <p>
                            <span>CONTEXT</span>
                            {item.context}
                        </p>
                    </div>
                </div>
                <div className="image-group">
                    <m.img
                        className="desktop-pic"
                        initial={{ opacity: 0, y: "-10%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        src={item.desktopImage}
                        referrerpolicy="no-referrer"
                        style={{
                            maxHeight: item.videoPath ? "40vh" : "auto",
                            width: item.videoPath ? "auto" : "",
                        }}
                    />
                </div>
            </div>
            <div className="description-container">
                <div className="description-group">
                    <h3>Description</h3>
                    <p>{item.description}</p>
                    <button>
                        <a href={item.live} target="_blank">
                            Live Site
                        </a>
                    </button>
                </div>
            </div>
            <div className="images-container">
                {item.videoPath ? (
                    <ReactPlayer
                        className="react-player"
                        playing={true}
                        url={
                            "https://youtube.com/shorts/UL3xIyxGBOk?si=iJj7J5WWoMCNddRe"
                        }
                        loop={true}
                        muted
                        height={450}
                        width={220}
                    />
                ) : (
                    <m.img
                        className="desktop-img"
                        initial={{ opacity: 0, x: "-50%" }}
                        animate={{ opacity: 1, x: "0%" }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: 0.6,
                        }}
                        src={item.desktopImage}
                        referrerpolicy="no-referrer"
                    />
                )}

                {item.videoPath ? null : (
                    <m.img
                        className="mobile-img"
                        initial={{ opacity: 0, x: "50%" }}
                        animate={{ opacity: 1, x: "0%" }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.6,
                        }}
                        src={item.mobileImage}
                        referrerpolicy="no-referrer"
                    />
                )}
            </div>
            <div className="tech-stack-container">
                <h3>Tech Stack</h3>
                <div className="tech-stack-group">
                    <ul className="tech-stack">
                        {item.skills.map((i) => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                </div>
                {item.repo && (
                    <a href={item.repo} target="_blank" className="repo-link">
                        <img src='/github.svg' width={20} height={20}/> source code -{">"}
                    </a>
                )}
            </div>
            <Footer />
        </section>
    );
}

export default Show;


{/* <div className="show-container ">
<div className="nav-arrows-container">
    {item.id - 1 === 0 ? null : (
        <Link to={`/show/${item.id - 1}`} className="prev">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="#f7f7f769"
                viewBox="0 0 15 24"
            >
                <path d="M15 19l-7-7 7-7" />
            </svg>
        </Link>
    )}
    {item.id + 1 === 9 ? null : (
        <Link to={`/show/${item.id + 1}`} className="next">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="#f7f7f769"
                viewBox="0 0 24 24"
            >
                <path d="M9 5l7 7-7 7" />
            </svg>
        </Link>
    )}
</div>
<m.div
    key={item.id}
    initial={{ opacity: 0, y: "-10%" }}
    animate={{ opacity: 1, y: "0%" }}
    // exit={{opacity: 0.5, y: -1500}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="left-column"
    id="left"
>
    <h1>{item.title}</h1>
    <hr />
    <p>{item.description}</p>
    <hr />
    <div className="links-wrapper">
        {item.repo && (
            <a href={item.repo} target="_blank">
                source code -{">"}
            </a>
        )}
        {item.live && (
            <a href={item.live} target="_blank">
                live site
            </a>
        )}
    </div>
    <h3>Tech Stack</h3>
    <ul className="tech-stack">
        {item.skills.map((i) => (
            <li key={i}>{i}</li>
        ))}
    </ul>
    <span>
        Note! Due to the free hosting, some of the projects can
        have a longer loading time.
    </span>
</m.div>
<div className="right-column">
    <Link id="back-button" to={`/`}>
        home
    </Link>
    {item.videoPath ? (
        <ReactPlayer
            className="react-player"
            playing={true}
            url={
                "https://youtube.com/shorts/UL3xIyxGBOk?si=iJj7J5WWoMCNddRe"
            }
            loop={true}
            muted
            height={700}
            width={350}
        />
    ) : (
        <m.img
            className="desktop-pic"
            initial={{ opacity: 0, x: "-350%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6,
            }}
            src={item.desktopImage}
            referrerpolicy="no-referrer"
        />
    )}

    <m.img
        className="mobile-pic"
        initial={{ opacity: 0, x: "-450%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.6,
        }}
        src={item.mobileImage}
        referrerpolicy="no-referrer"
    />
</div>
</div> */}