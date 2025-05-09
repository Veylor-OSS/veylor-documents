import React from "react";
import { Text } from "@blueprintjs/core";

interface DocumentContentProps {
  title?: string;
  modifiedDate?: string;
  content?: string;
}

export const DocumentContent: React.FC<DocumentContentProps> = ({
  title,
  modifiedDate,
  content,
}) => {
  return (
    <div className="content-area">
      <div className="search-panel">
        <div className="flex-col p-07">
          <span className="search-text">
            {modifiedDate ? `Modified ${modifiedDate}` : ""}
          </span>
          <span className="search-results-text">{title}</span>
        </div>
      </div>
      <div className="content" style={{ padding: "16px" }}>
        <Text>{content}</Text>
      </div>
    </div>
  );
};