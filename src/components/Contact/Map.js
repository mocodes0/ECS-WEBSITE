import React from "react";
import Container from "../Container";

function Map() {
  return (
    <Container>
      <iframe
        title="toronto,ontario"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.5728977692!2d-79.5181418858082!3d43.71815566201939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1657877743494!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
        className="w-full h-52 md:h-96"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
}

export default Map;
