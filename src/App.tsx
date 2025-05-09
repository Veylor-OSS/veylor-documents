import classNames from "classnames";
import { StrictMode, useCallback, useState } from "react";
import { Classes, Section, CardList, SectionCard } from "@blueprintjs/core";
import { SearchResults } from "./components/SearchResults";
import { DocumentContent } from "./components/DocumentContent";
import veylorLogoLight from "./assets/VeylorLight.png";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const handleDarkThemeToggle = useCallback(
    () => setDarkTheme(!darkTheme),
    [darkTheme],
  );
  const [strictMode, setStrictMode] = useState(false);
  const handleStrictModeToggle = useCallback(
    () => setStrictMode((s) => !s),
    [],
  );

  const [searchResults] = useState([
    {
      title: "Saturn V",
      description:
        "The three-stage liquid-fueled launch vehicle was developed to support the Apollo program for human exploration of the Moon.",
      modifiedDate: "23 hours ago",
      content: `The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      `,
    },
    {
      title: "Ariane 5",
      description:
        "Ariane 5 succeeded Ariane 4, but was not derived from it directly. Ariane 5 has been refined since the first launch in successive versions.",
      modifiedDate: "1 day ago",
      content: `
      Ariane 5 was a Soviet rocket designed to carry the Soviet Union to the International Space Station (ISS) in 1969.`,
    },
    {
      title: "Falcon 9",
      description:
        "The first commercial resupply mission to the International Space Station launched in October 2012.",
      modifiedDate: "2 days ago",
      content: `
      Falcon 9 is a reusable rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 first launched on December 13, 2010.`,
    },
    {
      title: "Saturn V",
      description:
        "The three-stage liquid-fueled launch vehicle was developed to support the Apollo program for human exploration of the Moon.",
      modifiedDate: "23 hours ago",
      content: `The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      `,
    },
    {
      title: "Saturn V",
      description:
        "The three-stage liquid-fueled launch vehicle was developed to support the Apollo program for human exploration of the Moon.",
      modifiedDate: "23 hours ago",
      content: `The Saturn V was a multistage launch vehicle developed by NASA in the 1960s.
      Standing 363 feet tall, it remains the most powerful rocket ever successfully flown.
      It was used primarily during the Apollo missions to send astronauts to the Moon.
      The rocket had three stages, burned liquid fuel, and generated over 7.5 million pounds of thrust at liftoff.
      Saturn V launched a total of 13 times without a single failure.
      `,
    },
  ]);

  const [selectedDocument, setSelectedDocument] = useState(searchResults[0]);

  const handleDocumentSelect = (index: number) => {
    setSelectedDocument(searchResults[index]);
  };

  const content = (
    <div className="main-content">
      <div className="small-vertical-col">
        <img
          src={veylorLogoLight}
          className="logo"
          alt="Veylor logo"
          height={32}
          width={32}
        />
      </div>
      <Section title="Search" subtitle="63 RESULTS">
        <SectionCard padded={false}>
          <SearchResults
            results={searchResults}
            onSelectDocument={handleDocumentSelect}
          />
        </SectionCard>
      </Section>
      <DocumentContent
        title={selectedDocument?.title}
        modifiedDate={selectedDocument?.modifiedDate}
        content={selectedDocument?.content}
      />
    </div>
  );

  return (
    <div
      className={classNames("app", {
        [Classes.DARK]: darkTheme,
      })}
    >
      {/* <Navigation
        darkTheme={darkTheme}
        onToggleDarkTheme={handleDarkThemeToggle}
        strictMode={strictMode}
        onToggleStrictMode={handleStrictModeToggle}
      /> */}
      {strictMode ? <StrictMode>{content}</StrictMode> : content}
    </div>
  );
}

export default App;
