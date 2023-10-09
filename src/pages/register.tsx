import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const UserRegistrationForm = () => {
    const {
    register,
    formState: { errors },
    handleSubmit,
    } = useForm<IFormData>({
    mode: "all",
    });

    const onSubmit: SubmitHandler<IFormData> = (data) => {
    // Enviar dados do formulário ...
    console.log(data);
    };

    console.log({ errors });

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
        <label>Nome: </label>
        <input
        type="text"
        {...register("name", {
            required: "Nome é obrigatório",
            minLength: 3,
        })}
        />
        {<p>{errors.name?.message}</p>}
    </div>
    <div>
        <label>Nome completo: </label>
        <input type="name" {...register("name")} />
    </div>
    <div>
        <label>E-mail: </label>
        <input type="email" {...register("email")} />
    </div>
    <div>
        <label>Telefone: </label>
        <input type="tel" {...register("phone")} />
    </div>
    <div>
        <label>Endereço: </label>
        <input type="text" {...register("address")} />
    </div>
    <div>
        <label>CEP: </label>
        <input type="text" {...register("zipCode")} />
    </div>
    <div>
        <label>Rua: </label>
        <input type="text" {...register("street")} />
    </div>
    <div>
        <label>Número: </label>
        <input type="text" {...register("number")} />
    </div>
    <div>
        <label>Complemento: </label>
        <input type="text" {...register("complement")} />
    </div>
    <div>
        <label>Bairro: </label>
        <input type="text" {...register("neighborhood")} />
    </div>
    <div>
        <label>Cidade: </label>
        <input type="text" {...register("city")} />
    </div>
    
    <div>
        <label>Estado: </label>
        <input type="text" {...register("state")} value={addressData.state} />
    </div>
    <div>
        <label>Senha: </label>
        <input type="password" {...register("password")} />
    </div>
    <div>
        <label>Confirmação de Senha: </label>
        <input type="password" {...register("confirmPassword")} />
    </div>
    <div>
        <input type="checkbox" {...register("privacyPolicy", { required: true })} />
        <label>Aceito as políticas de privacidade</label>
        {errors.privacyPolicy && <p>É necessário aceitar as políticas de privacidade</p>}
    </div>
    <button type="submit">Cadastrar</button>
    </form>
);
};

export default UserRegistrationForm;