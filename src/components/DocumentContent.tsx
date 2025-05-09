import React from "react";
import { Text, Section, SectionCard, Button } from "@blueprintjs/core";
import { AppToaster } from "../utils/toaster";

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
  const showToast = async () => {
    AppToaster.show({ message: "Not yet implemented!" });
  };

  return (
    <Section
      title={title}
      subtitle={modifiedDate}
      rightElement={<Button onClick={showToast}>Edit</Button>}
      style={{
        height: "100vh",
        overflowY: "auto",
        paddingRight: "8px",
        paddingBottom: "4em",
      }}
    >
      <SectionCard>
        <Text>{content}</Text>
      </SectionCard>
    </Section>
  );
};
