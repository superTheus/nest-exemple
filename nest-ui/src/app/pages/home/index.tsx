"use client";
import api from '@/app/api';
import Input from '@/app/components/Input/Input';
import style from '@/app/pages/home/home.module.scss';
import { useEffect, useRef } from 'react';

export default function HomeScreen() {
  const userInputRef = useRef<HTMLInputElement>(null);
  const passInputRef = useRef<HTMLInputElement>(null);

  async function login() {
    const data = {
      email: userInputRef.current?.value,
      password: passInputRef.current?.value
    }

    api.post('auth/login', data).then((data) => {
      console.log(data.data);
    }).catch((error) => {
      console.log(error.response.data.message);
    });
  }

  useEffect(() => {
    if (userInputRef.current) {
      userInputRef.current.focus();
    }
  }, []);

  return (
    <main className={style.container} >

      <div className={style.main}>
        <h1> Bem Vindo </h1>

        <Input id='email' key="email" name='email' label='E-mail' type='email' refInput={userInputRef} />

        <Input id='senha' key="senha" name='senha' label='Senha' type='password' refInput={passInputRef} />

        <button type='button' onClick={() => login()} className='rounded-full px-4 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 max-h-10 mt-3'>
          Enviar
        </button>
      </div>

    </main>
  );
}