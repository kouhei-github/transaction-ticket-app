"use client"
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/navigation'
import {userSlice} from '@/contexts/userStore'
import {loginUserMoc} from '@/utils/mocData'

type formInputs = {
  email: string
  password: string
  passwordConfirm: string
}

export default function Login() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<formInputs>()

  const dispatch = useDispatch()

  const router = useRouter()

  const onSubmit = handleSubmit((data) => {
    console.log(data)

    // バックエンドでtokenなどの発行
    const user = loginUserMoc
    console.log(user)

    // ログインしたらデータの更新
    dispatch(
        userSlice.actions.updateUser({
          id: user.id,
          name: user.name,
          age: user.age,
          email: user.email,
          token: user.token,
        })
    )
    router.push("/")
  });
  return (
    <main>
      <div className={"max-w-[550px] mx-auto p-[24px]"}>
        <div className='border p-5'>
          <Box m={4}>
            <form onSubmit={onSubmit}>
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
                  ログインする
                </Button>
              </div>

            </form>
          </Box>
        </div>
      </div>
    </main>
  )
}
