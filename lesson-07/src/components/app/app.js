import React                 from 'react';
import {Col, Container, Row} from 'reactstrap';
import Header                from '../header';
import RandomChar            from '../randomChar';
import ItemList              from '../itemList';
import CharDetails           from '../charDetails';
import GotService            from "../../services/gotService";

const gotService = new GotService();
const characters = gotService.getAllCharacters(5, 3);
// .then(res => {
//   debugger
//   console.log(res);
// });


/*
const characters = [
  {name: 'John Snow'},
  {name: 'Brandon Stark'},
  {name: 'Geremy'}
];
*/

let App = () => {
  return (
    <>
      <Container>
        <Header/>
      </Container>
      <Container>
        <Row>
          <Col lg={{size: 5, offset: 0}}>
            <RandomChar/>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <ItemList
              characters={characters}
            />
          </Col>
          <Col md='6'>
            <CharDetails/>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default App;