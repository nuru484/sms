import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginForm = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // updated

  return (
    <div>
      <div className="bg-white p-8">
        <div className="flex justify-center mb-6 lg:hidden">
          <img src="/logo.png" alt="school logo" className="w-10" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2 lg:hidden">
          Afatech International School
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="text"
              {...register('username', { required: 'Username is required' })}
              placeholder="Username"
              className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-transparent transition duration-200`}
            />
            {errors.username && (
              <span className="text-sm text-red-500 mt-1">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              placeholder="Password"
              className={`w-full pl-10 pr-10 py-2 rounded-lg border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-transparent transition duration-200`}
            />
            {showPassword ? (
              <EyeOff
                className="absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-gray-600 transition duration-200"
                size={20}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Eye
                className="absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-gray-600 transition duration-200"
                size={20}
                onClick={togglePasswordVisibility}
              />
            )}
            {errors.password && (
              <span className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-500">
              <input
                type="checkbox"
                className="mr-2 rounded border-gray-300 text-gray-900"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-gray-900 hover:text-gray-800 hover:underline transition duration-200"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 flex items-center justify-center"
          >
            {isLoading ? (
              <span>Logging in...</span>
            ) : (
              <>
                Login
                <ArrowRight className="ml-2" size={18} />
              </>
            )}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{' '}
          <a
            href="/signup"
            className="text-blue-600 hover:text-blue-500 hover:underline transition duration-200"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoginForm;
