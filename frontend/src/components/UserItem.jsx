import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import Button from './Button'

const UserItem = ({ name }) => {
    return (
        <li className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Avatar 
                    name={name}
                />
                <p className='capitalize'>{name}</p>
            </div>
            <Button
                name='sendMoney'
                fullWidth={false}
                size="small"
                type="button"
            >
                Send Money
            </Button>
        </li>
    )
}

UserItem.propTypes = {
    name: PropTypes.string.isRequired,
}

export default UserItem