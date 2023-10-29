'use client'


import {useDispatch, useSelector} from 'react-redux'
import {User, userSlice} from '@/contexts/userStore'
import {useRouter} from 'next/navigation'
import {RootState} from '@/contexts/store'

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const logout = () => {
    dispatch(userSlice.actions.reset())
    router.push("/")
  }

  const user = useSelector((state: RootState) => state.user)

  return (
      <main className={"min-h-screen flex flex-col items-center justify-center"}>
        <div className={"border border-black space-y-2 p-3"}>
          {Object.keys(user.user).map((key, index) => (
              <div key={index} className={"flex space-x-2"}>
                <p>{key}: </p>
                <p>{user.user[key as keyof User]}</p>
              </div>
          ))}
        </div>

        <div className={"mt-5 cursor-pointer px-3 py-1 border bg-green-500 hover:bg-green-700 hover:text-white"} onClick={() => logout()}>ログアウト</div>
      </main>
  )
}
