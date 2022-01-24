import React from "react";

export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">Your Name:</label> <br />
        <input type="text" name="name" id="yourname" />
      </div>
      <div>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input type="email" name="email" id="youremail" />
      </div>
      <div>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
