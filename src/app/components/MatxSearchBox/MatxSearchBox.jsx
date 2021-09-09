import React, { useState } from 'react'
import { connect } from "react-redux";
import { Icon, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { clearKey, searchKey } from "app/redux/BREAD/actions";
import clsx from 'clsx'

const useStyles = makeStyles(({ palette }) => ({
    root: {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        '&::placeholder': {
            color: palette.primary.contrastText,
        },
    },
    searchBoxHolder: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 9,
        height: 'var(--topbar-height)',
    },
    searchBox: {
        outline: 'none',
        border: 'none',
        fontSize: '1rem',
        height: 'calc(100% - 5px)',
    },
}))

const MatxSearchBox = ({ clearKey, searchKey }) => {
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const toggle = () => {
        clearKey();
        setOpen(!open)
    }
  const keyPress = (e) => e.keyCode === 13 && searchKey(e.target.value)    
  
    return (
        <React.Fragment>
            {!open && (
                <IconButton onClick={toggle}>
                    <Icon>search</Icon>
                </IconButton>
            )}

            {open && (
                <div
                    className={clsx(
                        'flex items-center',
                        classes.root,
                        classes.searchBoxHolder
                    )}
                >
                    <input
                        className={clsx(
                            'px-4 search-box w-full',
                            classes.root,
                            classes.searchBox
                        )}
                        type="text"
                        placeholder="Search here..."
                        autoFocus
                        onKeyDown={keyPress}
                    />
                    <IconButton onClick={toggle} className="align-middle mx-4">
                        <Icon>close</Icon>
                    </IconButton>
                </div>
            )}
        </React.Fragment>
    )
}

export default connect(null, { searchKey, clearKey })(MatxSearchBox);
