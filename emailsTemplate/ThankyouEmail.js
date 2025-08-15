import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr
} from "@react-email/components";

export default function ThankYouEmail({ name }) {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(
      Body,
      { style: { fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" } },
      React.createElement(
        Container,
        {
          style: {
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px"
          }
        },
        // Header Section
        React.createElement(
          Section,
          { style: { textAlign: "center", paddingBottom: "20px" } },
          React.createElement(
            Text,
            { style: { fontSize: "24px", fontWeight: "bold", color: "#333" } },
            `Thank You, ${name || "Friend"}!`
          )
        ),
        React.createElement(Hr, { style: { borderColor: "#e0e0e0" } }),
        // Message Section
        React.createElement(
          Section,
          { style: { padding: "20px 0" } },
          React.createElement(
            Text,
            { style: { fontSize: "16px", color: "#555" } },
            "We truly appreciate you taking the time to fill out the form on our website ",
            React.createElement("strong", null, "VishalCodes"),
            "."
          ),
          React.createElement(
            Text,
            { style: { fontSize: "16px", color: "#555", marginTop: "10px" } },
            "Your input means a lot to us and helps us improve our services."
          )
        ),
        React.createElement(Hr, { style: { borderColor: "#e0e0e0" } }),
        // Footer / Founder Intro
        React.createElement(
          Section,
          { style: { textAlign: "center", paddingTop: "20px" } },
          React.createElement(
            Text,
            { style: { fontSize: "14px", color: "#777" } },
            "I am ",
            React.createElement("strong", null, "Vishal"),
            ", founder of ",
            React.createElement("strong", null, "VishalCodes"),
            "."
          ),
          React.createElement(
            Text,
            { style: { fontSize: "14px", color: "#777", marginTop: "5px" } },
            "Looking forward to connecting with you!"
          )
        )
      )
    )
  );
}
