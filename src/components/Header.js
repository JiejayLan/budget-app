// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { startLogout } from '../actions/auth';
//
// export const Header = ({ startLogout }) => (
//     <header>
//         <h1>Expensify</h1>
//         <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard   </NavLink>
//         <NavLink to="/login" activeClassName="is-active" exact={true}>Login </NavLink>
//         <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
//         <button onClick={startLogout}>Logout</button>
//     </header>
// );
//
// const mapDispatchToProps = (dispatch) => ({
//     startLogout: () => dispatch(startLogout())
// });
//
// export default connect(undefined, mapDispatchToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/">
                    <h1>Expensify</h1>
                </Link>
                <Link className="header__title" to="/create">
                    <h1>Create Expense</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

