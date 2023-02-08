import styles from "../styles/Home.module.css"

export default function Home() {
    return(
        <div className={styles.home_container}>
            <h1>Home</h1>
            <div className="line_graph_box"></div>
            <div className="pie_graph_box"></div>
            <div className="calender"></div>
        </div>
    );
}