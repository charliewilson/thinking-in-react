import React from 'react'

const BookFilter = ({ tabs }) =>
    <div className="row">
        <div className="col-lg-12">
        <ul className="nav nav-pills text-center">{tabs}</ul>
        </div>
    </div>

export default BookFilter