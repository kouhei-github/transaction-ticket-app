'use client'
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
} from '@chakra-ui/react'

type formInputs = {
  userId: string
  name:string
  email: string
  password: string
  passwordConfirm: string
}

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<formInputs>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });

  return (
    <div className='border p-5'>
      <Box m={4}>
        <form onSubmit={onSubmit}>
          <FormControl isInvalid={Boolean(errors.userId)} mb={30} >
            <FormLabel htmlFor='userId' className='text-[#789] text-[12px]'>ログインID<span className='text-red-600'>*</span></FormLabel>
            <Input
              id='userId'
              className='text-[12px] bg-[#f7f8f9] border p-3 w-full border-[#eee]'
              {...register('userId', {
                required: '必須項目です',
                maxLength: { value: 50, message: '50文字以内で入力してください' },
              })}
            />
            <FormErrorMessage>
              {errors.userId && errors.userId.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.userId)} mb={30} >
            <FormLabel htmlFor='name' className='text-[#789] text-[12px]'>氏名<span className='text-red-600'>*</span></FormLabel>
            <Input
              id='name'
              className='text-[12px] bg-[#f7f8f9] border p-3 w-full border-[#eee]'
              {...register('name', {
                required: '必須項目です',
                maxLength: { value: 50, message: '50文字以内で入力してください' },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          
          <FormControl isInvalid={Boolean(errors.email)} mb={30}>
            <FormLabel htmlFor='email' className='text-[#789] text-[12px]'>メールアドレス<span className='text-red-600'>*</span></FormLabel>
            <Input
              id='email'
              className='text-[12px] bg-[#f7f8f9] border p-3 w-full border-[#eee]'
              {...register('email', {
                required: '必須項目です',
                maxLength: { value: 50, message: '50文字以内で入力してください' },
                pattern: { value: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/, message: 'メールアドレスを入力してください' },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)} mb={30}>
            <FormLabel htmlFor='password' className='text-[#789] text-[12px]'>パスワード<span className='text-red-600'>*</span></FormLabel>
            <Input
              id='password'
              type='password'
              className='text-[12px] bg-[#f7f8f9] border p-3 w-full border-[#eee]'
              {...register('password', {
                required: '必須項目です',
                minLength: { value: 8, message: '8文字以上で入力してください' },
                maxLength: { value: 50, message: '50文字以内で入力してください' },
                pattern: { value: /^[0-9a-zA-Z]*$/, message: '半角英数字で入力してください' },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.passwordConfirm)} mb={30}>
            <FormLabel htmlFor='passwordConfirm' className='text-[#789] text-[12px]'>確認パスワード<span className='text-red-600'>*</span></FormLabel>
            <Input
              id='passwordConfirm'
              type='password'
              className='text-[12px] bg-[#f7f8f9] border p-3 w-full border-[#eee]'
              {...register('passwordConfirm', {
                required: '必須項目です',
                minLength: { value: 8, message: '8文字以上で入力してください' },
                maxLength: { value: 50, message: '50文字以内で入力してください' },
                pattern: { value: /^[0-9a-zA-Z]*$/, message: '半角英数字で入力してください' },
                validate: (value) => value === getValues("password") || "パスワードが一致しません",
              })}
            />
            <FormErrorMessage>
              {errors.passwordConfirm && errors.passwordConfirm.message}
            </FormErrorMessage>
          </FormControl>
          <div className='grid place-items-center'>
            <Button mt={4} className="w-[130px] bg-black text-white p-3 rounded-md" isLoading={isSubmitting} type='submit'>
              登録する &gt;
            </Button>
          </div>
          
        </form>
      </Box>
    </div>

  )
}
