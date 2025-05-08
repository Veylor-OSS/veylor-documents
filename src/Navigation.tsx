import React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Switch,
} from "@blueprintjs/core";
import veylorLogoLight from "./assets/VeylorLight.png";
import veylorLogoDark from "./assets/VeylorDark.png";

interface NavigationProps {
  darkTheme: boolean;
  onToggleDarkTheme: () => void;
  strictMode: boolean;
  onToggleStrictMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  darkTheme,
  onToggleDarkTheme,
  strictMode,
  onToggleStrictMode,
}) => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <img
            src={veylorLogoLight}
            className="logo"
            alt="Veylor logo"
            height={45}
            width={45}
          />
          <span>Veylor Documents</span>
        </NavbarHeading>
        {/* <NavbarDivider />
        <Switch
          className="dark-theme-switch"
          label="Dark theme"
          checked={darkTheme}
          onChange={onToggleDarkTheme}
        />
        <div style={{ width: 20 }} />
        <Switch
          className="dark-theme-switch"
          label="React strict mode"
          checked={strictMode}
          onChange={onToggleStrictMode}
        /> */}
      </NavbarGroup>
    </Navbar>
  );
};
