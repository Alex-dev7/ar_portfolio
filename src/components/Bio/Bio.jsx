import about from "../../json/about.json"
import { BioContainer, BioImage } from "../../styledcomponents/Bio"

function Bio(props){

    return <BioContainer>

        <h1>{about.name}</h1>
        <BioImage src={about.image} alt={about.name} />
        <p>{about.bio}</p>
        <p>{about.email}</p>
        
    </BioContainer>
}

export default Bio