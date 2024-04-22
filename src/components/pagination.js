import React from 'react'


export default function AppPagination(props) {
    const postPerPage = props.postPerPage;
    const totalPosts = props.totalPosts
    const pageNumber = [];

    let nrOfPages = Math.ceil(totalPosts/postPerPage);
    

    for (let i = 1; i <= nrOfPages; i++) {
        pageNumber.push(i);
    }

    const paginate = (number) => {
        console.log("Clicked number:", number);
        if (props.paginate){
            props.paginate(number);
        }
    }

    const onPageNext = (e) => 
  {
    console.log("Pressed next")
    const curPage = Number(props.currentPage);
    if (curPage < (nrOfPages-1))
    {
        props.paginate(curPage+2);
      }
  }

    const onPagePrev = (e) => 
  {
    const curPage = Number(props.currentPage);
    if (curPage > 0)
    {
        props.paginate(curPage);
      }
  }



  return (
    <>
    <nav aria-label="List pagination">
        <ul className='pagination'>
            <li class="page-item">
                <button className="page-link" aria-label="Previous" onClick={onPagePrev}>
                    <span aria-hidden="true">&laquo;</span>
                </button>
            </li>
            {pageNumber.map(number => (
                <li className="page-item"> 
                <button class="page-link" onClick = {() => paginate(number)}>
                    {number}
                </button>
                </li>
            ))}
            <li className="page-item">
                <button className="page-link" aria-label="Next" onClick={onPageNext}>
                <span aria-hidden="true">&raquo;</span>
                </button>
            </li>
        </ul>
    </nav>



</>


  )
}

/*<nav aria-label="List pagination">
    <ul className="pagination">
      <li class="page-item">
        <button className="page-link" aria-label="Previous" onClick={onPagePrev}>
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      {
        pages.map ((i) =>
        <li className="page-item"><button class="page-link" data-pagenr={i} onClick={onPageChange}>{i}</button></li>
      )}
      <li className="page-item">
        <button className="page-link" aria-label="Next" onClick={onPageNext}>
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>*/