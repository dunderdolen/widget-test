import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography title="title" color="inherit">
                        CRUD Portal
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar;
