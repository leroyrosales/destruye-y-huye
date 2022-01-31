import React from "react";

export default function ContactForm() {
  return (
    <form name="survey" action="/success" method="POST" data-netlify="true">
      <input type="hidden" value="survey" />
      <div>
        <label htmlFor="name">Your Name:</label> <br />
        <input  type="text" name="firstname" id="firstname" placeholder="Jane" />
        <input  type="text" name="name" id="name" placeholder="Doe" />
      </div>
      <div>
        <label htmlFor="email">Your Email:</label> <br />
        <input  type="email" name="email" id="email" placeholder="jane.doe@email.com"/>
      </div>
      <div>
        <label htmlFor="message">Message:</label> <br />
        <textarea name="message" id="message"></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
