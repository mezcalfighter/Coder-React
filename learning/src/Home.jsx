import styles from  "./Home.module.css"

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h2 className={styles.title}> Este es el titulo del Home</h2>
        </div>
    )
}