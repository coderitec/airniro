import Link from "next/link";
import AccountButton from "../components/AccountButton";
import FormHeaders from "../components/FormHeaders";
import styles from '../CreateAccount/account.module.css'

export default function page() {
  return (
      <section className="bg-gray-700 h-screen flex items-center justify-center">
        <>

        <section className="w-[30%] h-[70vh] bg-white rounded-2xl py-3 px-5">
            <FormHeaders title="Reset Password" subtitle="Your new password must be different from your previously used password"/>
            <ul className={styles.formUl}>
              <li className="grid grid-cols-1 gap-y-4">
                <label htmlFor="pwd1">Enter New Password</label>
                <input type="password" name="pwd1" id="pwd1" />
              </li>
              <li className="grid grid-cols-1 gap-y-4">
                <label htmlFor="pwd2">Confirm New Password</label>
                <input type="password" name="pwd2" id="pwd2" />
              </li>
            </ul>
            <AccountButton topic = "Reset Password"/>
            <Link href='/Login'>
              <p className="text-blue-500 text-center mt-3">Back to login</p>
            </Link>
        </section>
    </>
    </section>
  )
}
