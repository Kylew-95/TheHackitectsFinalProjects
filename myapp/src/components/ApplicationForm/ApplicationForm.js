import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Form from "./Form";
import "./ApplicationForm.css";
import timelineImg from '../../Media/A:F.png';

export default function ApplicationForm() {
  return (
    <>
    <section className="application-form">
      <h1 className="application-form-title">Application Form</h1>
    </section>
    <section className="timeline-img">
    <img id ="TL_img" src={timelineImg} alt="timeline of application Jorney" border="0" />
    </section>
    <section>
      <Form />
    </section>

    </>
  );
}
