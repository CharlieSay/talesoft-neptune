import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";

type FormState = "UN_SUBMITTED" | "SUBMITTING" | "SUBMITTED";

export default function ContactUs() {
  const [submit] = useFormspark({
    formId: "BiS7kq4h",
  });
  const [formState, setFormState] = useState<FormState>("UN_SUBMITTED");
  const handleSubmit = async (event: any) => {
    setFormState("SUBMITTING");
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const submitedContent = {
      name: name,
      email: email,
      message: message,
    };
    await submit(submitedContent);
    setFormState("SUBMITTED");
  };
  return (
    <section className="grow max-w-lg my-auto">
      <h1 className="pt-8 w-50 block-highlight text-xl font-bold highlight uppercase p-4">
        Drop us an email
      </h1>
      {formState == "UN_SUBMITTED" && (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 grow">
          <div className="pb-4">
            <label
              className="block mb-2 text-sm font-bold text-black dark:text-gray-300"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required={true}
              className="w-full rounded-md placeholder:text-xs p-2 text-black"
            />
          </div>
          <div className="pb-4">
            <label
              className="block mb-2 text-sm font-bold text-black dark:text-gray-300"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required={true}
              className="w-full rounded-md placeholder:text-xs p-2 text-black"
            />
          </div>
          <div className="pb-4">
            <label
              className="block mb-2 text-sm font-bold text-black dark:text-gray-300"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full rounded-xs p-2 text-black"
              id="message"
              name="message"
              required={true}
            ></textarea>
          </div>
          <button
            type="submit"
            className="whitespace-nowrap text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-sm text-sm px-4 lg:px-5 py-2 lg:py-2.5 ml-4 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Submit
          </button>
        </form>
      )}
      {formState == "SUBMITTING" && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {formState == "SUBMITTED" && (
        <>
          <p>Thank you for getting in touch</p>
          <p>We will contact you soon</p>
          <p>🔥</p>
        </>
      )}
    </section>
  );
}
