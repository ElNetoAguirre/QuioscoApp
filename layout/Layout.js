import Head from "next/head"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import Sidebar from "../components/Sidebar"
import Pasos from "../components/Pasos"
import ModalProducto from "../components/ModalProducto"
import useQuiosco from "../hooks/useQuiosco"

import "react-toastify/dist/ReactToastify.css"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

// Asegúrate de vincular modal a tu appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next")

export default function Layout({children, pagina}) {

  const {modal} = useQuiosco()

  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Proyecto Quiosco App, usando Next.js, Prisma, TS-Node, React-Modal, React-Toastify, Axios, Context API, Tailwind CSS"/>
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar/>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Pasos/>
            {children}
          </div>
        </main>
      </div>

      {modal && (
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProducto/>
        </Modal>
      )}

      <ToastContainer/>
    </>
  )
}