import * as React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Avatar,
  Input,
  makeStyles,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  tokens,
  Tooltip,
} from '@fluentui/react-components';
import {
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup,
} from '@fluentui/react-nav-preview';
import { useNavigate } from 'react-router-dom';
import {
  bundleIcon,
  CloudSync20Filled,
  CloudSync20Regular,
  Delete20Filled,
  Delete20Regular,
  Document20Filled,
  Document20Regular,
  DocumentPdf20Filled,
  DocumentPdf20Regular,
  FolderFilled,
  FolderPeople20Filled,
  FolderPeople20Regular,
  FolderRegular,
  HomeFilled,
  HomeRegular,
  PersonRegular,
  SearchRegular,
  SignOutRegular,
  StarAdd20Filled,
  StarAdd20Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    display: 'flex',
    height: '100vh',
  },
  content: {
    flex: '1',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '8px 8px',
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: 1,
    maxWidth: '600px',
  },
});

// Icon bundles
const Home = bundleIcon(HomeFilled, HomeRegular);
const Folder = bundleIcon(FolderFilled, FolderRegular);
const MyDrive = bundleIcon(CloudSync20Filled, CloudSync20Regular);
const Documents = bundleIcon(Document20Filled, Document20Regular);
const PDFs = bundleIcon(DocumentPdf20Filled, DocumentPdf20Regular);
const SharedDrives = bundleIcon(FolderPeople20Filled, FolderPeople20Regular);
const Starred = bundleIcon(StarAdd20Filled, StarAdd20Regular);
const Trash = bundleIcon(Delete20Filled, Delete20Regular);

export const UfyleLayout = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');
  const renderHamburgerWithToolTip = () => (
    <Tooltip
      content="Navigation"
      relationship="label">
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
    </Tooltip>
  );
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Implement search logic here
  };
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.root}>
      <NavDrawer
        defaultSelectedValue="1"
        open={isOpen}
        type="inline">
        <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>

        <NavDrawerBody>
          <NavItem
            icon={<Home />}
            value="1"
            onClick={() => handleNavigation('/home')}>
            Home
          </NavItem>
          <NavItem
            icon={<MyDrive />}
            value="2"
            onClick={() => handleNavigation('/my-drive')}>
            My Drive
          </NavItem>
          <NavItem
            icon={<Folder />}
            value="3"
            onClick={() => handleNavigation('/computers')}>
            Computers
          </NavItem>

          <NavSectionHeader>Shared</NavSectionHeader>
          <NavItem
            icon={<SharedDrives />}
            value="4"
            onClick={() => handleNavigation('/shared-drives')}>
            Shared Drives
          </NavItem>

          <NavCategory value="categories">
            <NavCategoryItem icon={<Documents />}>File Types</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem
                value="5"
                onClick={() => handleNavigation('/documents')}>
                Documents
              </NavSubItem>
              <NavSubItem
                value="6"
                onClick={() => handleNavigation('/spreadsheets')}>
                Spreadsheets
              </NavSubItem>
              <NavSubItem
                value="7"
                onClick={() => handleNavigation('/presentations')}>
                Presentations
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>

          <NavDivider />

          <NavItem
            icon={<PDFs />}
            value="8"
            onClick={() => handleNavigation('/pdfs')}>
            PDFs
          </NavItem>
          <NavItem
            icon={<Starred />}
            value="9"
            onClick={() => handleNavigation('/starred')}>
            Starred
          </NavItem>
          <NavItem
            icon={<Trash />}
            value="10"
            onClick={() => handleNavigation('/trash')}>
            Trash
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>
      <div className={styles.content}>
        {!isOpen && renderHamburgerWithToolTip()}
        <div className={styles.header}>
          {!isOpen && renderHamburgerWithToolTip()}

          <div className={styles.searchContainer}>
            <Input
              placeholder="Search in Ufyle"
              value={searchQuery}
              onChange={handleSearch}
              contentBefore={<SearchRegular />}
              style={{ width: '100%' }}
            />
          </div>

          <Menu>
            <MenuTrigger>
              <Avatar
                name="User Name"
                badge={{ status: 'available' }}
                style={{ cursor: 'pointer' }}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem icon={<PersonRegular />}>Profile</MenuItem>
                <MenuItem icon={<SignOutRegular />}>Sign Out</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
