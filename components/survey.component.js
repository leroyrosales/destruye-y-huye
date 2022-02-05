import React from "react";

export default function Survey() {
  return (
    <form name="survey" action="success" method="POST" data-netlify="true">
      <input type="hidden" value="survey" />
      <label htmlFor="name">Full Name:</label>
      <div className="grid gap-4 grid-cols-2">
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First name"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="jane.doe@email.com"
        />
      </div>
      <div>
        <label htmlFor="gender">What is your gender identity?</label>
        <select name="gender" id="gender">
          <option value="" selected disabled>
            - Select -
          </option>
          <option value="male">Male</option>
          <option value="Female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="age">Which category below includes your age?</label>{" "}
        <select name="age" id="age">
          <option value="" selected disabled>
            - Select -
          </option>
          <option value="17 or younger">17 or younger</option>
          <option value="18-20">18-20</option>
          <option value="21-29">21-29</option>
          <option value="30-39">30-39</option>
          <option value="40-49">40-49</option>
          <option value="50-59">50-59</option>
          <option value="60 or older">60 or older</option>
        </select>
      </div>
      <div>
        <label htmlFor="spanish-ethnicity">
          Are you Mexican, Mexican-American, Chicano, Puerto Rican, Cuban,
          Cuban-American, or some other Spanish, Hispanic, or Latino group?
        </label>{" "}
        <select name="spanish-ethnicity" id="spanish-ethnicity">
          <option value="" selected disabled>
            - Select -
          </option>
          <option value="none">I am not Spanish, Hispanic, or Latino</option>
          <option value="mexican">Mexican</option>
          <option value="mexican-american">Mexican-American</option>
          <option value="chicano">Chicano</option>
          <option value="puerto-rican">Puerto Rican</option>
          <option value="cuban">Cuban</option>
          <option value="cuban-american">Cuban-American</option>
          <option value="other-spanish">
            Some other Spanish, Hispanic, or Latino group
          </option>
          <option value="multiple-spanish">
            From multiple Spanish, Hispanic, or Latino groups
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="ethnicity">
          Are you Arab, Asian, Black / African-American / African Diaspora,
          Majority Ethnic / Multi-Ethnic, American Indian / Alaskan Native /
          Indigenous / First Nations, Other, Native Hawaiian / Pacific islander,
          White, other race?
        </label>{" "}
        <select name="ethnicity" id="ethnicity">
          <option value="" selected disabled>
            - Select -
          </option>
          <option value="arab">Arab</option>
          <option value="asian-asian-american">Asian or Asian-American</option>
          <option value="black-african">
            Black or African-American or African Diaspora
          </option>
          <option value="multi-ethnic">Majority Ethnic or Multi-Ethnic</option>
          <option value="indian-alaskan">
            American Indian or Alaskan Native
          </option>
          <option value="hawaiian-islander">
            Native Hawaiian or other Pacific Islander
          </option>
          <option value="multiple-races">From multiple races</option>
          <option value="other-race">Some other race</option>
          <option value="white">White</option>
        </select>
      </div>
      <div>
        <label htmlFor="visited">
          Have you visited locations of the East: Sun-Rise AR Intervention?
        </label>{" "}
        <select name="visited" id="visited">
          <option value="" selected disabled>
            - Select -
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="experience">
          If yes, how was your experience? Could you describe it on your own
          words?:
        </label>{" "}
        <textarea rows="3" name="experience" id="experience"></textarea>
      </div>
      <div>
        <label htmlFor="no-visit">
          If no, have you had already make plans to visit any of the locations
          and which one(s)?
        </label>{" "}
        <textarea rows="3" name="no-visit" id="no-visit"></textarea>
      </div>
      <div>
        <label htmlFor="interventions">
          After experienced the East: Sun-Rise AR Intervention, what additional
          potential interventions might we send back in time to revive the
          futures of East Austin neighborhoods?
        </label>{" "}
        <textarea rows="3" name="interventions" id="interventions"></textarea>
      </div>
      <div>
        <label htmlFor="anything-else">
          Is there anything else you would like us to know?
        </label>{" "}
        <input type="text" name="anything-else" id="anything-else" />
      </div>
      <div>
        <label htmlFor="referral">
          How did you hear about the East: Sun-Rise ARI?
        </label>{" "}
        <input type="text" name="referral" id="referral" />
      </div>
      <div>
        <label htmlFor="improvements">
          Is there anything we could have done to make your event experience
          easier or more convenient?
        </label>{" "}
        <textarea rows="3" name="improvements" id="improvements"></textarea>
      </div>
      <div>
        <label htmlFor="recommendation">
          Would you like to you recommend this project to a family or a friend?
        </label>{" "}
        <select name="recommendation" id="recommendation">
          <option value="" selected disabled>
            - Select -
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <button type="submit">Submit Answers</button>
      </div>
    </form>
  );
}
