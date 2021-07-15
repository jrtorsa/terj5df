import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      invitees: [],
      name: "",
      lastName: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      invitees: [
        ...this.state.invitees,
        { name: this.state.name, lastName: this.state.lastName },
      ],
    });
    this.setState({
      name: "",
      lastName: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange.bind(this)}
                />
              </div>

              <div className="action">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Agregar Invitado
                </button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
                <tbody>
                {this.state.invitees.map((invitee, index) => (
                  <tr>
                    <td key={index}>{invitee.name}</td>
                    <td key={index}>{invitee.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
