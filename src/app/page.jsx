import Link from 'next/link'
import styles from './styles/home.module.css'

export default function Home() {
  return (
    <main>
      <ul className={styles.homeUl}>

        <Link href='/HomePage'>
        <li>Home</li>
        </Link>
        <Link href='/CreateAccount'>
        <li>create account</li>
        </Link>

        <Link href='/ForgotPassword'>
        <li>forgot password</li>
        </Link>

        <Link href='/ResetPassword'>
        <li>reset password</li>
        </Link>

        <Link href='/SuccessAccountCreated'>
        <li>account Success</li>
        </Link>

        <Link href='/SuccessPasswordReset'>
        <li>password  success</li>
        </Link>

        <Link href='/Verification'>
        <li>verification</li>
        </Link>

        <Link href='/Deposit'>
        <li>deposit</li>
        </Link>

        <Link href='/Register'>
        <li>sign up</li>
        </Link>

        <Link href='/Register'>
        <li>log in</li>
        </Link>
      </ul>
    </main>
  )
}
