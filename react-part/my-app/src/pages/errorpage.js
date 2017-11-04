import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize';
import '../style/App.css';

export default class ErrorPage extends React.Component {

  render() {
    let msg = '';
    switch (this.props.match.params.code) {
      case '500':
        msg = 'Erreur du serveur';
        break;
      case '404':
        msg = 'Page non trouvé';
        break;
      case '403':
        msg = 'Accès refusé';
        break;
      case '400':
        msg = 'Les données envoyées au serveur ne sont pas valides';
        break;
      default:
        msg = 'Erreur inconnue';
    }
    return (
      <div>
        <h1>Erreur !</h1>
        <p>{msg}</p>
        <Button waves="light"><Link to={'/'}><Icon>home</Icon></Link></Button>
      </div>
    );
  }
}
