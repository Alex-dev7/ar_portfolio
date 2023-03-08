import projects from './json/projects.json'

export const showLoader = ({params}) => {
    const data = projects[params.id - 1]
    return data
}
