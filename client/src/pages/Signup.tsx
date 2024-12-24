import { useState, type FormEvent, type ChangeEvent } from 'react';
import { register } from '../api/userAPI';
import type { UserData} from '../interfaces/UserData';

const Signup = () => {
    const [signupData, setSignupData] = useState<UserData>({
        username: '',
        password: '',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await register(signupData);
            console.log('Signup successful:', data.message);
        } catch (err) {
            console.error('Failed to signup', err);
        }
    };

    return (
        <div className="form-container">
            <form className="form signup-form" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        value={signupData.username || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={signupData.password || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                        Signup
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
