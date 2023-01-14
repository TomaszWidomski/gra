import React from "react";

function Feedback() {
  return (
    <>
      <fieldset>
        <legend>What do you think about this game?</legend>
        <input type="checkbox" id="not-good" name="feedback" />
        <label for="not-good">It's not good.</label>
        <input type="checkbox" id="good" name="feedback" />
        <label for="good">It's not so bad.</label>
        <input type="checkbox" id="great" name="feedback" />
        <label for="great">It's pretty good.</label>
      </fieldset>
    </>
  );
}

export default Feedback;
