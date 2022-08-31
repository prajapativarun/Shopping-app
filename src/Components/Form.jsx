import React from "react";

const Form = () => {
  console.log("Form - Rendered");
  return (
    <form
      style={{
        border: "thick black 1px",
        padding: "45px 75px 45px 75px",
        margin: "50px 20px 180px 630px",
        backgroundColor: "darkgrey",
        borderRadius: "7px",
        backgroundImage: "linear-gradient(red, yellow)",
        display: "flex",
        float: "left",
      }}
    >
      <div class="row">
        <div class="orm-group col-md-6">
          <label for="form-group col-md-6"></label>
          <input type="text" class="form-control" placeholder="Full Name" />
        </div>
        {/* <div class="orm-group col-md-6">
    <label for="form-group col-md-6"></label>
      <input type="text" class="form-control" placeholder="Last name"/>
    </div> */}
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4"></label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4"></label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group col-md-6 p-30">
          <label for="inputAddress"></label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Address"
          />
        </div>

        <div class="form-row">
          {/* <div class="form-group col-md-6">
      <label for="inputCity"></label>
      <input type="text" class="form-control" placeholder='City' id="inputCity"/>
    </div> */}
          <div class="form-group col-md-4">
            <label for="inputState"></label>
            <select id="inputState" class="form-control">
              <option selected>Select</option>
              <option>Ahmedabad</option>
              <option>Gandhinagar</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip"></label>
            <input
              type="text"
              class="form-control"
              id="inputZip"
              placeholder="00000"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            {/* <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label> */}
          </div>
        </div>
        <button type="submit" class="btn btn-primary ">
          Sign in
        </button>
      </div>
    </form>
  );
};
export default Form;
