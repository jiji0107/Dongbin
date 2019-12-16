import React, { Component } from 'react';
import Customer from '../components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({

})
class Mypage extends Component {
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
      const cellList = ["공연번호", "극단번호", "장르번호", "제목", "시작일자", "종료일자", "미리보기","공연내용"];
  
      return (
        <div>
          <Paper >
            <Table >
              <TableHead>
                <TableRow>
                  {cellList.map(c => {
                    return <TableCell key={c.toString()} >{c}</TableCell>
                  })}
                </TableRow>
  
              </TableHead>
              <TableBody>
                {this.state.customers ? this.state.customers.map(c => {
                  return <Customer key={c.show_id} show_id={c.show_id} troup_id={c.troup_id} genre_id={c.genre_id} show_title={c.show_title}
                    start_date={c.start_date} end_date={c.end_date} show_preview={c.show_preview} show_content={c.show_content} />
                }) : "no data"}
              </TableBody>
            </Table>
          </Paper>
        </div>
  
      )
    }
  
  }
export default Mypage;