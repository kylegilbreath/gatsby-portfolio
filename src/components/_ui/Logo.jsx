import React, { Component } from 'react';
import styled from "@emotion/styled";
import colors from "styles/colors";

const LogoName = styled("logo")`
    h3 {
        color: ${colors.grey900};
        margin-top: 0px;
        text-decoration: none;
        font-weight: 500;
    }
`

class Logo extends Component {
    render() {
        return (
            <LogoName>
                <h3>Kyle Gilbreath</h3>
            </LogoName>
        );
    }
}

export default Logo;
