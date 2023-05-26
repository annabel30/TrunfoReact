import "./MostrarCartas.css";

import Navbar from '../navbar/Navbar';
import Carta from '../carta/Carta';

import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { CardService } from '../../service/CardService';

const MostrarCartas = () => {

  const [card, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState(9)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    getCards();
  }, [currentPage, pageSize]);

  const getCards = () =>  {
    CardService.pageBuscarTodasCards(currentPage, pageSize)
      .then(resposta => {
        setCards(resposta.data.content)
        setTotalPages(resposta.data.totalPages)
    })
    .catch(erro => console.log(erro))
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Mostrar cartas</h1>
        <div className="pagination">
          Páginas: 
            {Array.from({ length: totalPages }, (_, index) => index).map(
              (page) => (
                <button className="buttonPaginaItens"
                  key={page}
                  // className={page === currentPage ? "active" : ""}
                  onClick={() => handlePageChange(page)}
                >
                  {page + 1}
                </button>
              )
            )}
          </div>
        <div className="boxBorder">
          <div className="boxCartas">
            <>
              {
                card.map((carta) => <Carta carta={carta} key={uuid()} />)
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
}

export default MostrarCartas;