import css from "./HelpCard.module.css"

export const HelpCard = ({title,color})=> {
    return(
        <div style={{background:color}} className={css.helpcard}>
            <h3>{title}</h3>
        </div>
    )
}