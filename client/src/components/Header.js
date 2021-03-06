import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../mail.svg'
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>
      default:
        return [
          <li key='1' style={{margin: '0 10px'}}><Payments/></li>,
          <li key='3'> Credits: <b>{this.props.auth.credits}</b></li>,
          <li key='2'><a href='/api/logout'>Logout</a></li>
        ]
    }
  }

  render() {
    return (
      <div className='navbar-fixed'>
        <nav className='blue-grey darken-4'>
          <div className="nav-wrapper" style={{margin: ' 0 15px'}}>
            <Link to={this.props.auth ? '/surveys':'/'} className="left brand-logo">
              <img src={logo} style={{width: '50px', margin: '10px 5px 5px 0px' }}/> 
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)