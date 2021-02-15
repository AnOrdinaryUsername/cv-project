import React, { Component } from 'react';
import ColorThemeButton from '../components/ColorThemeButton';

const root = document.documentElement;

const detectColorTheme = (() => {
    // Initial color theme.
    let theme = 'light';
    const storedTheme = localStorage.getItem('theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (storedTheme) {
        root.setAttribute('data-theme', 'light');
        if (storedTheme === 'dark') {
            theme = 'dark';
        }
    } else if (mediaQuery.matches) {
        theme = 'dark';
    }

    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        return false;
    }

    root.setAttribute('data-theme', 'light');
    return true;
})();

class Header extends Component {
    constructor() {
        super();

        this.state = {
            isLightTheme: detectColorTheme,
        };

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        this.setState(
            {
                isLightTheme: !this.state.isLightTheme,
            },
            () => {
                const theme = this.state.isLightTheme ? 'light' : 'dark';
                root.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }
        );
    }

    render() {
        const { isLightTheme } = this.state;

        return (
            <header>
                <ColorThemeButton themeState={isLightTheme} clickHandler={this.changeTheme} />
            </header>
        );
    }
}

export default Header;