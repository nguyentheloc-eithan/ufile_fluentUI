import { Route, Routes } from 'react-router-dom';
import { UfyleLayout } from './components/layout';
import {
  ComputersPage,
  DocumentsPage,
  MyDrivePage,
  PDFsPage,
  PresentationsPage,
  SharedDrivesPage,
  SpreadsheetsPage,
  StarredPage,
  TrashPage,
} from './pages';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<UfyleLayout />}>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="home"
          element={<HomePage />}
        />
        <Route
          path="my-drive"
          element={<MyDrivePage />}
        />
        <Route
          path="computers"
          element={<ComputersPage />}
        />
        <Route
          path="shared-drives"
          element={<SharedDrivesPage />}
        />
        <Route
          path="documents"
          element={<DocumentsPage />}
        />
        <Route
          path="spreadsheets"
          element={<SpreadsheetsPage />}
        />
        <Route
          path="presentations"
          element={<PresentationsPage />}
        />
        <Route
          path="pdfs"
          element={<PDFsPage />}
        />
        <Route
          path="starred"
          element={<StarredPage />}
        />
        <Route
          path="trash"
          element={<TrashPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
