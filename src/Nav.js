import { Outlet } from "react-router-dom";
import styles from "./styles/Nav.module.css";
import home_img from './img/home.svg'
import plus_img from './img/plus-small.svg'
import { useState } from "react";

export default function Nav() {

    const [plusBtn, setPlusBtn] = useState(false);
    const [bankName, setBankName] = useState("");

    function enter(e) {
        e.preventDefault();
        
    }

    function plus(){
        setPlusBtn((prev) => !prev);
    }

    return(
        <>
            <nav className={styles.nav_box}>
                <div className={`${styles.menu_box_flex} ${styles.home_menu}`}>
                    <img src={home_img} alt="home_img" className={styles.home_img} />
                </div>

                <div className={`${styles.menu_box_flex} ${styles.total_menu}`}>
                    <p>Total</p>
                </div>
                
                <div className={`${styles.plus_btn} ${styles.menu_box_flex}`}>
                    <img src={plus_img} alt="plus_img" className={styles.plus_img} onClick={plus} />
                    <form style={{display: !plusBtn ? "none" : null}} onSubmit={enter}>
                    <input type="text" placeholder="은행/카드명" onChange={(e) => setBankName(e.target.value)}/>
                    </form>
                </div>

            </nav>
            <main className={styles.main_box}>
                <Outlet />
            </main>
        </>
    )
}