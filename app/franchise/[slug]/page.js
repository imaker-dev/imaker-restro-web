"use client";

import React, { useEffect } from "react";
import FranchiseDetailsPage from "../../views/franchise-details/franchise-details-page";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchFranchise } from "../../store/slices/franchiseSlice";
const Page = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const slug = params?.slug;

  const { isFetchingFranchise, franchise } = useSelector(
    (state) => state.franchise,
  );

  useEffect(() => {
    if (!slug) return;

    if (franchise?.slug === slug) return;

    dispatch(fetchFranchise({ slug }));
  }, [slug, dispatch, franchise]);

  return (
    <FranchiseDetailsPage franchise={franchise} loading={isFetchingFranchise} />
  );
};

export default Page;
