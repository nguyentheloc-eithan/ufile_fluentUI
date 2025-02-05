import * as React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Text,
  Divider,
  tokens,
  Avatar,
} from '@fluentui/react-components';
import {
  ShareRegular,
  MoreHorizontalRegular,
  ArrowDownloadFilled,
  DocumentRegular,
  FolderRegular,
  VideoRegular,
  DocumentPdfRegular,
} from '@fluentui/react-icons';

interface FileDetailsProps {
  file: {
    label: string;
    type: 'document' | 'folder' | 'pdf' | 'video';
    size: string;
    lastModified: string;
  } | null;
}

export const FileDetails: React.FC<FileDetailsProps> = ({ file }) => {
  if (!file)
    return (
      <Card
        style={{
          width: '360px',
          height: '100vh',
          padding: '16px',
          backgroundColor: tokens.colorNeutralBackground3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Select a file to view its details</Text>
      </Card>
    );

  const fileIcons = {
    document: <DocumentRegular />,
    folder: <FolderRegular />,
    pdf: <DocumentPdfRegular />,
    video: <VideoRegular />,
  };

  return (
    <Card
      style={{
        width: '360px',
        height: '100vh',
        padding: '16px',
        backgroundColor: tokens.colorNeutralBackground3,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <CardHeader
        image={fileIcons[file.type]}
        header={
          <Text
            weight="bold"
            size={500}>
            {file.label}
          </Text>
        }
        actions={
          <Button
            appearance="subtle"
            icon={<MoreHorizontalRegular />}
            aria-label="More options"
          />
        }
      />

      <Divider />

      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            marginBottom: '16px',
          }}>
          <Button
            appearance="primary"
            icon={<ShareRegular />}
            style={{ width: '100%' }}>
            Share
          </Button>
          <Button
            appearance="secondary"
            icon={<ArrowDownloadFilled />}
            style={{ width: '100%' }}>
            Download
          </Button>
        </div>

        <Text
          weight="semibold"
          block
          style={{ marginBottom: '8px' }}>
          File Details
        </Text>

        <div style={{ display: 'grid', gap: '8px' }}>
          <DetailRow
            label="Type"
            value={file.type}
          />
          <DetailRow
            label="Size"
            value={file.size}
          />
          <DetailRow
            label="Last Modified"
            value={file.lastModified}
          />
        </div>
      </div>

      <Divider />

      <CardFooter>
        <Button
          appearance="subtle"
          style={{ width: '100%' }}>
          View more details
        </Button>
      </CardFooter>
    </Card>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <Text size={200}>{label}</Text>
    <Text
      size={200}
      weight="medium">
      {value}
    </Text>
  </div>
);

export default FileDetails;
