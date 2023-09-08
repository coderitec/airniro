import AccountButton from "../components/AccountButton";
import CancelButton from "../components/CancelButton";
import FormHeaders from "../components/FormHeaders";
import Form from "./Form";

export default function page() {
  return (
      <section className="bg-gray-700 h-screen flex items-center justify-center">
        <>
        <CancelButton />
        <section className="w-[30%] h-[80vh] bg-white rounded-2xl py-3 px-5">
            <FormHeaders title="Personal Details" subtitle="Please enter your personal details to continue"/>
            <Form />
            <AccountButton topic = "Create Account"/>
        </section>
    </>
    </section>
  )
}
