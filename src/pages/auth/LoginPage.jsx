import { useLogin } from '@/features/auth/login/hooks/useLogin';
import LoginForm from '@/features/auth/login/components/LoginForm';

const LoginPage = () => {
  const { mutate: login, isLoading, isError, error } = useLogin();

  const onSubmit = async (data) => {
    login(data);
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
      {isLoading && <p>Loading...</p>}
      {isError && (
        <p className="text-red-600">{error?.message || 'Login failed'}</p>
      )}
    </div>
  );
};

export default LoginPage;
