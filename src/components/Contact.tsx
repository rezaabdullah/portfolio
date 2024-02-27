"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Section from "./ui/Section";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import SubmitButton from "./ui/SubmitButton";
import sendMsg from "@/lib/_action";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

const Contact = () => {
  const [state, formAction] = useFormState(sendMsg, {
    message: "",
    errors: undefined,
    fieldValues: {
      name: "",
      email: "",
      subj: "",
      msg: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state.message === "OK") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div id="contact">
      <Section>
        <h2 className="tracking-wide text-2xl md:text-3xl lg:text-4xl underline underline-offset-4 decoration-sky-600 font-semibold">
          Contact Me
        </h2>
        <h3 className="text-xl font-medium pt-3 md:text-2xl md:pt-4 tracking-wide">
          Let&apos;s discuss next big idea
        </h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col p-4 bg-slate-200 rounded-lg shadow-xl">
            <Image
              src="/profile_picture.jpg"
              alt="contact abdullah reza"
              width={128}
              height={128}
              className="rounded-lg object-cover"
            />
            <div className="flex-grow flex flex-col">
              <h4 className="text-lg font-bold pt-4">Abdullah Reza</h4>
              <h5 className="text-base">
                Product Management
                <br />
                Digital Transformation
                <br />
                Strategy & Consulting
              </h5>
              <div className="flex-grow flex flex-col justify-end">
                <div className="pt-8 flex gap-4 items-center xl:gap-8">
                  <Link href={"https://www.linkedin.com/in/airreza"}>
                    <FaLinkedin className="text-3xl xs:text-4xl xl:text-6xl text-slate-700 hover:text-sky-600 hover:ease-in-out duration-300" />
                  </Link>
                  <Link href={"https://github.com/rezaabdullah"}>
                    <FaGithubSquare className="text-3xl xs:text-4xl xl:text-6xl text-slate-700 hover:text-sky-600 hover:ease-in-out duration-300" />
                  </Link>
                  <Link href={"https://medium.com/@abdullahreza"}>
                    <FaMedium className="text-3xl xs:text-4xl xl:text-6xl text-slate-700 hover:text-sky-600 hover:ease-in-out duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-200 rounded-lg shadow-xl md:col-span-2">
            <form action={formAction} ref={formRef}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                  {/* name */}
                  <div className="flex-grow flex flex-col gap-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Please enter name"
                      className="peer block w-full rounded-md border border-slate-100 py-2 pl-4 text-sm outline-2 placeholder:text-slate-500"
                    />
                    {state?.fieldErrors?.name ? (
                      <p className="text-rose-700">
                        {state.fieldErrors["name"]}
                      </p>
                    ) : null}
                  </div>
                  {/* email */}
                  <div className="flex-grow flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Please enter email"
                      className="peer block w-full rounded-md border border-gray-100 py-2 pl-4 text-sm outline-2 outline-slate-700 placeholder:text-slate-500"
                    />
                    {state?.fieldErrors?.email ? (
                      <p className="text-rose-700">
                        {state.fieldErrors["email"]}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="flex-grow flex flex-col gap-2">
                  <label htmlFor="subj" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subj"
                    name="subj"
                    type="text"
                    required
                    placeholder="Please enter subject"
                    className="peer block w-full rounded-md border border-slate-100 py-2 pl-4 text-sm outline-2 outline-slate-700 placeholder:text-slate-500"
                  />
                  {state?.fieldErrors?.subj ? (
                    <p className="text-rose-700">{state.fieldErrors["subj"]}</p>
                  ) : null}
                </div>
                <div className="flex-grow flex flex-col gap-2 pb-4">
                  <label htmlFor="msg" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    required
                    rows={5}
                    placeholder="Please enter your message"
                    className="peer block w-full rounded-md border border-slate-100 py-2 pl-4 text-sm outline-2 outline-slate-700 placeholder:text-slate-500"
                  />
                  {state?.fieldErrors?.msg ? (
                    <p className="text-rose-700">{state.fieldErrors["msg"]}</p>
                  ) : null}
                </div>
                {/* {state.message === "OK" && (
                  <p className="text-green-700 pb-4">Email sent successfully</p>
                )} */}
              </div>
              <SubmitButton label="send email" />
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
