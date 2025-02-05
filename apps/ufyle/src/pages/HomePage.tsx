import FileDetails from '@/components/file-details';
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@fluentui/react-components';
import {
  DocumentPdfRegular,
  DocumentRegular,
  EditRegular,
  FolderRegular,
  OpenRegular,
  PeopleRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import { useState } from 'react';

const items = [
  {
    file: { label: 'Project Plan', icon: <DocumentRegular /> },
    author: { label: 'Alice Johnson', status: 'available' as const },
    lastUpdated: { label: '3h ago', timestamp: 1 },
    lastUpdate: { label: 'You edited this', icon: <EditRegular /> },
  },
  {
    file: { label: 'Marketing Strategy', icon: <FolderRegular /> },
    author: { label: 'Bob Smith', status: 'busy' as const },
    lastUpdated: { label: 'Yesterday', timestamp: 2 },
    lastUpdate: { label: 'You opened this', icon: <OpenRegular /> },
  },
  {
    file: { label: 'Financial Report', icon: <DocumentPdfRegular /> },
    author: { label: 'Charlie Davis', status: 'away' as const },
    lastUpdated: { label: 'Last week', timestamp: 3 },
    lastUpdate: { label: 'You shared this', icon: <PeopleRegular /> },
  },
  {
    file: { label: 'HR Policies', icon: <DocumentRegular /> },
    author: { label: 'Dana White', status: 'offline' as const },
    lastUpdated: { label: 'Tue at 9:30 AM', timestamp: 4 },
    lastUpdate: { label: 'You edited this', icon: <EditRegular /> },
  },
  {
    file: { label: 'Sales Forecast', icon: <VideoRegular /> },
    author: { label: 'Eve Adams', status: 'available' as const },
    lastUpdated: { label: 'Today', timestamp: 5 },
    lastUpdate: { label: 'You viewed this', icon: <OpenRegular /> },
  },
  ...Array.from({ length: 30 }, (_, i) => ({
    file: { label: `Document ${i + 6}`, icon: <DocumentRegular /> },
    author: { label: `User ${i + 6}`, status: 'available' as const },
    lastUpdated: { label: `${i + 1} days ago`, timestamp: i + 6 },
    lastUpdate: { label: 'You modified this', icon: <EditRegular /> },
  })),
];

const columns = [
  { columnKey: 'file', label: 'File' },
  { columnKey: 'author', label: 'Author' },
  { columnKey: 'lastUpdated', label: 'Last updated' },
  { columnKey: 'lastUpdate', label: 'Last update' },
];

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div
      style={{
        display: 'flex',
        height: 'calc(100vh - 60px)',
        overflow: 'hidden',
      }}>
      <div
        style={{
          flex: '1',
          overflowY: 'auto',
          borderRight: '1px solid #e0e0e0',
        }}>
        <Table
          size="small"
          aria-label="Table with small size"
          style={{ width: '100%' }}>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.columnKey}>
                  {column.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.file.label}
                onClick={() => setSelectedFile(item.file)}>
                <TableCell>
                  <TableCellLayout media={item.file.icon}>
                    {item.file.label}
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout
                    media={
                      <Avatar
                        aria-label={item.author.label}
                        name={item.author.label}
                        badge={{ status: item.author.status }}
                      />
                    }>
                    {item.author.label}
                  </TableCellLayout>
                </TableCell>
                <TableCell>{item.lastUpdated.label}</TableCell>
                <TableCell>
                  <TableCellLayout media={item.lastUpdate.icon}>
                    {item.lastUpdate.label}
                  </TableCellLayout>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <FileDetails file={selectedFile} />
    </div>
  );
};

export default HomePage;
