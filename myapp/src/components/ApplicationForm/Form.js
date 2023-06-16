// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import "./Form.css";

// export default function Form() {
//   return (
//     <div className="form-container">
//       <Box
//         component="form"
//         sx={{
//           "& .MuiTextField-root": { m: 1 },
//           // backgroundColor: "#00A3A3",
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div id="FormFields">
//           <div className="id">
//             <TextField
//               required
//               id="filled-required"
//               label="Dog ID"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//           <div className="name">
//             <TextField
//               className="name"
//               required
//               id="filled-required"
//               label="First Name"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//             <TextField
//               required
//               id="filled-required"
//               label="Last Name"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//           <div className="Address">
//             <TextField
//               required
//               id="filled-required"
//               label="House Number/Name"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//             <TextField
//               required
//               id="filled-required"
//               label="Street Name"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//           <div className="Town/City">
//             <TextField
//               required
//               id=""
//               label="Town/City"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//           <div className="Postcode">
//             <TextField
//               required
//               id="filled-required"
//               label="Postcode"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//           <div className="email-number">
//             <TextField
//               required
//               id="filled-required"
//               label="Email"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//           <div className="PhoneNumber">
//             <TextField
//               required
//               id="filled-required"
//               label="Phone Number"
//               defaultValue=""
//               variant="filled"
//               sx={{
//                 width: "15ch",
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//         </div>
//       </Box>
//       <button>Submit</button>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Form.css";
import AppFormImage from "../../Media/AppFormImage.jpg";
export default function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dogId: "",
    address: "",
    postCode: "",
    homeVideo: null,
    country: "",
    city: "",
  });
  console.log("formData", formData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({ ...prevData, homeVideo: file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container-w-image">
        <img
          src={AppFormImage}
          alt="happy dog and boy"
          className="appFormImage"
        />
        <h4 className="application-instruction">
          Please enter your details below
        </h4>

        <div className="form-container">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Dog ID:
            <input
              type="text"
              name="dogId"
              value={formData.dogId}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Postcode:
            <input
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your home (Video file input):
            <input
              type="file"
              name="homeVideo"
              accept="video/*"
              onChange={handleFileChange}
              required
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
