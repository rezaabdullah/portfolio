// "use server";
import { ZodError, z } from "zod";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.SERVICE_ID as string;
const TEMPLATE_ID = process.env.TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.PUBLIC_KEY as string;

const sendMsg = async (prevState: any, formData: FormData) => {
  // DEBUG: check initial or previous state
  // console.log("previous recorded state ", prevState);

  // console.log("inside sendMsg:", serviceId, TEMPLATE_ID, PUBLIC_KEY);
  // form schema for sending message
  const formFields = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    subj: z.string().min(2, { message: "Must be 2 or more characters" }),
    msg: z.string().min(10, { message: "Must be 10 or more characters" }),
  });

  const formMsg = formFields.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subj: formData.get("subj"),
    msg: formData.get("msg"),
  });

  if (!formMsg.success) {
    console.log(formMsg.error.flatten());
    return formMsg.error.flatten() as any;
  } else {
    try {
      await emailjs.send("service_d2mxoq9", "template_ekcz574", formMsg.data, "1P7kyDeF52Vqwlr9b");
      alert("Email sent to Abdullah Reza successfully");
      return { message: "OK" };
    } catch (error) {
      alert("Failed to send the email");
      return { message: "error" };
    }
  }
};

export default sendMsg;
