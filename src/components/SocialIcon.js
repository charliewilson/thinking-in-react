import React from 'react'

const SocialIcon = ({ link, icon }) =>
    <li>
        <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="btn-social btn-outline"
        >
        <i className={icon} />
        </a>
    </li>

export default SocialIcon