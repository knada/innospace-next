import styles from './Headings.module.css'

export const MainHeading: React.FC = ({ children }) => (
    <h1 className={styles.main}>{children}</h1>
)

export const SectionHeading: React.FC = ({ children }) => (
    <h2 className={styles.section}>{children}</h2>
)

export const SubHeading: React.FC = ({ children }) => (
    <h3 className={styles.subheading}>{children}</h3>
)
