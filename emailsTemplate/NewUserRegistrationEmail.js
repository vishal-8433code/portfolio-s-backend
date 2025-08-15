import * as React from "react";
import { Html, Head, Body, Container, Heading, Text } from "@react-email/components";

export default function NewUserRegistrationEmail({ username, email, phone }) {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(
      Body,
      { style: { fontFamily: "Arial, sans-serif", backgroundColor: "#f6f9fc", padding: "20px" } },
      React.createElement(
        Container,
        { style: { backgroundColor: "#fff", padding: "20px", borderRadius: "8px" } },
        React.createElement(Heading, { style: { fontSize: "20px", color: "#333" } }, "📢 New User Registration"),
        React.createElement(Text, null, `👤 Username: ${username}`),
        React.createElement(Text, null, `📧 Email: ${email}`),
        React.createElement(Text, null, `📱 Phone: ${phone}`)
      )
    )
  );
}
