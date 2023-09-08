import React from 'react'
import styles from './account.module.css'

export default function Form() {
  return (
    <form>
        <ul className={styles.formUl}>
            <li>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" />
            </li>
            <li>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </li>
            <li>
                <label htmlFor="pwd">Create Password</label>
                <input type="password" name="pwd" id="pwd" /><br />
                <span className='text-[10px]'>Maximum of 8 characters, one uppercase and one special character</span>
            </li>
            <li>
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" />
            </li>
        </ul>
    </form>
  )
}
