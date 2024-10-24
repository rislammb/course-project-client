import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";

interface ComponentProps {
  component: React.ElementType;
}

export function OpenRoute({ component: Component }: ComponentProps) {
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);

  return user ? <Navigate to="/" /> : <Component />;
}

export function ProtectedRoute({ component: Component }: ComponentProps) {
  const { user } = useAppSelector((state) => state.auth);

  return user ? <Component /> : <Navigate to="/login" />;
}
