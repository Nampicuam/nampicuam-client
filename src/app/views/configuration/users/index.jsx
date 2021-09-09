import React from 'react'
import { Breadcrumb } from 'app/components'

const AppAutoComplete = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Autocomplete' },
                    ]}
                />
            </div>
        </div>
    )
}

export default AppAutoComplete
