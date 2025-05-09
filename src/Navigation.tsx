import React, { useState } from "react";
import {
  Alignment,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  InputGroup,
  Button,
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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(0);

  return (
    <div style={{ borderBottom: '1px solid #394B59' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', gap: '16px' }}>
        <img
          src={veylorLogoLight}
          className="logo"
          alt="Veylor logo"
          height={32}
          width={32}
        />
        <div style={{ flex: 1, maxWidth: '600px' }}>
          <InputGroup
            leftIcon="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            rightElement={
              <Button
                minimal
                icon="maximize"
                onClick={() => {}}
              />
            }
          />
        </div>
        <div style={{ color: '#738694', fontSize: '14px' }}>{searchResults} RESULTS</div>
      </div>
    </div>
  );
};
