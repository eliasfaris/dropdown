import React, { Component } from 'react';
import { components } from "react-select";
import { default as ReactSelect } from "react-select";


const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            placeholder = "Tags"
            checked={props.isSelected}
            onChange={() => null}
          />
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  export const Tags = [
    { value: "name1", label: "Alex Jones" },
    { value: "name2", label: "Michael Paterson" },
    { value: "name3", label: "Frank Ocean" },
    { value: "name4", label: "Jim Orlean" },
    { value: "name5", label: "Moe Jackson" },
    { value: "name6", label: "Ali Yahma" },
    { value: "name7", label: "Richard Haymaker" }
  ];
  export const Age = [
    {value: "age1", label : "None"},
    {value: "age2", label : "twenty"},
    {value: "age3", label : "twenty one"},
    {value: "age4", label : "twenty two"},

  ]

class DropDown  extends Component {
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
            data-content="Please selecet account(s)"
          >
            <ReactSelect
              options={Tags}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option
              }}
              onChange={this.handleChange}
              allowSelectAll={true}
              value={this.state.optionSelected}
            />
            </span>
            </div>

            <br></br>
            <div class = "DropDown2" style = {{width: "200px", paddingLeft: "50%"}}>
              <span>
            <ReactSelect
              options={Age}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              allowSelectAll={true}
            />
            </span>
            </div>

          </div>


        );
    }

    
}
 
export default DropDown;