import "./terminal.scss";
import { useState, useEffect } from "react";
import Posts from "../../../json/blogs.json";
import { Link } from "react-router-dom";
import BlogContent from "./BlogContent";

function TerminalWindow(props) {
    const [currentId, setCurrentId] = useState(Posts[0]?.id || null);
    const [boxImage, setBoxImage] = useState(
        Posts[0]?.thumbnail || "react.svg"
    );
    const [openBlog, setOpenBlog] = useState(false)


    // Controllers
    useEffect(() => {
        const handleKeyDown = (event) => {
            const currentIndex = Posts.findIndex(
                (post) => post.id === currentId
            )
            if (event.key === "ArrowDown" && !openBlog) {
                const nextIndex = (currentIndex + 1) % Posts.length
                setCurrentId(Posts[nextIndex].id)
                setBoxImage(Posts[nextIndex].thumbnail)
            } else if (event.key === "ArrowUp" && !openBlog) {
                const prevIndex =
                    (currentIndex - 1 + Posts.length) % Posts.length
                setCurrentId(Posts[prevIndex].id)
                setBoxImage(Posts[prevIndex].thumbnail)
            } else if (event.key === "Enter") {
                setOpenBlog(true)
            } else if (event.key === "Escape") {
                setOpenBlog(false)
            }
            
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentId, openBlog]);

    // useEffect(() => {

    // }, [currentId])

    // function handleHover(thumbnail, id){
    //     setBoxImage(thumbnail)
    //     setCurrentId(id)
    // }

    function handleBackButton() {
        setOpenBlog(false)
    }
    function handleClick() {
        setOpenBlog(true)
    }

    return (
         <div className="terminal-window">
            {openBlog && <button className="back-button" onClick={handleBackButton}>{'<< '}back</button>}
        {openBlog ?
            <BlogContent data={Posts[currentId - 1]}/>  
         :
        <>
            <div className="intro-text-container">
                <p>
                    For a terminal like feel, use 'Up' 'Down' 'Return' and 'Escape' keys to navigate on this page.
                </p>
                {/* <p>Type 'help' to see list of available commands.</p> */}
                {/* <p>guest@ubuntu:~$</p> */}
            </div>
            <div className="blog-projects-container">
                <p>Total: {Posts.length}</p>
                <ul className="projects-list">
                    {Posts.map((post, index) => (
                        <li
                            key={post.id}
                            onMouseOver={() => setBoxImage(post.thumbnail, setCurrentId(post.id))}
                            onClick={handleClick}
                            className={
                                post.id === currentId ? "activeLink" : ""
                            }
                        >
                            <h3>{post.title}</h3>
                            <span>{post.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="image-window-container">
                <img
                    src={boxImage}
                    alt="current project image"
                    className="box-image"
                />
            </div>   
        </>         
        }

        </div>
    );
}

export default TerminalWindow;
