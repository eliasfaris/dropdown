{ <ReactSelect
  options={colourOptions}
  isMulti
  closeMenuOnSelect={false}
  hideSelectedOptions={false}
  components={{
    Option
  }}
  onChange={this.handleChange}
  allowSelectAll={true}
  value={this.state.optionSelected}
/> }