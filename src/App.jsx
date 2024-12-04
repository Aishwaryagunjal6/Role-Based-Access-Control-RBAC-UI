import RolesCard from './components/RolesCard';
import UsersTable from './components/UsersTable';
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="container mx-auto p-6">
      <RolesCard className="mb-100" />
      <UsersTable />
      <Toaster />
    </div>
  );
}
