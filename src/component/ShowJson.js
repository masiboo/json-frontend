import React, { Component } from "react";

export class ShowJson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouseState: "Loading...",
    };
  }

  async getAllProfiles() {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/revisions/allWarehouse`
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  async componentDidMount() {
    try {
      let warehouse = await this.getAllProfiles();
      this.setState({ warehouseState: warehouse });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(JSON.stringify(this.state.warehouseState, null, 2));
    /*
    this.state.warehouseState.forEach((place) => {
      const { _id, name, location, cars } = place;
      console.log("ID", _id);
      console.log("name", name);
      console.log("location", location);

      cars.vehicles.forEach((vehicle) => {
        // nested loop
        const { _id, make, model } = vehicle; // some destructring
        console.log("ID", _id);
        console.log("make", make);
        console.log("model", model);
      });
    });
*/
    return (
      <div>
        <h2>Show Json here</h2>
      </div>
    );
  }
}

export default ShowJson;
