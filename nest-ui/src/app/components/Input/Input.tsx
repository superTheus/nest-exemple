import style from '@/app/components/input/input.module.scss';
import { LegacyRef, useEffect, useRef } from 'react';

interface InputProps {
  label: string;
  type: "text" | "password" | "email" | "date";
  name: string;
  id: string;
  placeholder?: string;
  refInput?: any;
}

export default function Input(Props: InputProps) {
  return (
    <div className={style.input}>
      <label htmlFor={Props.id}>{Props.label}</label>
      <input
        type={Props.type}
        name={Props.name}
        id={Props.id}
        placeholder={Props.placeholder && Props.placeholder}
        ref={Props.refInput} />
    </div>
  );
}