import useLogin from '@/features/auth/login/hooks/useLogin';
import LoginForm from '@/features/auth/login/components/LoginForm';
import { Alert, AlertDescription } from '@/components/ui/alert';

const LoginPage = () => {
  const { mutate: login, isPending, isError, error } = useLogin();

  const onSubmit = async (data) => {
    login(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className=" flex justify-center rounded-lg shadow-lg mx-4">
        <div className="hidden bg-gray-200 w-1/2 p-4 lg:flex flex-col gap-5 justify-center items-center">
          <h1 className="text-xl font-semibold text-center text-gray-700 mb-2">
            AFATECH INTERNATIONAL SCHOOL
          </h1>
          <span className="bg-white p-6">
            <img src="/logo.png" alt="school logo" className="w-32" />
          </span>
        </div>

        <div className="lg:block lg:w-1/2">
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
// update

export default LoginPage;
