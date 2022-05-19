import React, { Component } from 'react';
import '../static/style.css';

  var show = true;
    
  function showCheckboxes() {
    
    var checkboxes = 
        document.getElementById("checkBoxes");

    if (show) {
        checkboxes.style.display = "block";
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
        console.log("CLICKED");
    }
}

class DropDown1  extends Component {
    constructor(props) {
        super(props);
        this.state = {
          optionSelected: null
        };
      }
    
      handleChange = (selected) => {
        this.setState({
          optionSelected: selected
        });
      };

    render() { 
        return (
          <div>
            <h4 style = {{paddingLeft :"3%"}}>
              Left drop down menu: Allows users to select multiple<br></br>
              Right drop down menu: Allows users to only select one</h4>
            <div class = "DropDown1" style = {{width: "300px", paddingLeft: "25%", paddingTop: "4%"}}>
              <span
            class="d-inline-block"
            data-toggle="popover"
            data-trigger="focus"
            data-placeholder='Tags'
          >

        <div class="multipleSelection">
            <div class="selectBox" 
                onClick= {showCheckboxes}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                onChange={this.handleChange}
                allowSelectAll={true}
                value={this.state.optionSelected}>

                <select style = {{color: "gray"}}>
                    <option label = "Tags..."></option>
                </select>
                <div class="overSelect"></div>
            </div>
  
            <div id="checkBoxes">
                <label for="first">
                    <input type="checkbox" id="first" />
                    Mike Jones
                </label>
                  
                <label for="second">
                    <input type="checkbox" id="second" />
                    Janette Lee
                </label>
                <label for="third">
                    <input type="checkbox" id="third" />
                    Moe Klamber
                </label>
                <label for="fourth">
                    <input type="checkbox" id="fourth" />
                    Peter Jack
                </label>
                <label for="fifth">
                    <input type="checkbox" id="fifth" />
                    Eli Jenkins
                </label>
            </div>
        </div>
            </span>
            </div>

            <br></br>
            <div class = "DropDown2" style = {{width: "200px", paddingLeft: "50%"}}>
              <span>
                <select label = "Age....">                   
                  <option>None</option>
                  <option>Twenty</option>
                  <option>Twnety two</option>
                  <option>Twnety three</option>
                </select>
            </span>
            </div>

          </div>


        );
    }

    

    
}
 
export default DropDown1;