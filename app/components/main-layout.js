import React, {Component} from 'react';
import {Link} from 'react-router'

export default class MainLayout extends Component {
  render() {
    return(
      <div className="container">
        <div className="header">
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/Values"}>Values</Link></li>
              <li><Link to={"/IT"}>IT</Link></li>
              <li><Link to={"/Foto"}>Foto</Link></li>
            </ul>
        </div>
        <div className="boxForKuts">
          <Link className="kuts" Link to={"/"}>ANTON KUTS</Link>
        </div>
        <main>
        {this.props.children}
        </main>
      </div>
    );
  }
};
