import Link from "next/link";
import AccountButton from "../components/AccountButton";
import FormHeaders from "../components/FormHeaders";
import styles from '../CreateAccount/account.module.css'
import CancelButton from "../components/CancelButton";

export default function page() {
  return (
      <section className="bg-gray-700 h-screen flex items-center justify-center">
        <>

        <section className="w-[30%] h-[50vh] bg-white rounded-2xl py-3 px-5 relative">
          <CancelButton/>
            <FormHeaders title="Forgot Password" subtitle="Please enter your email address to receive a verification code"/>
            <ul className={styles.formUl}>
              <li className="grid grid-cols-1 gap-y-4">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </li>
            </ul>
            <AccountButton topic = "Send Email"/>
            <Link href='/Login'>
              <p className="text-blue-500 text-center mt-3">Back to login</p>
            </Link>
        </section>
    </>
    </section>
  )
}
