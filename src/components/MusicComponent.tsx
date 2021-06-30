import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Music } from "../types/interfaces";
import { withRouter } from "react-router-dom";

import { RouteComponentProps } from "react-router-dom";

interface MusicProps extends RouteComponentProps {
  musics: Music[];
}

// export interface MusicProps {
//   musics: Music[];
// }

export interface MusicState {}

class MusicComponent extends Component<MusicProps, MusicState> {
  // state = { :  }

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
        {this.props.musics.map((music) => (
          <Row
            className="mb-3 mt-3"
            onClick={() => {
              this.props.history.push(`/music-detail/${music.id}`);
            }}
          >
            <Col>
              <img src={music.artist.picture} alt={music.artist.name} />
            </Col>
            <Col>
              <p>{music.artist.name}</p>
            </Col>
            <Col>
              <p>{music.title_short}</p>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default withRouter(MusicComponent);
