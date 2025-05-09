import React, { useState, useCallback } from "react";
import { Card, H5, Text, Colors } from "@blueprintjs/core";

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
  onSelectDocument 
}) => {
  const [selectedDocumentIndex, setSelectedDocumentIndex] = useState<number | null>(0);

  const handleSelectDocument = useCallback((index: number) => {
    setSelectedDocumentIndex(index);
    onSelectDocument(index);
  }, [onSelectDocument]);

  return (
    <div
      className="search-results"
      style={{ display: "flex", flexDirection: "column", gap: "0px" }}
    >
      {results.map((result, index) => (
        <Card
          key={index}
          className="search-result-card"
          interactive
          onClick={() => handleSelectDocument(index)}
          style={{
            padding: "12px",
            backgroundColor:
              selectedDocumentIndex === index ? Colors.BLUE3 : "transparent",
            border: "none",
            borderRadius: "0",
          }}
          elevation={0}
        >
          <div style={{ marginBottom: "4px" }}>
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
          </div>
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
                  selectedDocumentIndex === index ? Colors.WHITE : Colors.GRAY2,
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
  );
};
