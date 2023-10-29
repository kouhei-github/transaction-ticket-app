export default function Headline(props: {title: string}) {
    return (
        <div className={"border-l-[3px] border-[#7888A9] h-[43px] flex items-center"}>
            <h3 className={"text-[18px] pl-5"}>{props.title}</h3>
        </div>
    )
}
