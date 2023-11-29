import { useLoaderData, Link } from "react-router-dom";
import "./show.scss";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import ReactPlayer from "react-player/youtube";

function Show(props) {
  const item = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="show-container ">
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
            <a href={item.repo} target="_blank">
              Source code -{">"}
            </a>
            {item.live ? (
              <a href={item.live} target="_blank">
                Live Site
              </a>
            ) : null}
          </div>
          <h3>Tech Stack</h3>
          <ul className="tech-stack">
            {item.skills.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <span>
            Note! Due to the free hosting, some of the projects can have a
            longer loading time.
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
              url={"https://youtube.com/shorts/UL3xIyxGBOk?si=iJj7J5WWoMCNddRe"}
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
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              src={item.desktopImage}
              referrerpolicy="no-referrer"
            />
          )}

          <m.img
            className="mobile-pic"
            initial={{ opacity: 0, x: "-450%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            src={item.mobileImage}
            referrerpolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}

export default Show;
