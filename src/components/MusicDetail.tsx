import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Music } from "../types/interfaces";
import { Container, Row, Col } from "react-bootstrap";

interface RouteInfo {
  id: string;
}

interface MusicDetailProps extends RouteComponentProps<RouteInfo> {}

export interface MusicDetailState {
  music: Music | null;
}

class MusicDetail extends Component<MusicDetailProps, MusicDetailState> {
    state:MusicDetailState = {
      music: null,
    };
  
  componentDidMount() {
    console.log(this.props.match.params);
    const getMusic = async () => {
      try {
        let id: string = this.props.match.params.id;
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
        );
        if (response.ok) {
          let music = await response.json();
          console.log(music);
          this.setState({ music });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMusic();
  }
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <b>Picture</b>
          </Col>
          <Col>
            <b>Artist</b>
          </Col>
          <Col>
            <b>Title</b>
          </Col>
        </Row>
        {this.state.music ? (
          <Row className="mb-3 mt-3">
            <Col>
              <img
                src={this.state.music.artist.picture}
                alt={this.state.music.artist.name}
              />
            </Col>
            <Col>
              <p>{this.state.music.artist.name}</p>
            </Col>
            <Col>
              <p>{this.state.music.title_short}</p>
            </Col>
          </Row>
        ) : (
          <p>this.state.music is not ready</p>
        )}
      </Container>
    );
  }
}

export default MusicDetail;
