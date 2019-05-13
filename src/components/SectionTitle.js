import React from 'react'

const SectionTitle = ({ title, starclass }) =>
    <div className="row">
        <div className="col-lg-12 text-center">
        <h2>{title}</h2>
        <hr className={starclass} />
        </div>
    </div>

export default SectionTitle