import React, { useEffect, useState } from 'react'
import Switch from 'react-switch'

import { changeTheme, loadTheme } from '../../utils/theme'

import './Header.css'


const Header = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = nextChecked => {
        setChecked(nextChecked)
        changeTheme()
    }

    useEffect(() => {
        setChecked(loadTheme())
    }, [])

	return (
		<header className="header">
			<div className="logo">
				<img src="/logo192.png" height={ 50 } alt="TO DO Cards"/>
				<h3>My TO DO Cards</h3>
			</div>

            <Switch
                onChange={ handleChange }
                checked={ checked }
                className="react-switch"
                onColor="#888"
                offColor="#ccc"
                uncheckedIcon={ false }
                checkedIcon={ false }
                uncheckedHandleIcon={
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 20
                    }}>
                        ☀️
                    </div>
                }
                checkedHandleIcon={
                    <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            color: "red",
                            fontSize: 18
                    }}>
                        🌓
                    </div>
                }
            />

		</header>
    )
}

export default Header