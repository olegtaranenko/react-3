import React                 from 'react';
import {Col, Container, Row} from 'reactstrap';
import Header                from '../header';
import RandomChar            from '../randomChar';
import ItemList              from '../itemList';
import CharDetails           from '../charDetails';


/*
const characters = [
  {name: 'John Snow'},
  {name: 'Brandon Stark'},
  {name: 'Geremy'}
];
*/

const App = (props) => {
  const {characters, detail} = props;
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
            <CharDetails
              character={detail}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default App;