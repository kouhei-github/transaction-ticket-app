'use client'
import NavigationBar from '@/components/NavigationBar'
import TicketCard from '@/components/Card/TicketCard'
import {eventTabMocs, ticketInfoMocs} from '@/utils/mocData'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {RootState} from '@/contexts/store'



export type TicketCardType = {
  id: string
  title: string
  info: string
  company: string
  date: string
}

export default function Home() {
  // チケット情報の取得
  const [tickets, setTickets] = useState<TicketCardType[]>([] as TicketCardType[])

  // ナビゲーションバーの一覧
  const [navigations, setNavigations] = useState(eventTabMocs)

  // Reduxからログイン状態かどうか確認する
  const user = useSelector((state: RootState) => state.user)
  // DOMの不必要なレンダリングを防ぐために初回ロード時のみ動くように変更した
  useEffect( () => {
    // ログインしていたらイベント閲覧履歴を追加する
    if (user.user.id !== 0){
      setNavigations( [...navigations, "イベント閲覧履歴"] )
    }
  }, [] );


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // loading開始
    setLoading(true)
    setTickets(ticketInfoMocs)

    const method = async () => {
      // APIでチケットのデータを取得する。
      setTimeout(() => { // ダミーなAPI
        console.log("API 実行")

        // loading終了
        setLoading(false)

      }, 1500 ) // APIで
    }
    // 非同期関数methodを呼び出す。
    method();
  }, []); // currentCtx.currentStepの変更を監視
  return (
    <main>
      <div className={"w-full border border-[#D2D8DD] "}>
        <NavigationBar pages={navigations} />
      </div>
      <div className={"w-[914px] mx-auto grid grid-cols-2 gap-5 p-[24px]"}>
        {tickets.map((ticket, index) => (
            <div key={index}>
              <TicketCard
                  id={ticket.id}
                  title={ticket.title}
                  info={ticket.info}
                  company={ticket.company}
                  date={ticket.date}
                  isLoading={loading}
              />
            </div>
        ))}
      </div>
    </main>
  )
}
