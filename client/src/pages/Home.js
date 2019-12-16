import React, { Component } from 'react';
import Customer from '../components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: '',
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
    });

    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper >
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>모든 상영작  </TableCell>
                <TableCell><NavLink to="/mypage">+더보기</NavLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell> &lt;</TableCell>
              </TableRow>
              {this.state.customers ? this.state.customers.map(c => {
                return <Customer key={c.show_id} show_id={c.show_id} troup_id={c.troup_id} genre_id={c.genre_id} show_title={c.show_title}
                 start_date={c.start_date} end_date={c.end_date} show_preview={c.show_preview} show_content={c.show_content}/>
              }) : "no data"}
              <TableRow>
                <TableCell> &gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>추천 상영작  </TableCell>
                <TableCell><NavLink to="/mypage">+더보기</NavLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell> &lt;</TableCell>
              </TableRow>
              {this.state.customers ? this.state.customers.map(c => {
                return <Customer key={c.show_id} className='show' show_preview={c.show_preview} />
              }) : "no data"}
              <TableRow>
                <TableCell> &gt;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>

    )
  }

}

export default Home;