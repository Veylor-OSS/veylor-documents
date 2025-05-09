import React, { useState, useCallback } from "react";
import {
  Card,
  H5,
  Text,
  Colors,
  CardList,
  H3,
  Button,
} from "@blueprintjs/core";

interface SearchResult {
  title: string;
  description: string;
  modifiedDate?: string;
  content?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  onSelectDocument: (index: number) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onSelectDocument,
}) => {
  const [selectedDocumentIndex, setSelectedDocumentIndex] = useState<
    number | null
  >(0);

  const handleSelectDocument = useCallback(
    (index: number) => {
      setSelectedDocumentIndex(index);
      onSelectDocument(index);
    },
    [onSelectDocument],
  );

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        paddingRight: "8px",
        paddingBottom: "4em",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 0,
        }}
      >
        {results.map((result, index) => (
          <Card
            key={index}
            interactive
            onClick={() => handleSelectDocument(index)}
            style={{
              borderRadius: 0,
              backgroundColor:
                selectedDocumentIndex === index ? Colors.BLUE3 : "transparent",
            }}
          >
            <H5
              style={{
                color:
                  selectedDocumentIndex === index
                    ? Colors.WHITE
                    : Colors.LIGHT_GRAY1,
                margin: 0,
              }}
            >
              {result.title}
            </H5>
            <Text
              style={{
                color:
                  selectedDocumentIndex === index ? Colors.WHITE : Colors.GRAY3,
                fontSize: "14px",
              }}
            >
              {result.description}
            </Text>
            {result.modifiedDate && (
              <Text
                style={{
                  color:
                    selectedDocumentIndex === index
                      ? Colors.WHITE
                      : Colors.GRAY2,
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                Modified {result.modifiedDate}
              </Text>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
