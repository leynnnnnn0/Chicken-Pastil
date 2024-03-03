import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export const EmailForm = () => {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({
      firstName: "",
      lastName: "",
      streetName: "",
      barangay: "",
      municipality: "",
      city: "",
      province: "",
      zipCode: "",
      phone: "09",
      email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        })
    }

  const form = useRef();
  const notifySuccess = () =>
    toast.success("Sent successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("Something went wrong. Please try again.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const notifyIncomplete = () =>
      toast.error("Incomplete Details.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    

  const sendEmail = () => {
      const { firstName, lastName, streetName, municipality, barangay, city, province, zipCode, phone, email } = details;

      if ((firstName && lastName && streetName && municipality && barangay && zipCode) && (city || province) && (phone || email)) {
          setLoading(true);
          emailjs
            .sendForm("service_e4zegso", "template_raurqkg", form.current, {
              publicKey: "KYOClDW9mN_Gi-vzU",
            })
            .then(
              () => {
                    notifySuccess();
                    setDetails({
                      firstName: "",
                      lastName: "",
                      streetName: "",
                      barangay: "",
                      municipality: "",
                      city: "",
                      province: "",
                      zipCode: "",
                      phone: "09",
                      email: "",
                    });
                    setLoading(false);
              },
              (error) => {
                notifyError();
              }
            );
      } else {
          notifyIncomplete();
          console.log("incomplete");
      }
    
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="email-form flexCol BR10">
        <h3>Full Name</h3>
        <div className="full-name">
          <div className="input">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              value={details.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              value={details.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <h3>Address</h3>
        <div className="address">
          <div className="input">
            <label htmlFor="streetName" className="streetName">
              Street Name, Building, House No.
            </label>
            <input
              type="text"
              name="streetName"
              value={details.streetName}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="barangay">Barangay</label>
            <input
              type="text"
              name="barangay"
              value={details.barangay}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="municipality">Municipality</label>
            <input
              type="text"
              name="municipality"
              value={details.municipality}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              value={details.city}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="province">Province</label>
            <input
              type="text"
              name="province"
              value={details.province}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="zipCode">Zip code</label>
            <input
              type="text"
              name="zipCode"
              value={details.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <h3>Contact</h3>
        <div className="contact">
          <div className="input">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              value={details.phone}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={details.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="submit" onClick={() => sendEmail()}>
          {!loading ? (
            <Button variant="contained">Send</Button>
          ) : (
            <LoadingButton
              loading
              loadingIndicator="Loading…"
              variant="outlined"
            >
              Fetch data
            </LoadingButton>
          )}
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
