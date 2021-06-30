import { Component, ChangeEvent } from "react";
import { Container, Form, Button } from "react-bootstrap";
import MusicComponent from "./MusicComponent";

export interface FormComponentProps {}

export interface FormComponentState {
  query: string;
  musics: string[];
}

class FormComponent extends Component<FormComponentProps, FormComponentState> {
  state = {
    query: "",
    musics: [],
  };
  searchHandler = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.query}`
      );
      if (response.ok) {
        let data = await response.json();
        let musics = data.data;
        this.setState({ musics });
      }
    } catch (error) {
      console.log(error);
    }
  };

  queryHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Search your Music"
                onChange={this.queryHandler}
              />
              {/* <Form.Label>Search</Form.Label> */}
              {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
            </Form.Group>
            <Button variant="primary" onClick={this.searchHandler}>
              Search
            </Button>
          </Form>
        </Container>
        <Container>
          {this.state.musics.length > 0 && (
            <MusicComponent musics={this.state.musics} />
          )}
        </Container>
      </>
    );
  }
}

export default FormComponent;
