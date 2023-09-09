import Link from "next/link";
import AccountButton from "../components/AccountButton";
import CheckMark from "../components/CheckMark";
import FormHeaders from "../components/FormHeaders";

export default function page() {
    const subtitle = 'Book your stay at Davilla Hotel in Nigeria, located near the airport in Ikeja our hostel features an outdoor. Book your stay at Davilla Hotel'
  return (
      <section className="bg-gray-700 h-screen flex items-center justify-center">
        <section className="bg-white m-auto w-[30%] py-[5em] relative rounded-xl gap-x-[30px">
        <CheckMark />
        <section className=" rounded-2xl py-3 px-5">
            <FormHeaders title="Account Created Successfully" subtitle={subtitle}/>
            
            <AccountButton topic = "Fund Wallet"/>
            <Link href='/'>
            <p className="text-blue-500 text-center mt-3">Skip for now</p>
            </Link>
        </section>
    </section>
    </section>
  )
}
