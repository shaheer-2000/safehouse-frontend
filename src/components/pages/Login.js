import React from 'react';
import LoginForm from '../forms/LoginForm';

const Login = () => {


    return (
        <>
        <div className="w-screen h-screen bg-primary relative overflow-hidden">
            <div className="absolute z-0 top-0 -left-4 w-80 h-80 bg-purple-300 rounded-full opacity-20 filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute z-0 -top-10 right-24 w-80 h-80 bg-yellow-300 rounded-full opacity-20 filter blur-xl animate-blob animation-delay-3000"></div>
            <div className="absolute z-0 bottom-8 left-60 w-80 h-80 bg-pink-300 rounded-full opacity-20 filter blur-xl animate-blob animation-delay-6000"></div>
            <div className="w-full h-14 bg-secondary shadow relative z-10">
                <h1 className="w-896px h-14 mx-auto py-3 bg-secondary text-2xl text-primary font-comfortaa">.SafeHouse</h1>
            </div>
            <div className="w-896px h-full flex justify-between items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="max-w-xl h-48 flex flex-col justify-between">
                    <div>
                        <p className="text-secondary font-comfortaa text-3xl">At SafeHouse we not only improve society, but we help create one</p>
                        <p className="text-secondary font-comfortaa text-xl">Witness people change their life</p>
                    </div>
                    <button className="w-max text-secondary font-comfortaa text-xl border-2 border-secondary rounded-xl px-2 py-1 hover:bg-secondary hover:text-primary transition-all">Discover more</button>
                </div>
                <LoginForm></LoginForm>
            </div>
        </div>
        </>
    )
}

export default Login;