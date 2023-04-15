import MainLayout from "@/layouts/MainLayout";
import Vercel from '../../public/vercel.svg'
import Image from "next/image";
import HeaderMenu from "@/widgets/HeaderMenu";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <MainLayout>
        <div>
          CONTENT
        </div>
      </MainLayout>
    </main> 
  )
}
