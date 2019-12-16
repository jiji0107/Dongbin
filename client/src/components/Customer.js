import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Tablecell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <Tablecell>{this.props.show_id}</Tablecell>
                <Tablecell>{this.props.troup_id}</Tablecell>
                <Tablecell>{this.props.genre_id}</Tablecell>
                <Tablecell>{this.props.show_title}</Tablecell>
                <Tablecell>{this.props.start_date}</Tablecell>
                <Tablecell>{this.props.end_date}</Tablecell>
                <Tablecell><img src={this.props.image} alt="이미지없음" /></Tablecell>
                <Tablecell>{this.props.show_content}</Tablecell>
                <Tablecell>내용</Tablecell>
            </TableRow>

        )
    }
}


export default Customer;