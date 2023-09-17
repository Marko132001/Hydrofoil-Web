import axios from "axios";
import AllPosts from '../../components/AllPosts';
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";
import useSWR from 'swr';
import { useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";


function Button2({ content, onClick, active, disabled }) {


  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? " bg-blue-400 bg-opacity-40 text-blue-500" : " text-blue-500"}
      ${
        !disabled
          ? " hover:bg-blue-500 hover:text-white"
          : "text-blue-300 bg-white cursor-not-allowed"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}


function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 3;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <ul className="flex gap-2">
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronLeft size="0.6rem" />
              <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronRight size="0.6rem" />
              <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}



function Posts({ posts, locale }){
    const router = useRouter()
    const [pageIndex, setPageIndex] = useState(0);
    const address = `${process.env.STRAPI_PAGINATION}/api/posts/?locale=${router.locale}&sort=date%3Adesc&pagination[page]=${pageIndex+1}&pagination[pageSize]=6&populate=*`;
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data } = useSWR(address, fetcher, {fallbackData: posts});

    const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <AllPosts posts={data} t={t} />
            <div className="flex gap-3 flex-wrap p-6 py-12">
              <PaginationNav1
                gotoPage={setPageIndex}
                canPreviousPage={pageIndex > 0}
                canNextPage={pageIndex < data.meta.pagination.pageCount - 1}
                pageCount={data.meta.pagination.pageCount}
                pageIndex={pageIndex}
              />
            </div>
            <Footer t={t} />
        </>
    );
}


export default Posts;


export async function getStaticProps({locale}){

  const postRes = await axios.get(`${process.env.STRAPI_URL}/api/posts/?locale=${locale}&sort=date%3Adesc&pagination[page]=1&pagination[pageSize]=6&populate=*`);


  return {
    props: {
      posts: postRes.data,       
      ...(await serverSideTranslations(locale, ["posts", "navbar", "footer"])),
    },       
  };
}