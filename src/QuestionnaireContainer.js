import React, { Component } from 'react';

class QuestionnaireContainer extends React.Component {
    render() {
        var rows = [];

        this.props.qs.forEach(function (q) {
            rows.push(
                <tr key={q.id}>
                    <td>{q.id}</td>
                    <td>{q.title}</td>
                </tr>);
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

QuestionnaireContainer.defaultProps = {
    qs:[
        {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
        {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
        {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
        {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
        {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
    ]
};


export default  QuestionnaireContainer