export const container ={
    hidden: {
        opacity: 0,
    },
    show:{
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
        }
    }
    
}

export const item  ={
    hidden: {
        x: '-50%',
        opacity: 0,

        
    },
    show:{
        x: "0%",
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}  