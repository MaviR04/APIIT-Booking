
import InputField from "../components/inputField";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-center">
                {/* Logo */}
                <img
                    src="src/assets/logo.png"
                    alt="APIIT Logo"
                    className="mx-auto mb-4 w-32"
                />
                <h1 className="text-gray-700 text-xl font-semibold mb-8">
                    Class Booking System
                </h1>

                {/* Login Form */}
                <div className="bg-white px-8 py-6 border rounded-md shadow-md w-80 mx-auto">
                    <form>
                        <InputField type="email" placeholder="Email:" icon="📧" />
                        <InputField type="password" placeholder="Password:" icon="🔒" />

                    </form>
                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded transition duration-300 w-full"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
