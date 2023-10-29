"use client"
import Image from "next/image";

export default function FirstView(props: {image: string}) {
    return (
        <div className={"relative w-full"}>
            <div>
                <Image
                    className={"w-full h-[400px] object-cover blur-sm"}
                    src={props.image}
                    alt={"ファーストビュー"}
                    width={1500}
                    height={300}
                />
            </div>
            <div className={"absolute inset-y-[18px] md:left-[40%] left-[16%]"}>
                <Image src={props.image} alt={"ファーストビュー"} width={260} height={300} />
            </div>
        </div>
    )
}
