import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarLista}>
        <li className={styles.navbarItem}>Tienda</li>
        <li className={styles.navbarItem}>Contacto</li>
      </ul>
    </div>
  )
}

export default Navbar
