import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const CustomForm = ({ info, setInfo, handleFormSubmit }) => {
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleOptionChange = (e) => {
    setInfo({ ...info, gender: e.target.textContent });
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <div className="ui piled segments">
          <div
            className="ui segment"
            style={{
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            <a
              href="https://github.com/edwardBenedict"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "2rem",
              }}
            >
              <code style={{ fontWeight: "bold", fontStyle: "italic" }}>
                {"<ed8en/> "}
              </code>
            </a>
            <span>design</span>
          </div>
        </div>
        <Header as="h2" textAlign="center">
          Add Contact
        </Header>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Name"
              value={info.username}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              name="phoneNumber"
              icon="phone"
              iconPosition="left"
              placeholder="Phone Number"
              type="text"
              value={info.phoneNumber}
              onChange={handleInputChange}
            />
            <Form.Dropdown
              options={options}
              onChange={handleOptionChange}
              placeholder="Gender"
              fluid
              selection
              value={info.gender.toLowerCase()}
            />
            <Button color="teal" fluid size="large">
              Add
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default CustomForm;
