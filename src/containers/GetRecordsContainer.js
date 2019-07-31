/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecordFetchComponent from '../components/records/Recordfetch';
import { getRecords } from '../actions/GetRecordsActions';
import Authenticated from '../routes/Authenticated';


export class getRecordsContainer extends Component {
  componentDidMount() {
    const { recordAction } = this.props;
    recordAction();
  }

  render() {
    const { record, loading } = this.props;
    if (loading) {
      return (
        <div
          className="spinner-border"
          role="status"
          style={{
            fontSize: '130px', marginTop: '20%', marginLeft: '50%', color: 'teal',
          }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return (
      <RecordFetchComponent record={record} loading={loading} />
    );
  }
}

getRecordsContainer.propTypes = {
  recordAction: PropTypes.func.isRequired,
};
export const mapStateToProps = state => ({
  record: state.recordsReducer.record,
  loading: state.recordsReducer.loading,
});

export default connect(
  mapStateToProps, { recordAction: getRecords },
)(Authenticated(getRecordsContainer));
