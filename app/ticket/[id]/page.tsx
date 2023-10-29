import { ticketDetailMoc } from '@/utils/mocData'
import Link from 'next/link'


type ticketType = {
    id: number
    type: string
    name: string
    price: number
    quantity: number
}

type ticketDetail = {
    id: string
    title: string
    dateHeld: string
    company: string
    type: string
    typeDetail: string
    receptionPeriod: string
    drawDate: string
    about: string
    ticketKind: ticketType[]
}
type ticketDetailType = {
    [eventId: string]: ticketDetail
}
type payInputs = {
    payment: string
    type: string
    count: string
}
// 実際にページに表示させためのデータ
const getEventDetail = async (id: string): Promise<ticketDetailType> => {
    // 30秒ごとに更新 ISR
    const res = await fetch(
        `https://dummyjson.com/products/${id}`,
        { next: { revalidate: 30 } }
    )
    const result = await res.json()
    const data = ticketDetailMoc
    return data
}

type Props = {
    params: {
        id: string
    }
}

const Home = async (props: Props) => {

    // const {
    //     register,
    //     handleSubmit,
    // } = useForm<payInputs>();


    const tickets = await getEventDetail(props.params.id)
    const ticket = tickets[props.params.id]

    return (
        <div className={"flex flex-col min-h-screen overflow-hidden"}>
            <div className={"w-full h-[45px] bg-[#e9ecf2]"}>
                <div className={"max-w-[1200px] m-auto p-[10px] text-[#234] hover:text-[#789]"}>
                    <Link href={"/event/" + ticket.id}>
                        ↩　イベントと詳細に戻る
                    </Link>
                </div>
            </div>
            <div className={"border-b-[1px]"}>
                <div className={"max-w-[1200px] m-auto p-[20px] font-bold"}>
                    <div >{ticket.dateHeld}</div>
                    <div className={"text-[24px] font-bold py-1"}>{ticket.title}</div>
                    <div className={"font-normal flex text-[#789] text-[11px]"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={"w-4 h-4"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        {ticket.company}
                    </div>
                </div>
            </div>
            <div className={"p-7 bg-[#f7f8f9]"}>
                <div className={"max-w-[1200px] m-auto"}>
                    <div>
                        <div className={"flex"}>
                            <div className={"bg-[#f79] rounded-md px-2 py-1 text-[11px] text-white"}>{ticket.type}</div>
                            <div className={'pl-4 text-[18px]'}>{ticket.typeDetail}</div>
                        </div>
                    </div>
                    <div className={"mt-16"}>
                        {ticket.ticketKind.map((miniTicket, index) => (
                            <div key={index} className={" border-t-[1px] border-b-[1px] p-5 grid grid-cols-4"}>
                                <div className={"col-span-2 font-bold"}>{miniTicket.name}</div>
                                <div className={"text-end"}>{miniTicket.price.toLocaleString()}円</div>
                                <div className={"text-center"}>
                                    {
                                        (miniTicket.quantity === 0)
                                            ? "x"
                                            : (miniTicket.quantity < 5)
                                                ? "△"
                                                : "◎"
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={"my-10"}>
                        <div>
                            <div className={'text-[#012] font-bold border-l-[3px] border-[#78a] p-l-[12px] p-3 text-[18px]'}>
                                開催日
                            </div>
                            <div className={'text-[#012] text-[13px] py-8'}>
                                {ticket.dateHeld}
                            </div>
                        </div>
                        <div>
                            <div className={'text-[#012] font-bold border-l-[3px] border-[#78a] p-l-[12px] p-3 text-[18px]'}>
                                受付期間
                            </div>
                            <div className={'text-[#012] text-[13px] py-8'}>
                                {ticket.receptionPeriod}
                            </div>
                        </div>
                        <div>
                            <div className={'text-[#012] font-bold border-l-[3px] border-[#78a] p-l-[12px] p-3 text-[18px]'}>
                                抽選日
                            </div>
                            <div className={'text-[#012] text-[13px] py-8'}>
                                {ticket.drawDate}
                            </div>
                        </div>
                        <div>
                            <div className={'text-[#012] font-bold border-l-[3px] border-[#78a] p-l-[12px] p-3 text-[18px]'}>
                                チケットについて
                            </div>
                            <p
                                className={'text-[#012] text-[13px] py-8'}
                                dangerouslySetInnerHTML={{ __html: ticket.about.replace(/\r?\n/g, '<br>') }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={"my-6"}>
                <div className={"max-w-[1200px] m-auto"}>
                    <form>
                        <div>
                            <div className={"mb-2 font-bold text-[#012] text-[13px]"}>支払い方法</div>
                            <select className={"mb-7 border border-[#e5e7eb]"} name="payment" id="payment">
                                <option value="creditCard">クレジットカード決済</option>
                            </select>
                        </div>
                        <div>
                            <div className={"mb-2 font-bold text-[#012] text-[13px]"}>券種</div>
                            <select className={"mb-7 border border-[#e5e7eb]"} name="type" id="type">
                                {ticket.ticketKind.map((miniTicket, index) => (
                                    <option key={miniTicket.id} value={miniTicket.id}>
                                        {miniTicket.name}
                                        {miniTicket.price.toLocaleString()}円
                                        {
                                            (miniTicket.quantity === 0)
                                                ? "x"
                                                : (miniTicket.quantity < 5)
                                                    ? "△"
                                                    : "◎"
                                        }
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <div className={"mb-2 font-bold text-[#012] text-[13px]"}>券種</div>
                            <select className={"mb-7 border border-[#e5e7eb]"} name="count" id="count">
                                <option value="1">１枚</option>
                                <option value="2">２枚</option>
                            </select>
                        </div>
                        <div className={"flex justify-center"}>
                            <button className={"my-[24px] p-[12px] px-8 bg-[#012] hover:bg-[#234] text-white rounded-sm text-[13px]"} type='submit'>
                                申込み内容を確認する ＞
                            </button>
                        </div>
                    </form>

                </div>
            </div>


            {/* <div className={"w-full mt-7 pb-5 border-b"}>
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
        </div> */}
        </div>
    )
}

export default Home