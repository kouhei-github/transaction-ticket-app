import {TicketCardType} from '@/app/page'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
export default function TicketCard(props: TicketCardType & {isLoading: boolean}) {

  return (
    <Link href={`/event/`+props.id}>
      <div className={"h-[242px] w-[421px] mx-auto border rounded-lg hover:bg-[#f7f8f9]"}>

          <div className={"p-[13px]"}>
            {props.isLoading ? <Skeleton height={20} width={80} /> : <p className={"text-[11px] font-bold"}>{props.date}</p>}
            {props.isLoading ? <Skeleton height={50} width={370} /> : <h2 className={"text-[18px] font-bold"}>{props.title}</h2>}
          </div>

          <div className={"text-[#78a] text-[11px] px-[13px] py-[1px]"}>
            {props.isLoading ? <Skeleton height={65} width={390} /> : props.info}
          </div>

          <div className={"flex items-center w-11/12 mx-auto space-x-4 px-[12px] py-[15px]"}>
            <svg className={"w-3 h-3"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            {props.isLoading ? <Skeleton height={20} width={130} /> :  <p className={"text-[12px]"}>{props.company}</p>}
          </div>
          <div className={"bg-[#E9ECF2] h-[44px] flex items-center justify-end rounded-b-lg space-x-4 px-5"}>
            <span className={"text-[#78a] text-[13px]"}>詳細</span>
            <svg className={"text-[#78a] fill-[#78a] h-4 w-4"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </div>
      </div>
    </Link>
  )
}
