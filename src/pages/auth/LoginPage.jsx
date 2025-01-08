import { useLogin } from '@/features/auth/login/hooks/useLogin';
import LoginForm from '@/features/auth/login/components/LoginForm';
import { Alert, AlertDescription } from '@/components/ui/alert';

const LoginPage = () => {
  const { mutate: login, isPending, isError, error } = useLogin();

  const onSubmit = async (data) => {
    login(data);
  };

  return (
    <div className="mx-auto min-h-screen flex items-center justify-center bg-gray-50">
      <div className="">
        <div className="hidden">
          <img src="/icon" alt="school logo" />
        </div>
        <div className="rounded-lg shadow-lg">
          <LoginForm onSubmit={onSubmit} isLoading={isPending} />
        </div>
      </div>

      {isError && (
        <Alert className="border-red-600 mt-4 fixed top-2">
          <AlertDescription className="text-red-600">
            {error?.message}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default LoginPage;
