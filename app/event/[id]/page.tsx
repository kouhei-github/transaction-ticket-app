/*Dynamic Routin用*/
import {eventDetailMoc} from '@/utils/mocData'
import FirstView from "@/components/FirstView";
import Headline from "@/components/Headline";
import Link from "next/link";

type ticketType = {
  id: number
  type: string
  title: string
  dateHeld: string
  receptionPeriod: string
}

type eventDetailType = {
  id: number
  title: string
  date: string
  company: string
  about: string
  note: string
  tickets: ticketType[]
  firstView: string
}

// これは静的サイトを生成するパス一覧を取得する最も重要な箇所
export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=10&select=title,price")
  const data: {products: {id: number}[]} = await  res.json()
  return data.products.map((product) => {
    id: product.id.toString()
  })
}


// 実際にページに表示させためのデータ
const getEventDetail= async  (id: string): Promise<eventDetailType> => {
  // 30秒ごとに更新 ISR
  const res = await fetch(
    `https://dummyjson.com/products/${id}`,
    { next: { revalidate: 30 } }
  )
  const result = await res.json()
  const data = eventDetailMoc
  return data
}

type Props = {
  params: {
    id: string
  }
}
const Home = async (props: Props) => {
  const event = await getEventDetail(props.params.id)
  return (
    <div className={"flex flex-col min-h-screen overflow-hidden"}>
      <FirstView image={event.firstView} />

      <div className={"w-full mt-7 pb-5 border-b"}>
        <div className={"md:w-4/5 w-11/12 mx-auto "}>
          <p className={"font-bold tracking-widest text-[13px]"}>{event.date}</p>
          <h2 className={"text-[24px] font-bold"}>{event.title}</h2>
          <div className={"flex items-center mx-auto space-x-4 py-[15px]"}>
            <svg className={"w-3 h-3 fill-[#778899]"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            <p className={"text-[12px] text-[#778899]"}>{event.company}</p>
          </div>
        </div>
      </div>

      <div className={"md:w-4/5 w-11/12 mx-auto flex space-x-4"}>
        <div className={"w-2/3"}>
          <div className={"my-10"}>
            <Headline title={"イベントについて"} />
            <p
              className={"leading-loose text-[#234] text-[12px] py-8"}
              dangerouslySetInnerHTML={{__html: event.about.replace(/\r?\n/g, '<br>')}}
            />
            <Link
              className={"underline underline-offset-2 text-blue-400 hover:text-blue-600"} href={"/contact"}>
              ■ お問い合わせ先はこちら
            </Link>
          </div>

          <div className={"my-10"}>
            <Headline title={"注意事項"} />
            <p
              className={"leading-loose text-[#234] text-[12px] py-8"}
              dangerouslySetInnerHTML={{__html: event.note.replace(/\r?\n/g, '<br>')}}
            />
          </div>
        </div>

        <div className={"space-y-7 w-1/3 my-10"}>
          <Headline title={"チケット情報"} />
          {event.tickets.map((ticket, index) => (
            <div key={index} className={"border p-4 rounded-lg group cursor-pointer"}>
              <Link href={`/ticket/${ticket.id.toString()}`}>
                <p className={`text-[11px] px-[8px] py-[5px] my-[5px] w-max rounded text-white ${ticket.type === "抽選" ? "bg-[#FD799A]" : "bg-[#233444]"}`}>{ticket.type}</p>

                <h3 className={"group-hover:opacity-50 text-[#012] text-[18px] tracking-[0.15em] pt-[6px] pb-[12px]"}>{ticket.title}</h3>

                <p className={"group-hover:opacity-50 text-[#789] text-[11px] tracking-[0.18em]"}>イベント開催日</p>
                <p className={"group-hover:opacity-50 pb-[8px] text-[11px] text-[#3C4B59]"}>{ticket.dateHeld}</p>

                <p className={"group-hover:opacity-50 text-[#789] text-[11px] tracking-[0.18em]"}>受付期間</p>
                <p className={"group-hover:opacity-50 pb-[8px] text-[11px] text-[#3C4B59]"}>{ticket.receptionPeriod}</p>
              </Link>
            </div>

          ))}
        </div>
      </div>
      </div>
  )
}

export default Home
