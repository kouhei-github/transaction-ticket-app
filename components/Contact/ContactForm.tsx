export default function ContactForm() {

  


    return (
      <div className="pt-10">
        <div className="border w-full rounded-xl shadow-md p-8">
            <div className="w-full bg-[#d2d8dd] text-[#789] p-3 mb-4">
              お問い合せフォーム
            </div>
            <div className="mb-6">
              下記お問い合せフォームから気軽にお問い合せください。<br/>
              お問い合わせ内容を確認後、担当者より連絡いたします。
            </div>

            <form action="">
              <div className="mb-5">
                <div className="flex">
                  お名前<p className="text-[#f79]">※</p>
                </div>
                <input type="text" className="text-[12px] bg-[#f7f8f9] border border-[#eee] p-3 w-full mb-5"/>
              </div>
              
              <div className="mb-5">
                <div className="flex">
                  メールアドレス<p className="text-[#f79]">※</p>
                </div>
                <input type="text" className="text-[12px] bg-[#f7f8f9] border border-[#eee] p-3 w-full mb-5"/>
              </div>

              <div className="mb-5">
                <div className="flex">
                  メールアドレス<p className="text-[#f79]">※</p>
                </div>
                <textarea className="text-[12px] bg-[#f7f8f9] border border-[#eee] p-3 w-full h-[178px]" placeholder="お問い合せ内容を入力してください"/>
              </div>

              <div className="mb-7">
                <div>添付画像</div>
                <div>
                  <input type="file" className="
                  block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100" />
                </div>
                <small>
                アップロード可能なファイルの形式・サイズは下記の通りになります。<br/>
                ファイル形式: JPG, PNG, GIF<br/>
                ファイルサイズ:1ファイル 5MBまで
                </small>
              </div>

              <div className="grid place-content-center">
                <button className="bg-black text-[#fff] rounded-lg text-[11px] p-4 w-[70px] hover:bg-[#234]">
                  送信
                </button>
              </div>
            </form>
        </div>
      </div>
    )
  }
  