import style  from "./heroSec.module.css";
const isAdmin = false
export default function HeroSection() {
    return(
        <div>
       <p className={style.heroSecHeading}>{
        isAdmin ? "welcome admin" : "Welcome user"}
        <div>{isAdmin ? (canEdit ? "edit" :"view") : "you not an admin"}
        </div>
            </p>
       <span className={style.herSubHeading}>this is our super react app</span>
        </div>
    );
}