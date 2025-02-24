import { useMutation } from '@tanstack/react-query';
import login from '@/api/auth/login';

const useLogin = () => {
  const mutation = useMutation({
    mutationFn: login,
  });

  return mutation;
};

export default useLogin;
