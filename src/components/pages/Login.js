import React from 'react';
import LoginForm from '../forms/LoginForm';

const Login = () => {


    return (
        <>
        <div className="w-screen h-screen flex flex-col items-center">
            <div className="w-full h-14 bg-secondary shadow flex flex-row items-center justify-center relative z-10">
                <h1 className="w-896px h-14 py-3 bg-secondary text-2xl text-primary font-comfortaa">.SafeHouse</h1>
            </div>
            <div className="w-896px mt-40 flex flex-row justify-center items-center relative">
                <div className="absolute z-0 top-0 -left-14 w-56 h-56 bg-purple-300 rounded-full mix-blend-multiply opacity-40 filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute z-0 -top-6 left-16 w-56 h-56 bg-pink-300 rounded-full mix-blend-multiply opacity-40 filter blur-xl animate-blob animation-delay-3000"></div>
                <div className="absolute z-0 top-10 left-36 w-56 h-56 bg-yellow-300 rounded-full mix-blend-multiply opacity-40 filter blur-xl animate-blob animation-delay-6000"></div>
                <div className="max-w-xl h-48 flex flex-col justify-between relative z-20">
                <div>
                    <p className="text-primary font-comfortaa text-3xl">At SafeHouse we not only improve society, but we help create one</p>
                    <p className="text-primary font-comfortaa text-xl">Witness people change their life</p>
                </div>
                <div>
                    <button className="w-max mr-6 text-primary font-comfortaa text-xl border-2 border-primary rounded-xl px-2 py-1">Discover more</button>
                    <button className="w-max bg-primary text-secondary font-comfortaa text-xl border-2 border-primary rounded-xl px-2 py-1">Donate now</button>
                </div>
                </div>
                <div>
                    <LoginForm></LoginForm>
                    <div className="w-80 ml-12 mt-4 text-primary text-center"><a href="/">Contact</a> • <a href="/">Privacy</a></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;