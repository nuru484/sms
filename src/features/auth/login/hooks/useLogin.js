import { useMutation } from '@tanstack/react-query';
import login from '@/api/auth/login';

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log('Login successful:', data);
      // Handle success (e.g., store token, redirect)
    },
    onError: (error) => {
      console.error('Login failed:', error);
      // Handle error (e.g., show error message)
    },
  });

  return mutation;
};
