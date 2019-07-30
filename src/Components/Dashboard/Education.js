import React, { Component } from 'react'
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../Actions/profileActions';

export class Education extends Component {


    deleteEduHandler(id){
        this.props.deleteEducation(id)
    }

    render() {
        const education = this.props.education.map(exp => (
          <tr key={exp._id}>
            <td>{exp.school}</td>
            <td>{exp.degree}</td>
            <td>
              <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
              {exp.to === null ? (
                ' Now'
              ) : (
                <Moment format="YYYY/MM/DD">{exp.to}</Moment>
              )}
            </td>
            <td>
              <button
                onClick={this.deleteEduHandler.bind(this,exp.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ));
        return (
          <div>
            <h4 className="mb-4">Education Credentials</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Degree</th>
                  <th>Years</th>
                  <th />
                </tr>
                {education}
              </thead>
            </table>
          </div>
        );
      }
    }


export default connect(null, { deleteEducation })(Education);
