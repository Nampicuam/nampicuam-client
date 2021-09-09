import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { Icon, Badge, IconButton, Drawer } from '@material-ui/core'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import PlatformCard from './PlatformCard'
import { PlatformContext } from '../../contexts/PlatformContext'
import { useState } from 'react'
import useSettings from 'app/hooks/useSettings'
import { switchPortal } from 'app/redux/Navigation/action'


const useStyles = makeStyles(({ palette, ...theme }) => ({
    portal: {
        width: 360,
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
        },
        '& .notification__topbar': {
            height: 'var(--topbar-height)',
        },
    },
    platformCard: {
        '&:hover': {
            '& .delete-button': {
                cursor: 'pointer',
                display: 'unset',
                right: 0,
                marginTop: 6,
                top: 0,
                zIndex: 2,
            },
            '& .card__topbar__time': {
                display: 'none',
            },
        },
        '& .delete-button': {
            display: 'none',
            position: 'absolute',
            right: 0,
            marginTop: 9,
        },
        '& .card__topbar__button': {
            borderRadius: 15,
            opacity: 0.9,
        },
    },
}))

const Platforms = ({ switchPortal }) => {
    const [panelOpen, setPanelOpen] = useState(false)
    const theme = useTheme()
    const classes = useStyles()
    const { settings } = useSettings()
    const { portals } = useContext(PlatformContext)

    const handleDrawerToggle = () => setPanelOpen(!panelOpen)
    const parentThemePalette = theme.palette
    const updatePlatform = (code) => switchPortal(code)

    return (
        <ThemeProvider theme={settings.themes[settings.activeTheme]}>
            {portals.length > 1 &&
                <IconButton
                    onClick={handleDrawerToggle}
                    style={{
                        color:
                            parentThemePalette.type === 'light'
                                ? parentThemePalette.text.secondary
                                : parentThemePalette.text.primary,
                    }}
                >
                    <Badge color="secondary" badgeContent={portals.length}>
                        <Icon>view_carousel</Icon>
                    </Badge>
                </IconButton>
            }

            <Drawer
                width={'100px'}
                variant="temporary"
                anchor={'right'}
                open={panelOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div className={classes.portal}>
                    <div className="notification__topbar elevation-z6 flex items-center p-4">
                        <Icon color="primary">view_carousel</Icon>
                        <h5 className="ml-2 my-0 font-medium">Portals</h5>
                    </div>

                    {portals.map((portal, ind) => (
                        <PlatformCard
                            portal={portal}
                            isLastIndex={ind === portals.length - 1}
                            isFirstIndex={ind === 0}
                            key={ind}
                            updatePlatform={updatePlatform}
                        />
                    ))}
                </div>
            </Drawer>
        </ThemeProvider>
    )
}

export default connect(null, { switchPortal })(Platforms)
