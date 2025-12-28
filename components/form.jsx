import React from "react";
export default function Form(){
    function signup(formData){
      const data = Object.fromEntries(formData)
      const hobbies = formData.getAll("hobbies")
      const alldata = { ...data , hobbies }
      console.log(alldata)
    }
    return(
        <form action={signup}>
            <h3>Sign Up</h3>
            <label>Email:
                <input type="email" placeholder="email" name="email"/>
            </label>
            <label>Password:
                <input type="password" placeholder="password" name="password"/>
            </label>
            <fieldset>
                <legend>Gender</legend>
                <label>Male
                    <input type="radio" name="gender" value="male"/>
                </label>
                  <label>Female
                    <input type="radio" name="gender" value="female"/>
                </label>
            </fieldset>
           <label>Fav color:
                <select name="color">
                    <option value="" disabled>--choose a color--</option>
                    <option name="red" value="red">red</option>
                    <option name="green" value="green">green</option>
                    <option name="blue" value="blue">blue</option>
                </select>
           </label>
           <label>Hobbies:
                <input type="checkbox" name="hobbies" value="reading"/>Reading
                <input type="checkbox" name="hobbies" value="traveling"/>Traveling
                <input type="checkbox" name="hobbies" value="cooking"/>Cooking   
           </label>
           <button>Submit</button>
        </form>
    )
}