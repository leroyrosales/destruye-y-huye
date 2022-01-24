import React from "react";

export default function ContactForm() {
  return (
    <form name="survey" action="/success" method="POST" data-netlify="true">
      <input type="hidden" value="survey" />
      <div>
        <label htmlFor="name">Your Name:</label> <br />
        <input className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"  type="text" name="firstname" id="firstname" placeholder="Jane" />
        <input className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"  type="text" name="name" id="name" placeholder="Doe" />
      </div>
      <div>
        <label htmlFor="email">Your Email:</label> <br />
        <input className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500"  type="email" name="email" id="email" placeholder="jane.doe@email.com"/>
      </div>
      <div>
        <label htmlFor="message">Message:</label> <br />
        <textarea className=" no-resize appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500 h-48 resize-none" name="message" id="message"></textarea>
      </div>
      <div>
        <button className="shadow bg-green hover:bg-blue focus:shadow-outline text-white font-bold py-2 px-4 rounded"  type="submit">Send</button>
      </div>
    </form>
  );
}
