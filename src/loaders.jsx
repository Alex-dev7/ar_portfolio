import projects from './json/projects.json'
import blogs from './json/blogs.json'

export const showLoader = ({params}) => {
    const data = projects[params.id - 1]
    return data
}

export const blogLoader = ({params}) => {
    const data = blogs[params.id - 1]
    return data
}