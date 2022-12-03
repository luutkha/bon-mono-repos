import { useEffect } from "react";
import SplashCardDashbroadLayout from "../../components/templates/splash-card-dashbroad-Layout/SplashCardDashbroadLayout";
import toeicData from "../../data/toeic.json";
import { useAppDispatch } from "../../redux/hooks";
import {
  setCurrentListSplash,
  setListWords
} from "../../redux/slice/splash-card.slice";
import { useSplashCardStore } from "../../redux/store";
import { Word } from "../../types/common.type";
export const ToeicSplashCardPage = () => {
  const dispatch = useAppDispatch();
  const { listWords } = useSplashCardStore();
  const data = toeicData as Word[];
  useEffect(() => {
    dispatch(setListWords(data.filter((c) => c.eng && c.spelling && c.vie)));
    if (listWords.length > 1) dispatch(setCurrentListSplash(5));
  }, [data, dispatch, listWords.length]);

  return (
    <SplashCardDashbroadLayout />
  );
};
