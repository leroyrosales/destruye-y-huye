import React from "react";

export default function ContactForm() {
  return (
    <form class="w-full max-w-lg" name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="survey-form" value="contact" />
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
            First Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-password">
            E-mail
          </label>
          <input class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="jane.doe@email.com"/>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-password">
            Message
          </label>
          <textarea class=" no-resize appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button class="shadow bg-green hover:bg-blue focus:shadow-outline text-white font-bold py-2 px-4 rounded" type="button">
            Send
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  );
}
