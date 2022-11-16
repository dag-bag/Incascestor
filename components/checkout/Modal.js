/** @format */

import React, { useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { atom,  useRecoilState, useRecoilValue } from "recoil";
import AdInput from "../utils/AdInput";
import Flex from "../utils/Flex";
import Select from "../utils/Select";
import { useSession } from "next-auth/react";

import { EditAddressAtom, editAtom } from "../utils/AddressCard";
import { useFormik } from "formik";
import * as Yup from "yup";
export const modalAtom = atom({
  key: "modalAtom",
  default: false,
});
let stringRequied = Yup.string().required("Required");

const formValidationSchema = Yup.object().shape({
  // name: Yup.string()
  //   .min(2, "Too Short!")

  //   .max(50, "Too Long!")
  //   .required("Required"),
  address1: stringRequied,
  address2: stringRequied,
  city: stringRequied,
  state: stringRequied,
  zipcode: Yup.number().required("Required").min(4, "Too Short!"),

  country: stringRequied,
  lastName: stringRequied,
  firstName: stringRequied,
  phone: Yup.number().required("Required").min(9, "Too Short!"),

  email: Yup.string().email("Invalid email").required("Required"),
});

function Modal({
  mutate,
  ad,
  address1,
  address2,
  city,
  state,
  zipcode,
  country,
  lastName,
  firstName,
  phone,
  email,
}) {
  const EditProduct = useRecoilValue(EditAddressAtom);
  console.log(EditProduct);
  const [edit, setEdit] = useRecoilState(editAtom);
  console.log("edit:", edit);

  const [showModal, setShowModal] = useRecoilState(modalAtom);
  const as = async () => {
    const resp = await fetch(
      "https://www.universal-tutorial.com/api/countries/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ0ZXN0aGlzaXNjb29sdEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ4LTdYM1ZadXlRV1JHbkxGWnd4ZVJnX1ZyZERvV2tmYnNBN2dGeWhYTmFfbDMzOXRwSUN6SkFMZzBLcEJxY2J6VFBJIn0sImV4cCI6MTY2NDg5Mzc2Nn0.wkTuIzDVyRnS3hbSAqFOP3HZeP86QPjeiKXbix7bMw8",
          Accept: "application/json",
        },
      }
    );
    const data = await resp.json();

    return data;
  };
  // const { data, error } = useSWR(
  //   "https://www.universal-tutorial.com/api/countries/",
  //   as
  // );

  const { data: session } = useSession();

  const [address, setAddress] = React.useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
  });
  let createAddress = async () => {
    const resp = await fetch("/api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, userEmail: session?.user?.email }),
    });
    mutate([...ad, values]);
    const data = await resp.json();
    console.log(data);
  };
  const onSubmit = (values, actions) => {
    actions.setSubmitting(true);
    actions.resetForm();
    console.log("I'm working Bro ");
    createAddress();
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    validateOnBlur,
    values,
  } = useFormik({
    initialValues: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: onSubmit,
  });

  const ref = useRef();
  // const handleChange = (e) => {
  //   setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  return (
    <>
      <div className="modal !mt-0" id="my-modal-2">
        <div className="modal-box w-3/4 max-w-4xl bg-white">
          <div className="relative w-auto my-6 mx-auto ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font-semibold">Add address</h3>
                <a
                  href="#"
                  className="bg-transparent border-0 text-black float-right"
                >
                  <IoCloseCircleOutline className="text-3xl hover:text-red-500" />
                </a>
              </div>
              <div className="relative p-6 flex-auto z-50 ">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 shadow-md rounded px-8 pt-6 pb-8 w-full md:flex flex-col items-start space-y-2"
                >
                  <Flex>
                    <AdInput
                      name={"firstName"}
                      placeholder="First Name"
                      required={true}
                      onChange={handleChange}
                      value={values.firstName}
                    />
                    <AdInput
                      name={"lastName"}
                      placeholder="Last Name"
                      required={true}
                      onChange={handleChange}
                      value={values.lastName}
                    />
                  </Flex>
                  <Select
                    onchange={handleChange}
                    name={"country"}
                    placeholder="Country"
                    value={values.country}
                    options={[
                      "India",
                      "China",
                      "Germany",
                      "Siberia",
                      "Indonesia",
                      "South America",
                    ]}
                  />
                  <Flex>
                    <AdInput
                      name={"address1"}
                      placeholder="Address 1"
                      required={true}
                      onChange={handleChange}
                      value={values.address1}
                    />
                    <AdInput
                      name={"address2"}
                      placeholder="Address 2 LandMark Street and etc. (Optional)"
                      required={true}
                      onChange={handleChange}
                      value={values.address2}
                    />
                  </Flex>
                  <Flex>
                    <AdInput
                      name={"city"}
                      placeholder="City"
                      onChange={handleChange}
                      value={values.city}
                      required={true}
                    />
                    <Select
                      options={["Delhi", "Mumbai", "Goa"]}
                      name={"state"}
                      placeholder="State"
                      value={values.state}
                      onchange={handleChange}
                      disabled={values.country === "Select Country"}
                    />
                  </Flex>
                  <AdInput
                    name={"zipcode"}
                    placeholder="Zipcode"
                    type={"number"}
                    required={true}
                    onChange={handleChange}
                    value={values.zipcode}
                  />
                  <AdInput
                    name={"phone"}
                    placeholder="Phone"
                    type={"number"}
                    required={true}
                    onChange={handleChange}
                    value={values.phone}
                  />
                  <p className="max-w-2xl text-xs">
                    Note: Your phone number is required to contact you about
                    shipping-related questions. Please read our Privacy Policy
                    for more information.
                  </p>
                  <AdInput
                    name={"email"}
                    placeholder="Email for the Order Notifications"
                    type={"email"}
                    required={true}
                    onChange={handleChange}
                    value={values.email}
                  />
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-white bg-primary-1 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                    >
                      Submit
                      <a href="#"></a>
                    </button>
                    <a
                      ref={ref}
                      href="#"
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => {
                        setEdit(false);
                        setShowModal(false);
                      }}
                    >
                      Close
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-action"></div>
        </div>
      </div>
    </>
  );
}

export default Modal;
