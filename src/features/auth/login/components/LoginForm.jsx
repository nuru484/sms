import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-10 flex flex-col gap-4 justify-center items-center"
      >
        <input
          type="text"
          {...register('username', { required: 'Username is required' })}
          placeholder="Username"
          className="border border-blue-600"
        />
        {errors.username && (
          <span className="text-red-600">{errors.username.message}</span>
        )}

        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
          placeholder="Password"
          className="border border-blue-600"
        />
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}

        <input type="submit" name="submit" className="bg-blue-500 w-28" />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
