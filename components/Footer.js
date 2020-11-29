import styles from './Footer.module.css'

export default function Footer() {
  const today = new Date()
  const igLink = (
    <a
      target='_blank'
      href='https://www.instagram.com/threefoldthree/'
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <b>Threefold three</b>
    </a>
  )
  return (
    <>
      <footer className={styles.footer}>
        {today.getUTCFullYear()} 🛆&nbsp; {igLink}
      </footer>
    </>
  )
}
